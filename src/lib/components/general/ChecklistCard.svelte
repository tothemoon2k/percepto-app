<script lang="ts">
    export let img: string;
    export let name: string;
    export let checklist: string[];
</script>

<div class="mx-auto md:mx-0 relative bg-white shadow-md rounded-2xl w-fit px-10 py-7 cursor-pointer group"> <!-- selected styling -> ring-4 ring-blue-600 ring-opacity-40-->
    <img class="invisible group-hover:visible absolute h-5 w-5 top-3 right-6 opacity-30 hover:opacity-70 hover:scale-105 transition-all" src="https://img.icons8.com/material-sharp/50/edit--v3.png" alt="Edit Icon">
    <img class="w-12 h-12 rounded-full" src={img} alt={name}>
    <h3 class="mt-5 mb-4 text-lg font-semibold hover:scale-105">{name}</h3>
    <ul class="flex flex-col gap-6">
        {#each checklist as item}
            <li class="flex items-center gap-1.5"><img class="w-4 h-4 -mt-0.5" src="https://img.icons8.com/material/24/unchecked-checkbox--v2.png" alt="Blank Checkbox">{item}</li>
        {/each}
    </ul>
</div>