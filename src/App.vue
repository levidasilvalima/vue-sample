<template>
  <v-app id="app">
    <app-navigation></app-navigation>
      <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';
export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>
