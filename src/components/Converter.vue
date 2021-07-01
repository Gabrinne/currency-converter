<template>
  <v-container>
    <v-row class="mb-6">
      <v-col cols="12" sm="12">
        <v-card class=" text-center mt-4 display-2 font-weight-light " flat>
          LE/TIP
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
                <vuetify-money
                  color="deep-purple accent-2"
                  class=" mt-5"
                  placeholder="Digite o valor da conta"
                  v-model="count.minValue"
                  outlined
                ></vuetify-money>
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <Slider
                  :minValue="people.minValue"
                  :maxValue="people.maxValue"
                  :rangeName="'Pessoas'"
                  :percentage="false"
                  @newValue="changePeople"
                />
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <Slider
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
            <v-row style="border: 2px solid black" class="d-flex">
              <v-col
                cols="12"
                xs="12"
                md="6"
                sm="6"
                v-for="(amount, i) in amounts"
                :key="i"
              >
                <ValueFields :title="amount.title" :total="amount.value" />
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>

    <v-speed-dial bottom right direction="top" fixed>
      <template v-slot:activator>
        <v-btn color="light-green accent-4" dark fab @click="step++">
          >
        </v-btn>
      </template>
    </v-speed-dial>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

import ValueFields from "./ValueFields.vue";
import Slider from "./Slider.vue";
import CustomSwitch from "./CustomSwitch.vue";
import Amounts from "./Amounts.vue";
import { api } from "../services/api";

export default {
  components: {
    Amounts,
    CustomSwitch,
    Slider,
    ValueFields,
  },
  data() {
    return {
      step: 1,
      amounts: [
        {
          title: "Conta",
          currency: null,
          value: null,
        },
        {
          title: "Gorjeta",
          currency: null,
          value: null,
        },
        {
          title: "Total",
          currency: null,
          value: null,
        },
        {
          title: "Por pessoa",
          currency: null,
          value: null,
        },
        {
          title: "Em R$",
          currency: "R$",
          value: null,
        },
      ],
    };
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
    ...mapGetters("countModule", ["BASE_CURRENCY_SYMBOL"]),
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
