<template>
  <v-text-field
    class="txtField mt-6"
    color="deep-purple accent-2"
    outlined
    dense
    :type="type"
    v-model="controlTxtField"
    :min="minValue"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    type: {},
    minValue: {},
  },
  name: "CustomTxtField",
  data() {
    return {
      controlTxtField: this.minValue,
    };
  },
  watch: {
    controlTxtField: {
      handler() {
        this.$emit("newValue", this.controlTxtField);
      },
    },
  },
};
</script>

<style scoped>
.txtField {
  width: 100%;
}
</style>
