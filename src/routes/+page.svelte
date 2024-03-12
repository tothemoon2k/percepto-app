<script>
    import Screen1 from '$lib/components/screens/Screen1.svelte';
    import Screen2 from '$lib/components/screens/Screen2.svelte';
    import Screen3 from '$lib/components/screens/Screen3.svelte';

    let screen = 1;

    const handleNext = () =>{
        console.log('clicked')
        screen++;
    }

    const back = () =>{
        screen--;
    }
</script>

<div class="w-screen h-screen">
    <div class="flex justify-between items-center md:absolute w-full px-8 md:px-12 py-2.5">
        <h2 class="text-3xl font-semibold">
            Fed<span class="text-gray-500">Ex</span>
        </h2>
        
        <div class="hidden md:flex font-medium gap-10">
            <a href="ww">What feedback will I get?</a>
            <a href="ww">Pricing</a>

            <a class="flex items-center gap-1.5" href="ww"><img class="w-6 h-6 object-cover" src="https://img.icons8.com/ios-glyphs/100/user-male-circle.png" alt=""> Sign In</a>
        </div>
    </div>


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