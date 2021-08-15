<script>
  import * as utils from "../utils.js";

  import { fonts } from "../stores.js";

  let glyphs = ["A", "C", "I", "O", "g", "M", "Mg", "q", "bdpq"];
</script>

<div>
  {#each glyphs as glyph}
    <div class="glyphrow">
      {#each [...$fonts] as font}
        <span class="glyph {utils.getFontClassName(font)}">
          {glyph}
        </span>
      {/each}
    </div>
  {/each}
</div>

<!--

<div class="wrapper">
  {#each [...$fonts] as font}
    <div class="fontcolumn">
      <div class="glyph {utils.getFontClassName(font)}">
        {#each glyphs as glyph}
          {glyph}<br />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style scoped>
  .fontcolumn {
    display: flex;
    align-items: last baseline;
  }

  .glyph {
    font-size: 150pt;
    text-decoration: underline;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
  }
</style>

-->
<style scoped>
  .glyphrow {
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
  }

  .glyph {
    font-size: 150pt;
    text-decoration: underline;
    /*text-decoration: line-through overline underline; */
    text-decoration-color: red;
    text-decoration-thickness: 1px;
    color: #ff000070;
  }
</style>
