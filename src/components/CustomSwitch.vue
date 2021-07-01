<template>
  <div class="switchDiv">
    <v-switch
      color="deep-purple accent-2"
      v-model="controlSwitch"
      @change="
        controlSwitch
          ? changeValueFunction(label02)
          : changeValueFunction(label01)
      "
    >
      <template #prepend>
        <span
          :class="
            !controlSwitch ? 'switchValue--active' : 'switchValue--default'
          "
          >{{ label01 }}</span
        >
      </template>
      <template #append>
        <span
          :class="
            controlSwitch ? 'switchValue--active' : 'switchValue--default'
          "
          >{{ label02 }}</span
        >
      </template>
    </v-switch>
  </div>
</template>

<script>
export default {
  props: {
    label01: {},
    label02: {},
    changeValueFunction: {},
  },
  name: "CustomSwitch",
  data() {
    return {
      controlSwitch: true,
    };
  },
};
</script>
<style scoped>
.switchDiv {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.switchValue--active {
  font-weight: bolder;
}
.switchValue--default {
  font-weight: lighter;
}
</style>
