<script>
  import FeedbackForm from "./lib/FeedbackForm.svelte";
  import FeedbackList from "./lib/FeedbackList.svelte";
  import FeedbackStats from "./lib/FeedbackStats.svelte";
  import { FeedbackStore } from "./stores.js";

  const addReview = (e) => {
    const { name, comment, rating } = e.detail;
    $FeedbackStore = [
      ...$FeedbackStore,
      {
        id: $FeedbackStore.length + 1,
        name,
        comment,
        rating,
      },
    ];
  };
</script>

<main class="px-4">
  <div class="max-w-2xl mx-auto mt-16 space-y-2">
    <FeedbackStats />
    <FeedbackForm on:newReview={addReview} />
    <FeedbackList />
  </div>
</main>

<style>
</style>
