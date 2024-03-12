<script>
    // @ts-nocheck
    import Navbar from '$lib/components/general/Navbar.svelte';
    import Screen1 from '$lib/components/screens/Screen1.svelte';
    import Screen2 from '$lib/components/screens/Screen2.svelte';
    import Loading from '$lib/components/screens/Loading.svelte';
    import Screen3 from '$lib/components/screens/Screen3.svelte';

    let screen = 2;
    let idea = "";

    const handleIdeaInput = (event) =>{
        idea = event.detail;
    }

    const handleSelectedChecklists = (event) =>{
        console.log(idea);
        for(let obj of event.detail){
            console.log(obj.checklist)
        }
    }

    const handleNext = () =>{
        screen++;
    }

    const handleEvaluate = () =>{
        screen = "loading";
    }

    const handleBack = () => {
        screen--;
    }
</script>

<div class="w-screen h-screen">
    <Navbar />

    {#if screen === 1}
        <Screen1 {idea} on:ideaInput={handleIdeaInput}  on:next={handleNext}/>
    {/if}

    {#if screen === 2}
        <Screen2 on:selectedChecklists={handleSelectedChecklists} on:back={handleBack} on:eval={handleEvaluate}/>
    {/if}

    {#if screen === "loading"}
        <Loading />
    {/if}

    {#if screen === 3}
        <Screen3 />
    {/if}
</div>


<style> 
    *{
        font-family: neue-plak;
    }
</style>