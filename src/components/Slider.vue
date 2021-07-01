<template>
  <v-card flat>
    <v-card-title class="justify-center text-h6 font-weight-light">
      {{
        this.percentage
          ? `${rangeName}: ${controlSlider}%`
          : `${rangeName}: ${controlSlider}`
      }}
    </v-card-title>

    <v-slider
      v-model="controlSlider"
      :min="minValue"
      :max="maxValue"
      track-color="deep-purple accent-2"
      track-fill-color="deep-purple accent-2"
      thumb-color="deep-purple accent-2"
      @change="changeValueFunction(controlSlider)"
    >
    </v-slider>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      controlSlider: this.minValue,
    };
  },

  props: {
    minValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },

    rangeName: {
      type: String,
      required: true,
    },

    percentage: {
      type: Boolean,
    },
  },

  watch: {
    controlSlider: {
      handler() {
        this.$emit("newValue", this.controlSlider);
      },
    },
  },
};
</script>

<style></style>
