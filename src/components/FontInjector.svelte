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
  <p>inject - {font.font.names.fullName.en}</p>
</div>
