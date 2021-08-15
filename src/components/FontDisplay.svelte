<script>
  import * as utils from "../utils.js";

  import { fonts } from "../stores.js";
</script>

<div class="displaygroup">
  {#each [...$fonts] as font}
    <div class="display {utils.getFontClassName(font)}">
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </div>
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
    display: flex;
    flex-direction: column;
    align-self: baseline;
  }
  .display * {
    font-size: 200pt;
    align-self: baseline;
  }
</style>
