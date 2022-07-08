<script>
  import { FeedbackStore } from "../stores.js";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

<div class="space-y-2">
  {#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade>
      <FeedbackItem item={fb} on:deleteFeedback />
    </div>
  {/each}
</div>
