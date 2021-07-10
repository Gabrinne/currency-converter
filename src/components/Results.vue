<template>
  <v-row class="d-flex">
    <v-col cols="12" xs="12" md="6" sm="6">
      <v-card flat>
        <v-card-title
          class="justify-center text-h5 font-weight-light color_text  "
        >
          CONTA
        </v-card-title>
        <span class="justify-center d-flex text-h6 ">
          {{ BASE_CURRENCY_SYMBOL }} {{ COUNT }}</span
        >
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" md="6" sm="6">
      <v-card flat>
        <v-card-title
          class="justify-center text-h5 font-weight-light color_text"
        >
          GORJETA
        </v-card-title>
        <span class="justify-center d-flex text-h6">
          {{ BASE_CURRENCY_SYMBOL }} {{ FORMATED_TIP }}</span
        >
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" md="6" sm="6">
      <v-card flat>
        <v-card-title
          class="justify-center text-h5 font-weight-light color_text"
        >
          TOTAL
        </v-card-title>

        <span class="justify-center d-flex text-h6">
          {{ BASE_CURRENCY_SYMBOL }} {{ COUNT_AND_TIP }}</span
        >
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" md="6" sm="6">
      <v-card flat>
        <v-card-title
          class="justify-center text-h5 font-weight-light color_text"
        >
          POR PESSOA
        </v-card-title>
        <span class="justify-center d-flex text-h6">
          {{ BASE_CURRENCY_SYMBOL }} {{ COUNT_AND_TIP_BY_PERSON }}</span
        >
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" md="6" sm="6">
      <v-card flat>
        <v-card-title
          class="justify-center text-h5 font-weight-light color_text d-flex color_text"
        >
          EM R$
        </v-card-title>
        <span class="justify-center d-flex text-h6">
          R$ {{ CONVERTED_COUNT_AND_TIP_BY_PERSON }}</span
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("countModule", [
      "BASE_CURRENCY_SYMBOL",
      "COUNT",
      "FORMATED_TIP",
      "COUNT_AND_TIP",
      "COUNT_AND_TIP_BY_PERSON",
      "CONVERTED_COUNT_AND_TIP_BY_PERSON",
    ]),
  },
};
</script>

<style scoped>
.color_text {
  color: #6600cc;
}
</style>
