<script>
  import Profile from "./Profile.svelte";
  import Stories from "./Stories.svelte";
  import Footer from "./Footer.svelte";

  export let user;
  export let similars = [];
</script>

<style>
  .sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .sidebar-container {
    position: fixed;
  }
</style>

<div class="sidebar">
  <div class="sidebar-container">
    <Profile {user} />
    <Stories {similars} />
    <Footer />
  </div>
</div>
