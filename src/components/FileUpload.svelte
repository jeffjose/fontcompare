<script>
  import { fonts } from "../stores.js";
  import * as opentype from "opentype.js";

  let fileinput;
  const onFileSelected = (e) => {
    let path = e.target.files[0];

    let reader = new FileReader();
    reader.readAsArrayBuffer(path);

    reader.onload = (e) => {
      let font = opentype.parse(e.target.result);
      console.log(`Adding ${font.names.fullName.en}`);

      $fonts = [...$fonts, font];
    };
  };
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
