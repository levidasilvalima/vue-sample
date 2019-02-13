<template>
    <v-container v-if="isAuthenticated" fluid fill-height  class="teal darken-1 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">WELCOME TO MENU 1</div>
            <div class="display-3 font-weight-black white--text text-xs-center mb-3">This is an presentation of the menu 1</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Everything in life we should to do.</div>
        </v-layout>
    </v-container>
    <v-container v-else fluid fill-height  class="teal darken-1 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">SORRY</div>
            <div class="display-3 font-weight-black white--text text-xs-center mb-3">Man, you shouldn't be here !!</div>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'menu 1',
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
};
</script>