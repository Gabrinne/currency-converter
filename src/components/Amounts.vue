<template>
  <v-layout row wrap>
    <v-flex class="pa-2 d-flex justify-center" xs12 md6 sm6>
      <v-card width="350">
        <v-subheader class="justify-center text-h6 font-weight-light">
          {{ `Gorjeta: ${tipRange}%` }}
        </v-subheader>
        <v-row>
          <v-col class="px-9">
            <v-slider
              v-model="tipRange"
              @change="emitTipValue(tipRange)"
              min="10"
              max="20"
              track-color="deep-purple accent-2"
              track-fill-color="deep-purple accent-2"
              thumb-color="deep-purple accent-2"
              class="align-center"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="10"
                  readonly
                  class="mt-0"
                  solo
                  flat
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="20"
                  class="mt-0 ml-3"
                  solo
                  flat
                  readonly
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex class="pa-2 d-flex justify-center" xs12 md6 sm6>
      <v-card flat width="350">
        <v-subheader class="justify-center text-h6 font-weight-light">
          {{ `Pessoas: ${peopleRange} ` }}
        </v-subheader>
        <v-row>
          <v-col class="px-9">
            <v-slider
              v-model="peopleRange"
              @change="emitNumberPeople(peopleRange)"
              min="2"
              max="16"
              track-color="deep-purple accent-2"
              track-fill-color="deep-purple accent-2"
              thumb-color="deep-purple accent-2"
              class="align-center"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="2"
                  readonly
                  class="mt-0"
                  solo
                  flat
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="16"
                  class="mt-0 ml-3"
                  solo
                  flat
                  readonly
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex xs12 md6 sm6 class="pa-2 d-flex justify-center">
      <v-card flat width="250">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          Conta
        </v-card-title>
        <v-col class="align-center d-flex ">
          <v-text-field
            dense
            :prepend-icon="icon"
            class="
              mt-0
              ml-10
              pl-0
              font-weight-light
              d-flex
              align-center
              justify-center
            "
            flat
            hide-details
            solo
            color="deep-purple accent-2 "
            v-model="amount"
            readonly
          >
          </v-text-field>
        </v-col>
      </v-card>
    </v-flex>
    <v-flex xs12 md6 sm6 class="pa-2 d-flex justify-center">
      <v-card flat width="250">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          Gorjeta
        </v-card-title>
        <v-col class="align-self">
          <v-text-field
            dense
            flat
            :prepend-icon="icon"
            class="
             mt-0
              ml-10
              pl-0
              font-weight-light
              d-flex
              align-center
              justify-center
            "
            hide-details
            solo
            color="deep-purple accent-2 "
            v-model="tip"
            readonly
          ></v-text-field>
        </v-col>
      </v-card>
    </v-flex>
    <v-flex xs12 md6 sm6 class="pa-2 d-flex justify-center">
      <v-card flat width="250">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          Total
        </v-card-title>
        <v-col class="align-self">
          <v-text-field
            dense
            flat
            :prepend-icon="icon"
            class="
             mt-0
              ml-10
              pl-0
              font-weight-light
              d-flex
              align-center
              justify-center
            "
            hide-details
            solo
            color="deep-purple accent-2 "
            v-model="total"
            readonly
          ></v-text-field>
        </v-col>
      </v-card>
    </v-flex>
    <v-flex xs12 md6 sm6 class="pa-2 d-flex justify-center">
      <v-card flat width="250">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          Por pessoa
        </v-card-title>
        <v-col class="align-self">
          <v-text-field
            flat
            dense
            :prepend-icon="icon"
            class="
             mt-0
              ml-10
              pl-0
              font-weight-light
              d-flex
              align-center
              justify-center
            "
            hide-details
            solo
            color="deep-purple accent-2 "
            v-model="perPerson"
            readonly
          ></v-text-field>
        </v-col>
      </v-card>
    </v-flex>

    <v-flex xs12 md6 sm6 class="pa-2 d-flex justify-center">
      <v-card flat width="250">
        <v-card-title class="justify-center text-h6 font-weight-bold">
          em Real
        </v-card-title>
        <v-col class="align-self">
          <v-text-field
            dense
            flat
            class="
             mt-0
              ml-10
              pl-4
              font-weight-light
              d-flex
              align-center
              justify-center
            "
            hide-details
            solo
            color="deep-purple accent-2 "
            v-model="brlValue"
            readonly
          ></v-text-field>
        </v-col>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
    },
    tip: {
      type: String,
    },
    total: {
      type: String,
    },
    perPerson: {
      type: String,
    },
    brlValue: {
      type: String,
    },
  },
  data() {
    return {
      tipRange: null,
      peopleRange: null,
    };
  },

  methods: {
    emitTipValue(index) {
      this.$emit("tip-value", index);
    },
    emitNumberPeople(index) {
      this.$emit("number-people", index);
    },
  },
};
</script>

<style></style>
