<script>
  import * as opentype from "opentype.js";
  import { onMount } from "svelte";

  import { fonts } from "../stores.js";

  let fileinput;
  const onFileSelected = (e) => {
    let font = e.target.files[0].name;

    console.log(`Adding ${font}`);

    $fonts = [...$fonts, font];
  };

  onMount(() => {});
</script>

<div>
  <input
    type="file"
    id="actual-btn"
    on:change={(e) => onFileSelected(e)}
    bind:this={fileinput}
    hidden
  />

  <label for="actual-btn">Choose File</label>

  {#each [...$fonts] as font}
    <p>{font}</p>
  {/each}
</div>

<style>
  label {
    background-color: indigo;
    color: white;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }
</style>
