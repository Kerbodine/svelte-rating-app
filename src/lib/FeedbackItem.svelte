<script>
  import { FeedbackStore } from "../stores.js";
  import Card from "./Card.svelte";
  export let item;

  const handleDelete = (id) => {
    FeedbackStore.update((feedback) => {
      return feedback.filter((item) => item.id !== id);
    });
  };
</script>

<Card>
  <div
    class="h-auto bg-gray-200 w-24 grid place-items-center text-2xl font-semibold text-gray-500"
  >
    {item.rating}
  </div>
  <button
    on:click={() => {
      handleDelete(item.id);
    }}
    class="absolute right-2 top-2 w-8 h-8 text-gray-500 rounded-full hover:bg-gray-100 grid place-items-center"
  >
    x
  </button>
  <div class="p-4 space-y-1">
    <p class="text-lg font-semibold">{item.name}</p>
    <p>{item.comment}</p>
  </div>
</Card>
