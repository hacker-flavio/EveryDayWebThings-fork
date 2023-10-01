<!-- Weather.svelte -->
<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  let temperature = 0; // Initialize temperature with a default value
  let location = "Unknown"; // Initialize location with a default value
  let locationError = null; // Initialize locationError as null

  async function fetchWeather() {
    if (!navigator.geolocation) {
      locationError = "Geolocation is not supported by your browser.";
      return;
    }

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const apiKey = '8c4d247647fd343dc72f8b08e6825723'; // Replace with your actual API key
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
      const data = await response.json();
      temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
      location = data.name;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  // Function to request geolocation permission
  async function requestLocationPermission() {
    try {
      await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      // Geolocation access granted
      locationError = null;
      fetchWeather(); // Fetch weather data after permission is granted
    } catch (error) {
      locationError = "Permission denied. Please enable location access to view weather.";
    }
  }

  // Fetch weather data when the component is mounted
  import { onMount } from 'svelte';
  onMount(requestLocationPermission);
</script>

<h1>Weather in {location}</h1>
<p>Temperature: {temperature}°C</p>

{#if locationError}
  <div class="error">{locationError}</div>
{/if}
