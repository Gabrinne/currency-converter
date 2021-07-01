<template>
  <v-card flat style="border: 3px solid red">
    <v-card-title class="justify-center text-h6 font-weight-bold">
      {{ title }}
    </v-card-title>
    <v-text-field
      flat
      outlined
      style="border: 1px solid blue"
      class="font-weight-light"
      hide-details
      solo
      v-model="total"
      color="deep-purple accent-2 "
      readonly
    >
    </v-text-field>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
