<script>
    let isDarkMode = false; // Initially set to light mode

    function toggleTheme() {
        const body = document.body;
        isDarkMode = !isDarkMode; // Toggle the theme
        if (isDarkMode) {
            body.classList.add('dark-theme'); // Add dark theme class
        } else {
            body.classList.remove('dark-theme'); // Remove dark theme class
        }
    }
</script>

<div class="navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
    <div class="flex-1 px-2 mx-2">
        <!-- Use your logo URL as the src attribute and set a smaller width -->
        <img src="https://raw.githubusercontent.com/EveryDayWebThings/Master/main/static/favicon.png" alt="Everyday Web Things Logo" class="logo" style="width: 70px;"> <!-- Adjust -->
        <a class="text-lg font-bold" href="/"> everydaywebthings.com </a>
    </div>

    <div class="dropdown dropdown-left lg:hidden">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="m-1 btn">Links</div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
            tabindex="0"
            class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
        >
            <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
                About us
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
                Blog
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
                About
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/blank1">
                (blank)
            </a> 
            <a class="btn btn-ghost btn-sm rounded-btn" href="/blank2">
                (blank)
            </a> 
        </ul>
    </div>

    <div class="flex-none hidden px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
                Portfolio
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
                Blog
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
                About
            </a>
            <button class="btn btn-ghost btn-sm rounded-btn" on:click={toggleTheme}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    </div>
</div>
