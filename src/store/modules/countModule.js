import api from '../../services/api'


const apiKey = process.env.VUE_APP_API_KEY

export default {
  namespaced: true,

  state: {
    count: {
      value: 0,
      minValue: 0
    },

    currency: null,
    currencies: [
      {
        type: 'EUR',
        symbol: '€'
      },
      {
        type: 'USD',
        symbol: '$'
      }
    ],

    tip: {
      value: 10,
      minValue: 10,
      maxValue: 20
    },

    people: {
      value: 2,
      minValue: 2,
      maxValue: 16
    }

  },

  mutations: {

    SET_COUNT: (state, newValue) => {
      state.count = newValue
    }, 
    
    SET_TIP: (state, newValue) => {
      state.tip.value = newValue
    },
    SET_PEOPLE: (state, newValue) => {
      state.people.value = newValue
    },

    SET_CURRENCY: (state, currency) => {
      state.currency = currency
    }
  },

  actions: {
    GET_BASE_CURRENCY_QUOTE: ({ commit }, { base_currency}) => {
        return new Promise((resolve, reject) => {
              api.get('/rates/' + base_currency + '/BRL?api-key=' + apiKey).then(
                response => {
                    commit('SET_CURRENCY', {
                      currency: base_currency,
                      quote: response.data.quote
                    });
                    resolve();
                }, error => reject(error));
        })
    }
  },

  getters: {
      BASE_CURRENCY_SYMBOL: state => {
        return state.currency ? state.currencies.find(currency => currency.type === state.currency.type).symbol : ''
      },
      COUNT: state => {
        return state.count.value ? parseFloat(state.count.value).toFixed(2) : '0.00';
      },
      FORMATED_TIP: (state, getters) => {
        return getters.COUNT ? parseFloat(getters.COUNT * state.tip.value / 100).toFixed(2) : '0.00';
      },
      COUNT_AND_TIP: (state, getters) => {
        return getters.COUNT ? (parseFloat(getters.COUNT) + parseFloat(getters.FORMATED_TIP)).toFixed(2) : '0.00';
      },

      COUNT_AND_TIP_BY_PERSON: (state, getters) => {
        return getters.COUNT ? (parseFloat(getters.COUNT_AND_TIP) / parseFloat(state.people.value)).toFixed(2) : '0.00'
      },

      CONVERTED_COUNT_AND_TIP_BY_PERSON: (state, getters) => {
        return getters.COUNT ? (parseFloat(getters.COUNT_AND_TIP_BY_PERSON) * parseFloat(state.currency.quote)).toFixed(2) : '0.00'; 
      }

  }
}