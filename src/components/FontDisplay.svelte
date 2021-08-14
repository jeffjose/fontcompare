<script>
  import * as utils from "../utils.js";

  import { fonts } from "../stores.js";
</script>

<div class="displaygroup">
  {#each [...$fonts] as font}
    <div class="display {utils.getFontClassName(font)}">Aa</div>
  {/each}
</div>

<style scoped>
  .displaygroup {
    height: 100vh;
    background-color: #ff00000a;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .display {
    height: 200px;
    width: 100px;
    font-size: 100pt;
  }
</style>
