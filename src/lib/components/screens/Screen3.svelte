<script>
    // @ts-nocheck
    export let idea;
    export let selectedChecklists;
    export let checklistNames;
    export let results;

    import ChecklistResults from "$lib/components/general/ChecklistResults.svelte";
    import Percentage from "$lib/components/general/Percentage.svelte";
</script>

<div class="flex flex-col justify-center items-center w-full fill-height absolute">
    <div class="mt-10 md:mt-20 lg:mt-14 mb-9 w-5/6">
        <div class="mb-3 flex items-center gap-6">
            <h1 class="text-4xl md:text-5xl font-bold">
                Results
            </h1>

            <Percentage percentage={25} positive={true} height="16" width="16"/>

            <img class="h-14 md:h-16" src="https://cdn.discordapp.com/attachments/1194844996034117662/1216870446314553395/Screenshot_2024-03-11_at_6.08.34_PM.png?ex=6601f5ea&is=65ef80ea&hm=c5b9c9e09519e5ca56cff3dbd6727efff9a0ec59ce6472457b76bad7e3a74469&" alt="Precentage Img">
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