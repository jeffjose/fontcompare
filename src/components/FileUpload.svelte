<script>
  import { nanoid } from "nanoid";
  import * as opentype from "opentype.js";

  import { fonts } from "../stores.js";
  import * as utils from "../utils.js";
  import FontInjector from "../components/FontInjector.svelte";

  let fileinput;

  const onFileSelected = async (e) => {
    let path = e.target.files[0];

    let arrayBuffer = await utils.readFontAsArrayBuffer(path);
    let dataURL = await utils.readFontAsDataURL(path);

    $fonts = [
      ...$fonts,
      { font: opentype.parse(arrayBuffer), data: dataURL, uid: nanoid(4) }
    ];
  };
</script>

<div>
  {#each [...$fonts] as font}
    <FontInjector {font} />
  {/each}

  <input
    type="file"
    id="actual-btn"
    on:change={(e) => onFileSelected(e)}
    bind:this={fileinput}
    hidden
  />

  <label for="actual-btn">Choose File</label>

  {#each [...$fonts] as font}
    <p>{font.font}</p>
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
