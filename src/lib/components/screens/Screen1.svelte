<script>
    import { createEventDispatcher } from 'svelte';
    import NextBtn from "$lib/components/general/NextBtn.svelte";

    const dispatch = createEventDispatcher();

    const handleNextClick = () => {
        console.log('clicked')
        dispatch('next');
    }
</script>

<div class="flex w-full fill-height absolute">
    <div class="hidden md:flex px-6 justify-center items-center w-full md:w-1/2 h-full">
        <img class="rounded-2xl aspect-square object-cover w-5/6" src="https://media.licdn.com/dms/image/C4E12AQEbVXou0BNGCA/article-cover_image-shrink_720_1280/0/1575880078189?e=2147483647&v=beta&t=nMyqG4r9JfHemvVg97Im-9sYt56nflHAoiDP2q_O6fo" alt="Paul Graham">
    </div>

    <div class="mt-12 mb-9 md:mb-0 md:mt-0 md:pr-16 flex flex-col justify-center w-full px-8 md:px-0 md:w-1/2 h-full">
        <h1 class="text-4xl md:text-5xl font-bold">
            Objectively Evaluate Your Business Idea in Under 30 Seconds ⏱️
        </h1>
        <p class="mt-1 text-lg md:text-xl text-gray-500">
            Objectively evaluate your business idea based on winning checklists
        </p>

        <textarea class="mt-6 border-2 rounded-2xl pt-3.5 px-5 pb-36 text-wrap" placeholder="A website that allows astronauts to buy affordable rocket boots from Russia via two-day shipping" name="idea" id="idea"></textarea>
        <p class="mt-2.5 mb-6 text-sm text-gray-500">Absolutely free. No sign up or credit card required.</p>

        <NextBtn text="Next" on:click={handleNextClick}/>
    </div>
</div>