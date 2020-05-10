<script context="module">
  export async function preload({query}, session){
    const API_RM = 'https://rickandmortyapi.com/api';
    const userRequest = await this.fetch(`${API_RM}/character/${query.userId || 1}`);
    const user = await userRequest.json()
    let filter = user.name.split(" ");
    filter = filter[0].toLowerCase();
    const characterRequest = await this.fetch(`${API_RM}/character?name=${filter}`)
    const characters = await characterRequest.json()
  
    const speciesRequest = await this.fetch(`${API_RM}/character?species=${user.species}`);
    const species = await speciesRequest.json()

    return { user, characters: characters.results, similars:species.results}
  }
</script>
<script>
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Timeline from "../components/Timeline.svelte";
  export let user
  export let characters
  export let similars
</script>

<svelte:head>
  <title>Rick & Morty</title>
</svelte:head>

<Main>
  <Timeline {characters} {user} />
  <Sidebar {user} {similars} />
</Main>
