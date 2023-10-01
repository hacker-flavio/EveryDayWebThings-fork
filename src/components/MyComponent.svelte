<!-- MyComponent.svelte -->

<script>
    export let page;
  
    // Function to track page view
    function trackPageView() {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-H2EFXSCDHN', { 'page_path': page });
    }
  
    // Track page view when the component is mounted
    import { onMount } from 'svelte';
  
    onMount(trackPageView);
  </script>
  