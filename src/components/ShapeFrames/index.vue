<template>
  <div
    class="frameShape w-[30rem] h-[30rem] bg-[#FF1E7C50] rounded-full border-[1rem] border-white relative"
  >
    <Items
      v-for="(slide, index) in slides"
      :slide="slide"
      :key="`item-${index}`"
      :current-slide="currentSlide"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { ref, onBeforeUnmount, onMounted } from "vue";
import Items from "./components/items.vue";
export default {
  components: { Items },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  setup(props) {
    const currentSlide = ref(0);
    const slideInterval = ref(null);

    function setCurrentSlide(index) {
      currentSlide.value = index;
    }

    function _next(step = 1) {
      const index =
        currentSlide.value < props.slides.length - 1
          ? currentSlide.value + step
          : 0;
      setCurrentSlide(index);
    }

    function startSlideTimer() {
      stopSlideTimer();
      slideInterval.value = setInterval(() => {
        _next();
      }, props.interval);
    }

    function stopSlideTimer() {
      clearInterval(slideInterval);
    }

    onMounted(() => startSlideTimer());

    onBeforeUnmount(() => {
      stopSlideTimer();
    });

    return {
      currentSlide,
      slideInterval,
    };
  },
};
</script>

<style>
.frameShape {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
