<template>
  <v-container>
    <v-row style="border: 5px solid yellow" class="mb-6">
      <v-col cols="12" sm="12">
        <v-card class=" text-center" flat>
          LE/TIP
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" md="12" sm="12" class="pa-0 ">
        <v-window v-model="step" class="pa-3">
          <v-window-item :value="1">
            <v-row style="border: 2px solid black" class="">
              <v-col
                cols="12 "
                style="border: 3px solid green"
                xs="12"
                md="6"
                class=" d-flex justify-center align-center"
                sm="6"
              >
                <label>EUR</label>
                <v-switch
                  color="deep-purple accent-2 "
                  class="pl-4 font-weight-light"
                  v-model="base_currency"
                  true-value="USD"
                  false-value="EUR"
                  inset
                ></v-switch>
                <label>USD</label>
              </v-col>

              <v-col
                cols="12"
                xs="12"
                md="6"
                class=" d-flex justify-center "
                sm="6"
                style="border: 3px solid red"
              >
                <vuetify-money
                  color="deep-purple accent-2"
                  class=" mt-5"
                  placeholder="Digite o valor da conta"
                  v-model="amount"
                  outlined
                ></vuetify-money>
              </v-col>
              <v-col
                cols="12"
                xs="12"
                md="6"
                sm="6"
                style="border: 3px solid red"
              >
                <v-card class="pa-2 justify-space-around text-center">
                  CONTA
                </v-card>
                <v-card class="pa-2   text-center">
                  CONTA 1
                </v-card>
                <v-card class="pa-2   text-center">
                  CONTA 1
                </v-card>
              </v-col>
              <v-col
                cols="12"
                xs="12"
                md="6"
                sm="6"
                style="border: 3px solid red"
              >
                <v-card class="pa-2   text-center">
                  CONTA
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item :value="2">
            <v-row style="border: 2px solid black" class="d-flex">
              <v-col cols="12" xs="12" md="6" sm="6">
                <v-card class="pa-2  text-center ">
                  CONTA
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <v-card class="pa-2   text-center">
                  CONTA
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <v-card class="pa-2 justify-space-around text-center">
                  CONTA
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <v-card class="pa-2   text-center">
                  CONTA
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="6" sm="6">
                <v-card class="pa-2   text-center">
                  CONTA
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
    <!-- 
      <v-col cols="12" xs="12" md="12" sm="12" style="border: 5px solid red">
        <v-card class="pa-2 text-center">
          CONTA
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="12" sm="12" style="border: 5px solid red">
        <v-card class="pa-2 text-center">
          VALOR
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="12" sm="12" style="border: 5px solid red">
        <v-card class="pa-2 text-center">
          GORJETA 13%
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="12" sm="12" style="border: 5px solid red">
        <v-card class="pa-2 text-center">
          TOTAL
        </v-card>
      </v-col>
    </v-row> -->

    <!--    <v-row>
        <v-col cols="12" xs="12" md="12" sm="6" style="border: 5px solid red">
    <v-window-item :value="2">
          <v-card class="pa-2 text-center">
            PESSOAS
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="12" sm="6" style="border: 5px solid red">
          <v-card class="pa-2 text-center">
            POR PESSOA
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="12" sm="6" style="border: 5px solid red">
          <v-card class="pa-2 text-center">
            EM R$
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="12" sm="6" style="border: 5px solid red">
          <v-card class="pa-2 text-center">
            EM R$
          </v-card>
        </v-col>
      </v-row>
    </v-window-item>  -->

    <v-speed-dial bottom right direction="top" fixed>
      <template v-slot:activator>
        <v-btn color="light-green accent-4" dark fab @click="step++">
          >
        </v-btn>
      </template>
    </v-speed-dial>
  </v-container>

  <!-- <v-window v-model="step">
      <v-speed-dial
        bottom
        right
        direction="top"
        fixed
        v-if="$vuetify.breakpoint.xs"
      >
        <template v-slot:activator>
          <v-btn color="light-green accent-4" dark fab @click="step++">
            <v-icon v-if="step === 1"> mdi-chevron-right </v-icon>
            <v-icon v-else> mdi-chevron-left </v-icon>
          </v-btn>
        </template>
      </v-speed-dial>

      <v-window-item :value="1">
        <v-layout row wrap class="mb-5">
          <v-flex
            xs12
            style="border: 1px solid red"
            md12
            sm12
            class="text-center text-xl-h2 text-h4 ma-2 font-weight-light"
          >
            Le/Tip
          </v-flex>
        </v-layout>

        <v-layout row wrap class="mb-5">
          <v-flex
            class="pa-2 d-flex justify-center"
            xs12
            md6
            sm6
            style="border: 1px solid red"
          >
            <v-card flat class="pa-2">
              <v-layout d-flex align-center class="pa-2">
                <span class="font-weight-light">EUR</span>
                <v-switch
                  color="deep-purple accent-2 "
                  class="pl-4 font-weight-light"
                  label="USD"
                  v-model="base_currency"
                  true-value="USD"
                  false-value="EUR"
                  inset
                ></v-switch>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex class="pa-2 d-flex justify-center" xs12 md6 sm6>
            <v-card flat class="d-flex align-center">
              <vuetify-money
                class="mt-3"
                color="deep-purple accent-2"
                placeholder="Digite o valor da conta"
                v-model="amount"
                outlined
              ></vuetify-money>
            </v-card>
          </v-flex>

          <div v-if="!$vuetify.breakpoint.xs">
            <Amounts
              :amount="amount"
              :icon="symbolCurrency"
              :brlValue="totalBRL"
              :tip="tipValue"
              :total="totalBillWithTip"
              :perPerson="totalBillPerPerson"
              @tip-value="getTipValue"
              @number-people="getPeoples"
            />
          </div>
        </v-layout>
      </v-window-item>

      <v-window-item :value="2">
        <Amounts
          :amount="amount"
          :icon="symbolCurrency"
          :brlValue="totalBRL"
          :tip="tipValue"
          :total="totalBillWithTip"
          :perPerson="totalBillPerPerson"
          @tip-value="getTipValue"
          @number-people="getPeoples"
        />
      </v-window-item>
    </v-window> -->
