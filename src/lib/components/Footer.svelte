<script>
    
    import TwitterIcon from './twitter-icon.svelte'
    import YouTubeIcon from './you-tube-icon.svelte'
  </script>
  
  <footer
    class="p-10 footer bg-primary text-primary-content footer-center"
  >
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="/projects">Privacy Policy</a>
      <a class="link link-hover" href="/posts">Bug Report</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://youtube.com">
          <YouTubeIcon />
        </a>
      </div>
    </div>
    <div>
      <p>
        Copyright &copy; {`${new Date().getFullYear()}`} EveryDayWebThings - All rights reserved
      </p>
    </div>
  </footer>
