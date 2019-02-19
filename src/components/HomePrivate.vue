<template>
    <v-container fluid fill-height  class="teal darken-1 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">VUE JS</div>
            <div class="display-3 font-weight-black white--text text-xs-center mb-3">Uma aplicação simples em Vuejs</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Vamos entender alguns funcionamentos básicos de uma aplicação em Vuejs.</div>
            <button v-on:click="request" type="button" name="button" class="display-1 font-weight-bold white--text text-xs-center">Here</button>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
const githubApi = 'https://github.com';
const localClient = axios.create({
  baseURL: githubApi,
  headers: {"Access-Control-Allow-Origin": "*"}
  // auth: {
  //     username: 'levidasilvalima',
  //     password: '9c8d5d7d35954ff1bfc4c02cdde7a78c5a6e14a2'
  // }
});
export default {
    name: 'HomeHero',
    methods: {
      request: function () {
          localClient.get('/login/oauth/authorize',{
            params: {
              client_id: '57b8e3f7703ff0bfaf06',
              redirect_uri: 'http://localhost:8080',
              // login: 'levidasilvalima',
              scope: 'repo',
            }

          })
          .then(function () {
            // console.log('teste');
            // console.log(response)
          })
      }

    }
};

</script>

<style scoped>
.home-hero{
    width: 100%;
    height: 100%;
}
</style>
