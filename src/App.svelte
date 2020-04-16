<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Timeline from "./components/Timeline.svelte";
  import { getCharacter, getSimilarCharacter } from "./api";

  const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";
  let user = {};
  let characters = [];
  let similars = [];
  // 493
  onMount(async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get("userId");
    const randomPage = Math.floor(Math.random() * 25) + 1;

    const result = await getCharacter({
      characterId: userId || 1,
      page: randomPage
    });
    user = result.character;
    characters = result.characters.results;
    let filter = user.name.split(" ");
    filter = filter[0].toLowerCase();
    const resultSimilars = await getSimilarCharacter({ filter });
    similars = resultSimilars.characters.results;
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:380,400&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
  :global(body) {
    background-color: #fafafa;
    color: rgba(38, 38, 38, 07);
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
  }
  :global(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
</style>

<Header />
<Main>
  <Timeline {characters} {user} />
  <Sidebar {user} {similars} />
</Main>
