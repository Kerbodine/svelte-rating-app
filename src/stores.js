import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    name: "John Doe",
    comment: "This is a comment",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    comment: "This is a comment",
    rating: 4,
  },
  {
    id: 3,
    name: "John Doe",
    comment: "This is a comment",
    rating: 3,
  },
]);