</template>

<script>
import Amounts from "./Amounts.vue";
import { api } from "../services/api";

export default {
  components: {
    Amounts,
  },
  data() {
    return {
      step: 1,
      apiKey: process.env.VUE_APP_API_KEY,
      tip: 10,
      peoples: 2,
      base_currency: "EUR",
      amount: null,
      tipPercentage: null,
      tipValue: null,
      totalBillWithTip: null,
      totalBillPerPerson: null,

      totalBRL: null,
    };
  },

  methods: {
    calculateBillTotal() {
      this.tipPercentage = this.tip / 100;
      this.tipValue = (this.amount * this.tipPercentage).toFixed(2);
      this.totalBillWithTip = (
        parseFloat(this.tipValue) + parseFloat(this.amount)
      ).toFixed(2);

      this.totalBillPerPerson = (this.totalBillWithTip / this.peoples).toFixed(
        2
      );
    },

    async convertValuePerPerson() {
      const quote_currency = "BRL";

      if (this.totalBillPerPerson) {
        try {
          this.totalBRL = await api
            .get(
              `/conversions/${this.base_currency}/${quote_currency}?amount=${this.totalBillPerPerson}`,
              {
                headers: {
                  Authorization: `ApiKey ${this.apiKey}`,
                },
              }
            )
            .then((response) => {
              return response.data.quote_amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              });
            });
        } catch (error) {
          console.log(error);
        }
      }
    },

    getTipValue(index) {
      this.tip = index;
    },

    getPeoples(index) {
      this.peoples = index;
    },
  },
  computed: {
    symbolCurrency() {
      return this.base_currency === "USD" ? "$" : "€";
    },
  },

  watch: {
    amount: function() {
      if (this.amount && this.amount !== 0) {
        this.calculateBillTotal();
        this.convertValuePerPerson();
      } else {
        (this.amount = null),
          (this.tipPercentage = 0),
          (this.tipValue = null),
          (this.totalBillWithTip = null),
          (this.totalBillPerPerson = null),
          (this.totalBRL = null);
      }
    },

    tip: function() {
      this.calculateBillTotal();
      this.convertValuePerPerson();
    },

    peoples: function() {
      this.calculateBillTotal();
      this.convertValuePerPerson();
    },

    base_currency: function() {
      if (this.base_currency) {
        this.calculateBillTotal();
        this.convertValuePerPerson();
      }
    },
  },
};
</script>

<style></style>
