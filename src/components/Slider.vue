<template>
  <v-card flat>
    <v-card-title class="justify-center text-h6 font-weight-light">
      {{
        this.percentage ? `${rangeName}: ${range}%` : `${rangeName}: ${range}`
      }}
    </v-card-title>

    <v-slider
      v-model="range"
      :min="minValue"
      :max="maxValue"
      track-color="deep-purple accent-2"
      track-fill-color="deep-purple accent-2"
      thumb-color="deep-purple accent-2"
    >
    </v-slider>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      range: null,
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
};
</script>

<style></style>
