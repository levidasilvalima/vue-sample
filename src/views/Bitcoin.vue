<template>
    <v-container id="bitcoin" fluid fill-height  class="teal darken-1 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout v-if="isAuthenticated" justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">BITCOIN TODAY</div>
            <div v-for="(currency, i) in info" :key=i class="display-1 font-weight-bold white--text text-xs-center">
                
                {{ currency.description }} : <span v-html="currency.symbol"></span> {{ currency.rate_float | currencydecimal }}

            </div>
        </v-layout>
        <fail-message v-else/>
    </v-container>
</template>

<script>

import FailMessage from '@/components/FailMessage';

export default {
    name: 'menu 2',
    el: "#bitcoin",
    data () {
        return {
            info: 'levi'
        }
    },
    components: {
        FailMessage
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    },
    mounted() {
        this.$store.getters.getBitcoin.then(response => (this.info = response.data.bpi))
    }

};
</script>