<script>
    import logo from "$lib/assets/percepto.png";

    const reload = () => {
        window.location.reload();
    }
</script>

<div class="flex justify-between items-center lg:absolute w-full px-8 md:px-12 py-2.5">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img on:click={reload} class="h-14 relative cursor-pointer transition-all z-10" src={logo} alt="Percepto Logo">
</div>