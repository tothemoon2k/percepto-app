<script>
    import Navbar from '$lib/components/general/Navbar.svelte';
    import Screen1 from '$lib/components/screens/Screen1.svelte';
    import Screen2 from '$lib/components/screens/Screen2.svelte';
    import Screen3 from '$lib/components/screens/Screen3.svelte';

    let screen = 1;

    const handleNext = () =>{
        screen++;
    }

    const handleBack = () =>{
        screen--;
    }
</script>

<div class="w-screen h-screen">
    <Navbar />

    {#if screen === 1}
        <Screen1 on:next={handleNext}/>
    {/if}

    {#if screen === 2}
        <Screen2 />
    {/if}

    {#if screen === 3}
        <Screen3 />
    {/if}
</div>


<style> 
    *{
        font-family: neue-plak;
    }

    .h-screen{
        background: #f5f2f9;
    }
</style>