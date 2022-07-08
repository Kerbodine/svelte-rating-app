<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name;
  let comment;
  let rating;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("newReview", { name, comment, rating });
    name = "";
    comment = "";
    rating = "";
  };
</script>

<form on:submit={handleSubmit}>
  <div class="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg">
    <label for="name" class="text-gray-700">Name</label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name..."
      class="focus:outline-blue-500 rounded-lg border-2 border-gray-200 p-2"
      required
      bind:value={name}
    />
    <label for="comment" class="text-gray-700">Comment</label>
    <textarea
      id="comment"
      placeholder="Enter comment..."
      class="p-2 focus:outline-blue-500 rounded-lg border-2 border-gray-200"
      required
      bind:value={comment}
    />
    <label for="rating" class="text-gray-700">Rating</label>
    <select
      id="rating"
      class="p-2 focus:outline-blue-500 rounded-lg border-2 border-gray-200"
      required
      bind:value={rating}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button
      type="submit"
      class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-lg"
    >
      Submit
    </button>
  </div>
</form>
