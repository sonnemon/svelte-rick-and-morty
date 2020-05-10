<script>
    import Main from '../components/Main.svelte';
    export let status;
    export let error;

    const dev = process.env.NODE_ENV === "develipment";
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<style>
    .error{
        padding: 4em 0 0 0;
    }
    h1, p{
        margin: 0 auto;
    }
    h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5 0
    }
</style>

<Main>
    <div class="error">
        <h1>{status}</h1>
        <p>{error.message}</p>
        {#if dev && error.stack}
            <pre>{error.stack}</pre>
        {/if}
    </div>
</Main>