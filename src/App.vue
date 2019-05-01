<template>
  <v-app>
    <v-toolbar class="white">
      <v-toolbar-title>Panda Prestige</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn to="/schedule" flat>Schedule</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>directions_run</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Home</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/about">
            <v-list-tile-action>
              <v-icon>how_to_reg</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>About</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
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

