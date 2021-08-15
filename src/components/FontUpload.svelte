<script>
  import { nanoid } from "nanoid";
  import * as opentype from "opentype.js";

  import { fonts } from "../stores.js";
  import * as utils from "../utils.js";
  import FontInjector from "../components/FontInjector.svelte";

  let fileinput;

  const onFileSelected = (e) => {
    [...e.target.files].forEach(async (path) => {
      let arrayBuffer = await utils.readFontAsArrayBuffer(path);
      let dataURL = await utils.readFontAsDataURL(path);

      $fonts = [
        ...$fonts,
        { font: opentype.parse(arrayBuffer), data: dataURL, uid: nanoid(4) }
      ];
    });
  };
</script>

<div>
  <div class="xinput">
    <input
      type="file"
      id="actual-btn"
      on:change={(e) => onFileSelected(e)}
      bind:this={fileinput}
      hidden
      multiple
    />

    <label class="label" for="actual-btn">Choose File</label>
  </div>

  {#each [...$fonts] as font}
    <FontInjector {font} />
  {/each}
</div>

<style>
  .label {
    background-color: indigo;
    color: white;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  .xinput {
    height: 40px;
  }
</style>
