<script>
    // @ts-nocheck
    export let idea;
    export let selectedChecklists;
    export let checklistNames;
    export let results = [];

    import ChecklistResults from "$lib/components/general/ChecklistResults.svelte";
    import Percentage from "$lib/components/general/Percentage.svelte";

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

        <button class="mr-4 text-end font-medium underline text-lg cursor-pointer">Save your results</button>
    </div>
    
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