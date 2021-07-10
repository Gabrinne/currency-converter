<template>
  <v-card flat>
    <div>
      <span
        class="justify-center d-flex text-h6 font-weight-light"
        style="color: #6600CC"
      >
        {{
          this.percentage
            ? `${rangeName}: ${controlSlider}%`
            : `${rangeName}: ${controlSlider}`
        }}
      </span>
    </div>
    <v-slider
      v-model="controlSlider"
      :min="minValue"
      :max="maxValue"
      track-color="deep-purple accent-2"
      track-fill-color="deep-purple accent-2"
      thumb-color="deep-purple accent-2"
    >
      <template #append
        ><span>{{ maxValue }}</span></template
      >
      <template #prepend
        ><span>{{ minValue }}</span></template
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
