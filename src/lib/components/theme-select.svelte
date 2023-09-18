<div>
    <button onclick="toggleTheme()" class="btn btn-primary">Toggle Theme</button>
</div>

<script>
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-theme');
    }
</script>

<div>
    <select
      data-choose-theme
      class="pr-9 select select-bordered select-primary bg-base-100 select-xs text-base-content"
    >
      <option disabled="disabled" selected="selected">Choose a theme</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="grey">Grey</option>
    </select>
</div>
