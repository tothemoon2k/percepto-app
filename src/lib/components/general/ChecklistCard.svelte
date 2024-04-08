<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let img: string;
    export let name: string;
    export let checklist: string[];
    export let index: number;

    const dispatch = createEventDispatcher();
    let selected = false;

    const handleEdit = () => {
        dispatch('edit', index);
    }

    const handleClick = () => {
        selected = !selected;
        dispatch('click', {index, selected: selected});
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div on:click={handleClick} class="{selected ? "ring-4 ring-blue-600 ring-opacity-40" : ""} max-w-sm relative bg-white shadow-md rounded-2xl w-full px-10 py-7 cursor-pointer group">
    <img on:click={handleEdit} class="invisible group-hover:visible absolute h-5 w-5 top-3 right-6 opacity-30 hover:opacity-70 hover:scale-105 transition-all" src="https://img.icons8.com/material-sharp/50/edit--v3.png" alt="Edit Icon">
    <img class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src={img} alt={name}>
    <h3 class="mt-5 mb-4 md:text-lg font-semibold">{name}</h3>
    <ul class="flex flex-col gap-6">
        {#each checklist as item}
            <li class="flex items-center gap-1.5 text-sm md:text-base"><img class="w-4 h-4 -mt-0.5" src="https://img.icons8.com/material/24/unchecked-checkbox--v2.png" alt="Blank Checkbox">{item}</li>
        {/each}
    </ul>
</div>