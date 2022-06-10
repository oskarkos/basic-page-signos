<template>
  <img
    v-if="currentSlide === index"
    class="w-[34rem] h-[34rem] overflow-hidden rounded-b-full absolute bottom-0"
    :src="slide"
    :alt="slide.replace(/^.*\//, '')"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    slide: {
      type: String,
      required: true,
    },
    currentSlide: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup: () => {
    return {};
  },
});
</script>

<style scoped></style>
