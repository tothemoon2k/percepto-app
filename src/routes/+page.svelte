<script>
    // @ts-nocheck
    import axios from 'axios';
    import Navbar from '$lib/components/general/Navbar.svelte';
    import Screen1 from '$lib/components/screens/Screen1.svelte';
    import Screen2 from '$lib/components/screens/Screen2.svelte';
    import Loading from '$lib/components/screens/Loading.svelte';
    import Screen3 from '$lib/components/screens/Screen3.svelte';
    import posthog from 'posthog-js';
    import { db } from '$lib/utils/firebase';
    import { addDoc, doc, collection, serverTimestamp } from 'firebase/firestore';

    let screen = 1;

    let idea = "";
    let selectedChecklists = [];
    let checklistNames = []
    let results = [];

    const handleIdeaInput = (event) =>{
        idea = event.detail;
    }

    const handleSelectedChecklists = (event) =>{
        for(let obj of event.detail){
            checklistNames.push(obj.name);
            selectedChecklists.push(obj.checklist);
        }
    }

    const handleNext = () =>{
        if(!idea){
            alert("Please enter your idea");
            return;
        }
        screen++;
    }

    const handleEvaluate = async () =>{
        if(!selectedChecklists.length){
            alert("Please select at least one checklist");
            return;
        }

        screen = "loading";

        posthog.capture('Evaluations', {
            idea: idea
        });

        const docRef = await addDoc(collection(db, "evaluations"), {
            idea: idea,
            checklists: selectedChecklists.flat(),
            timestamp: serverTimestamp(),
        });
        
        axios.post(import.meta.env.VITE_EVAL_POST_URL || "https://businessideaevaluator.onrender.com/evaluate", {
            businessIdea: idea,
            checklists: selectedChecklists,
        })
        .then(res => {
            results = res.data;
            screen = 3;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const handleBack = () => {
        screen--;
    }
</script>

<div class="w-screen h-screen">
    <Navbar />

    <svelte:component
        this={screen === 1 ? Screen1 : screen === 2 ? Screen2 : screen === 3 ? Screen3 : screen === "loading" ? Loading : null}
        {idea}
        {selectedChecklists}
        {checklistNames}
        {results}
        on:ideaInput={handleIdeaInput}
        on:next={handleNext}
        on:selectedChecklists={handleSelectedChecklists}
        on:back={handleBack}
        on:eval={handleEvaluate}
    />
</div>