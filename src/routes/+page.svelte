<script>
    import Screen1 from '$lib/components/screens/Screen1.svelte';
    import Screen2 from '$lib/components/screens/Screen2.svelte';

    let screen = 1;
</script>

<div class="w-screen h-screen">
    <div class="flex justify-between items-center absolute w-full px-12 py-2.5">
        <h2 class="text-3xl font-semibold">
            Fed<span class="text-gray-500">Ex</span>
        </h2>
        
        <div class="flex font-medium gap-10">
            <a href="ww">What feedback will I get?</a>
            <a href="ww">Pricing</a>

            <a class="flex items-center gap-1.5" href="ww"><img class="w-6 h-6 object-cover" src="https://img.icons8.com/ios-glyphs/100/user-male-circle.png" alt=""> Sign In</a>
        </div>
    </div>


    {#if screen === 1}
        <Screen1 />
    {/if}

    {#if screen === 2}
        <Screen2 />
    {/if}
    


        <!--
        <div class="flex justify-center items-center h-3/4">
            <div class="flex flex-col gap-5">
                <h1 class="text-6xl font-bold text-center">
                    Get feedback from your users
                </h1>
                <p class="text-2xl text-center">
                    Start building for free, then add a site plan to go live. Account plans start at just $12 per month.
                </p>
                <div class="flex justify-center items-center gap-5">
                    <button class="px-8 py-3 bg-blue-500 text-white font-medium rounded-md">Start for free</button>
                    <button class="px-8 py-3 bg-white text-blue-500 font-medium rounded-md">Learn more</button>
                </div>
            </div>
        </div>
        -->
</div>

<style> 
    *{
        font-family: neue-plak;
    }
</style>