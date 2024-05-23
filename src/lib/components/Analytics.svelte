<script>
    import { onMount } from "svelte";

    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });

    import posthog from 'posthog-js';

    onMount(()=>{
        posthog.init('phc_zqngHf3l7HSeQHegUJ4MCDA3Czghpdt222nSuXULBFz', { api_host: 'https://app.posthog.com' })
    })
</script>

<svelte:head>
    <script>
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','om8oi');
    </script>
</svelte:head>

<!--
    Put this at page when checkout is successful

    <script type="text/javascript">
        // Insert Twitter Event ID
        twq('event', 'tw-om8oi-om8ok', {
    });
</script>
-->