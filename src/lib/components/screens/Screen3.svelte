<script>
    // @ts-nocheck
    export let idea;
    export let selectedChecklists;
    export let checklistNames;
    export let results = [];

    import ChecklistResults from "$lib/components/general/ChecklistResults.svelte";
    import Percentage from "$lib/components/general/Percentage.svelte";

    let showingModal = true;

    let toggleModal = () => {
        showingModal = !showingModal;
    }


    function calculatePassedPercentage() {
        let totalItems = results.checklists.length;
        let passedItems = 0;
        let totalSum = 0;

        for (const checklist of results.checklists) {
            let sum = 0;
            for (const item of checklist.items) {
                sum+=item.passing_percentage;
            }
            totalSum += sum/checklist.items.length;
        }

        return Math.floor(totalSum/totalItems);
    }
</script>

<div class="flex flex-col justify-center items-center w-full fill-height absolute">

    {#if showingModal}
        <div class="bg-gray-300 flex justify-center items-center bg-opacity-50 z-10 w-screen h-screen">
            <div class="flex flex-col bg-white w-[90%] md:w-3/5 lg:w-2/5 rounded-2xl shadow-sm">
                <div class="flex items-center gap-4 py-4 px-10 w-full">
                    <h2 class="text-2xl font-medium w-full">Save Your Results</h2>
                </div>

                <hr>

                <div class="flex flex-col pt-10 pb-8 px-12 gap-10">

                    <div class="flex flex-col gap-8">
                        <div>
                            <label for="contact" class="mb-2">Phone or Email</label>
                            <div class="grid sm:grid-cols-2 gap-2">
                                <label for="hs-radio-checked-in-form" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                                    <input type="radio" name="hs-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-checked-in-form" checked>
                                    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Phone Number</span>
                                </label>
                                
                                <label for="hs-radio-in-form" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                                <input type="radio" name="hs-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-in-form">
                                <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">Email</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label for="contact" class="mb-2">Enter Your Phone Number</label>
                            <input type="email" id="input-label" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com">
                        </div>
                    </div>

                    <div class="flex gap-4 self-end">
                        <button on:click={toggleModal} class="text-lg font-medium">Back</button>
                        <button class="text-lg text-white px-5 py-3 rounded-xl font-medium bg-black">Send<!--If creating new checklist - Create, if editing checklist - Save--> </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}

    {#if !showingModal}
        <div class="mt-10 md:mt-20 lg:mt-14 mb-9 w-5/6">
            <div class="mb-3 flex items-center gap-6">
                <h1 class="text-4xl md:text-5xl font-bold">
                    Results
                </h1>

                <Percentage percentage={calculatePassedPercentage()} height=16 width=16 />
            </div>

            <p class="text-lg md:text-xl text-gray-500">
                {idea}
            </p>
        </div>

        <div class="flex flex-col gap-6 w-5/6">

            {#each results.checklists as checklist, i}
                <ChecklistResults 
                    items={checklist.items}
                    name={checklistNames[i]}
                    passPercentage={checklist.passing_percentage}
                />
            {/each}

            <button on:click={toggleModal} class="mr-4 text-end font-medium underline text-lg cursor-pointer">Save your results</button>
        </div>
    {/if}
    
</div>

<style>
    @media (max-width: 768px) {
        .fill-height{
            flex: 1;
            display: flex;
            justify-content: center;
        }
    }
    @media (min-width: 769px) {
        .fill-height{
            height: 100%;
        }
    }
</style>