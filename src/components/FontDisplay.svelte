<script>
  import * as utils from "../utils.js";

  import { fonts } from "../stores.js";
</script>

<div class="displaygroup">
  {#each [...$fonts] as font}
    <div class="display {utils.getFontClassName(font)}">A</div>
  {/each}
</div>

<style scoped>
  .displaygroup {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .display {
    font-size: 150pt;
    align-self: baseline;
    background-color: white;
  }
</style>
