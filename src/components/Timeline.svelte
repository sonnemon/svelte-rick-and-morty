<script>
  import Card from "./Card.svelte";
  export let characters = [];
  export let user;
</script>

<style>
  .timeline {
    padding: 4em 0 0 0;
  }
</style>

<div class="timeline">
  <div class="timeline-container">
    {#each characters as character}
      {#if user.id != character.id}
        <Card {character} />
      {/if}
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</div>
