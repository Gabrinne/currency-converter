<template>
  <v-container>
    <v-row class="mb-6">
      <v-col cols="12" sm="12">
        <v-card class=" text-center mt-4 display-2 font-weight-light  " flat>
          <span style="color:  #6600CC">
            LE/TIP
          </span>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" md="12" sm="12" class="pa-0 ">
        <v-window v-model="step" class="pa-3">
          <v-window-item :value="1">
            <v-row>
              <v-col cols="12 " xs="12" md="6" sm="6">
                <CustomSwitch
                  :label01="'EUR'"
                  :label02="'USD'"
                  :changeValueFunction="changeBaseCurrency"
                />
              </v-col>

              <v-col
                cols="12"
                xs="12"
                md="6"
                class=" d-flex justify-center "
                sm="6"
              >
                <CustomTextField
                  :type="'number'"
                  :minValue="count.minValue"
                  @newValue="changeCount"
                />
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <CustomSlider
                  :minValue="people.minValue"
                  :maxValue="people.maxValue"
                  :rangeName="'Pessoas'"
                  :percentage="false"
                  @newValue="changePeople"
                />
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <CustomSlider
                  :minValue="tip.minValue"
                  :maxValue="tip.maxValue"
                  :rangeName="'Gorjeta'"
                  :percentage="true"
                  @newValue="changeTip"
                />
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item :value="2">
            <Results />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>

    <v-speed-dial bottom right direction="top" fixed>
      <template v-slot:activator>
        <v-btn color="light-green accent-4" dark fab @click="step++">
          <v-icon>
            {{ step === 1 ? "mdi-arrow-right-thick" : "mdi-arrow-left-thick" }}
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import CustomSlider from "./CustomSlider.vue";
import Results from "./Results.vue";
import CustomTextField from "./CustomTextField.vue";
import CustomSwitch from "./CustomSwitch.vue";

export default {
  components: {
    Results,
    CustomSwitch,
    CustomSlider,
    CustomTextField,
  },
  data() {
    return {
      step: 1,
    };
  },

  mounted() {
    this.changeBaseCurrency("USD");
  },

  methods: {
    ...mapMutations("countModule", [
      "SET_CURRENCY",
      "SET_COUNT",
      "SET_TIP",
      "SET_PEOPLE",
    ]),

    ...mapActions("countModule", ["GET_BASE_CURRENCY_QUOTE"]),

    changeBaseCurrency(baseCurrency) {
      this["GET_BASE_CURRENCY_QUOTE"]({
        base_currency: baseCurrency,
      });
    },

    changeCount(value) {
      this["SET_COUNT"]({ value });
    },

    changeTip(value) {
      this["SET_TIP"](value);
    },
    changePeople(value) {
      this["SET_PEOPLE"](value);
    },
  },
  computed: {
    ...mapState("countModule", [
      "count",
      "people",
      "tip",
      "currency",
      "currencies",
    ]),
  },
};
</script>

<style></style>
