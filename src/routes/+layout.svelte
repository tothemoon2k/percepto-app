<script>
    import "../app.css";
    import "../fonts.css";
    
    /*
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });
    */

    import posthog from 'posthog-js'

    posthog.init('phc_zqngHf3l7HSeQHegUJ4MCDA3Czghpdt222nSuXULBFz', { api_host: 'https://app.posthog.com' })

    //Post hog events - posthog.capture('my event', { property: 'value' })
</script>
  
<slot />