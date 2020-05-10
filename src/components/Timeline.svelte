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
    {#if characters.length == 1}
      <h3>No characters with the same names were found.</h3>
      <p>Try with other similar character. </p>
    {/if}
  </div>
</div>
