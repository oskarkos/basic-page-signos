<template>
  <img
    v-if="currentSlide === index"
    class="absolute bottom-0"
    :class="TypeStyle"
    :src="slide"
    :alt="slide.replace(/^.*\//, '')"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
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
    type: {
      type: String,
      default: "circular",
    },
  },
  setup: (props) => {
    const TypeStyle = computed(() => {
      if (props.type === "circular") {
        return "w-[24rem] sm:w-[29rem] xl:w-[34rem] xl:h-[34rem] rounded-b-full";
      } else if (props.type === "rectangular") {
        return "w-[15rem] h-[25rem] sm:w-[20rem] sm:h-[30rem] xl:w-[30rem] xl:h-[40rem] rounded-b-[3.75rem]";
      } else {
        return "w-[24rem] h-[24rem] sm:w-[29rem] sm:h-[29rem] xl:w-[34rem] xl:h-[34rem] rounded-b-full";
      }
    });
    return {
      TypeStyle
    };
  },
});
</script>

<style scoped></style>
