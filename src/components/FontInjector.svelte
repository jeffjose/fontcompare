<script>
  export let font;

  import { onMount, onDestroy } from "svelte";
  import * as utils from "../utils.js";

  let fontface;

  onMount(() => {
    fontface = `
    @font-face {
      font-family: ${utils.fontName(font)};
      src: ${utils.getFontData(font)};
      font-display: block;
    }`;

    let existingEl = document.getElementById(utils.getStyleIdFromFont(font));

    if (existingEl !== null) existingEl.remove();

    let newEl = document.createElement("style");
    newEl.setAttribute("id", utils.getStyleIdFromFont(font));
    newEl.appendChild(document.createTextNode(fontface));
    document.head.appendChild(newEl);
  });
</script>

<div>
  <p class="fontname" style="font-family: {utils.fontName(font)}">
    {utils.fontName(font)}
  </p>
</div>

<style>
  .fontname {
    height: 20px;
  }
</style>
