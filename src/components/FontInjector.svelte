<script>
  import { fonts } from "../stores.js";

  let style,
    fontblocks = "";

  $: {
    $fonts.forEach((font) => {
      fontblocks =
        fontblocks +
        `
      @font-face {
        font-family: "${font.names.fullName.en}";
      }
    `;
    });

    style = "<style>" + fontblocks + "</style>";
  }
</script>

<svelte:head>
  {@html style}
</svelte:head>

<h1>{$fonts.length}</h1>
