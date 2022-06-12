<template>
  <div
    :class="TypeStyle"
    class="mt-20 lg:mt-0 frameShape border-[1rem] border-white relative"
  >
    <Items
      v-for="(slide, index) in slides"
      :slide="slide"
      :key="`item-${index}`"
      :current-slide="currentSlide"
      :index="index"
      :type="type"
    />
  </div>
</template>

<script lang="ts">
import { ref, onBeforeUnmount, onMounted, computed } from "vue";
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
    type: {
      type: String,
      default: "circular",
    },
  },
  setup(props) {
    const currentSlide = ref(0);
    const slideInterval = ref(null);

    const TypeStyle = computed(() => {
      if (props.type === "circular") {
        return "w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] xl:w-[30rem] xl:h-[30rem] bg-[#FF1E7C50] rounded-full";
      } else if (props.type === "rectangular") {
        return "w-[17.5rem] h-[25rem] sm:w-[22.5rem] sm:h-[30rem] xl:w-[27.5rem] xl:h-[35rem] bg-[#07C0FB30] rounded-[3.75rem]";
      } else {
        return "w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] xl:w-[30rem] xl:h-[30rem] bg-[#FF1E7C50] rounded-full";
      }
    });

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
      TypeStyle,
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
