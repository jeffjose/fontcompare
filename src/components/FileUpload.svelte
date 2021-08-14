<script>
  import * as opentype from "opentype.js";
  import { onMount } from "svelte";

  import { fonts } from "../stores.js";

  let fileinput;
  const onFileSelected = (e) => {
    let font = e.target.files[0];

    $fonts = [...$fonts, font];

    //let reader = new FileReader();
    //reader.readAsArrayBuffer(font);
    //reader.onload = (e) => {
    //  file = opentype.parse(e.target.result, {});
    //  const ctx = canvas.getContext("2d");

    //  file.draw(ctx, "JEFFREY", 0, 400, 500, { kerning: true, hinting: false });
    //};
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

  <!--
  <div>
    <canvas bind:this={canvas} width={1000} height={500} />
  </div>
-->
  <p>fonts</p>
  {JSON.stringify($fonts)}
  <p>end</p>
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
