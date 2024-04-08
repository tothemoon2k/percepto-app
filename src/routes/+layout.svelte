<script>
    import "../app.css";
    import "../fonts.css";
    import { onMount } from "svelte";

    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });

    import posthog from 'posthog-js'

    onMount(()=>{
        posthog.init('phc_zqngHf3l7HSeQHegUJ4MCDA3Czghpdt222nSuXULBFz', { api_host: 'https://app.posthog.com' })
    })

    //Post hog events - posthog.capture('my event', { property: 'value' })
</script>

<svelte:head>
    <script type="text/javascript">
        window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/6249c990-5235-4716-aac9-efe0a2fc358e.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })();
    </script>
</svelte:head>
  
<slot />