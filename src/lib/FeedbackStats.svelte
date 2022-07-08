<script>
  import { FeedbackStore } from "../stores.js";

  $: count = $FeedbackStore.length;
  $: average =
    $FeedbackStore.reduce((acc, curr) => acc + curr.rating, 0) / count;
</script>

<div class="flex justify-between items-center">
  <p>{count} reviews</p>
  <p>Average rating: {average}</p>
</div>
