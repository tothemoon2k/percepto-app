<script>
    import "../app.css";
    import "../fonts.css";
    import Analytics from "$lib/components/Analytics.svelte";

    //Post hog events - posthog.capture('my event', { property: 'value' })
</script>

<Analytics/>
  
<slot />