<template>
  <v-app>
    <head>
      <title>Panda Prestige</title>
    </head>
    <v-toolbar class="white">
      <v-toolbar-title>Panda Prestige</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/schedule" flat>Schedule</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer class="pa-2 white">&copy; Panda Prestige</v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Schedule from './components/Schedule'


export default {
  name: 'App',
  components: {
  Home,
  About,
  Schedule
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>

