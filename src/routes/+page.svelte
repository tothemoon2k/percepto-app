<script>
    // @ts-nocheck
    import axios from 'axios';
    import Navbar from '$lib/components/general/Navbar.svelte';
    import Screen1 from '$lib/components/screens/Screen1.svelte';
    import Screen2 from '$lib/components/screens/Screen2.svelte';
    import Loading from '$lib/components/screens/Loading.svelte';
    import Screen3 from '$lib/components/screens/Screen3.svelte';

    let screen = 2;

    let idea = "A pet photo sharing website";
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
        screen++;
    }

    const handleEvaluate = () =>{
        screen = "loading";
        console.log(JSON.stringify({
            businessIdea: idea, 
            checklists: selectedChecklists
        }));
        axios.post("http://localhost:3000/evaluate", {
            businessIdea: idea,
            checklists: selectedChecklists
        })
        .then(res => {
            results = res.data;
            console.log(results, selectedChecklists)
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