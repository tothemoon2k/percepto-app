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
        
    <a class="hidden md:block" href="https://www.producthunt.com/posts/percepto-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-percepto&#0045;2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=452928&theme=light" alt="Percepto - Does&#0032;your&#0032;start&#0045;up&#0032;idea&#0032;meet&#0032;winning&#0032;criteria&#0063; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</div>