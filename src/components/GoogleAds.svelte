<!-- GoogleAds.svelte -->
<script>
    import { onMount } from 'svelte';
  
    // Function to load the Google Ads script
    function loadGoogleAdsScript() {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4751283696014624';
      script.async = true;
      script.crossOrigin = 'anonymous';
  
      // Append the script to the document's body
      document.body.appendChild(script);
    }
  
    // Load the script when this component is mounted
    onMount(() => {
      loadGoogleAdsScript();
    });
  </script>
  