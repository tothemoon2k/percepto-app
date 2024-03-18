<script>
    //@ts-nocheck
    export let name = "Testinski";
    export let items = [];
    
    let overallPass;

    export let extended = false;


    const toggleExtended = () => {
        extended = !extended;
    }

    function checklistPassed() {
        let totalWeight = 0;
        let passedWeight = 0;

        for (const item of items) {
            const { passing, passing_percentage } = item;
            const weight = passing_percentage / 100;
            totalWeight += weight;

            if (passing) {
            passedWeight += weight;
            }
        }

        const overallPassingPercentage = (passedWeight / totalWeight) * 100;
        const overallPassed = overallPassingPercentage >= 50;

        overallPass = overallPassed;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={toggleExtended} class="{extended ? "relative shadow-sm w-full px-6 rounded-xl bg-white cursor-pointer transition-all" : "relative shadow-sm w-full py-3 px-6 rounded-xl bg-white flex items-center gap-5 cursor-pointer transition-all"}">
    {#if !extended}
        <img class="h-10 md:h-12" src="https://cdn.discordapp.com/attachments/1194844996034117662/1216870446314553395/Screenshot_2024-03-11_at_6.08.34_PM.png?ex=6601f5ea&is=65ef80ea&hm=c5b9c9e09519e5ca56cff3dbd6727efff9a0ec59ce6472457b76bad7e3a74469&" alt="">
        <h3 class="leading-6 md:text-xl font-medium">{name} Checklist</h3>
        <h3 class="md:text-xl {overallPass ? "text-green-500": "text-red-500"} font-medium">{overallPass ? "Pass" : "Fail"}</h3>
        <img class="absolute right-12 h-10 -mt-1" src="https://img.icons8.com/material-two-tone/100/expand-arrow--v1.png" alt="Dropdown Arrow">
    {:else}
        <div class="flex items-center gap-5 py-4">
            <img class="h-10 md:h-12" src="https://cdn.discordapp.com/attachments/1194844996034117662/1216870446314553395/Screenshot_2024-03-11_at_6.08.34_PM.png?ex=6601f5ea&is=65ef80ea&hm=c5b9c9e09519e5ca56cff3dbd6727efff9a0ec59ce6472457b76bad7e3a74469&" alt="">
            <h3 class="leading-6 md:text-xl font-medium">{name} Checklist</h3>
            <h3 class="md:text-xl {overallPass ? "text-green-500": "text-red-500"} font-medium">{overallPass ? "Pass" : "Fail"}</h3>
        </div>
        
        <hr class="h-px bg-gray-200 border-0">

        {#each items as item}
            <div class="mt-4 ml-2.5">
                <div class="flex gap-4 items-center py-2">
                    <img class="h-9" src="https://cdn.discordapp.com/attachments/1194844996034117662/1216870446314553395/Screenshot_2024-03-11_at_6.08.34_PM.png?ex=6601f5ea&is=65ef80ea&hm=c5b9c9e09519e5ca56cff3dbd6727efff9a0ec59ce6472457b76bad7e3a74469&" alt="">
                    <h3 class="text-lg">{item.item}</h3>
                    <h3 class="text-lg {item.passing ? "text-green-500": "text-red-500"}">{item.passing ? "Pass" : "Fail"}</h3>
                </div>

                <p class="ml-1.5 text-gray-400">
                    {item.note}
                </p>
            </div>
        {/each}
        <img class="absolute top-6 right-12 h-10 rotate-180" src="https://img.icons8.com/material-two-tone/100/expand-arrow--v1.png" alt="Dropdown Arrow">
    {/if}
</div>