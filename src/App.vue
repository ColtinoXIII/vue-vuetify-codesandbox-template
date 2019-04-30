<template>
  <v-app>
    <v-toolbar class="white">
      <v-img src="https://instagram.fosu1-1.fna.fbcdn.net/vp/83f01193f972de15087dc6c94bbe0ccc/5D3CEF15/t51.2885-19/s320x320/41633327_525574231224156_7675286907923726336_n.jpg?_nc_ht=instagram.fosu1-1.fna.fbcdn.net">
      </v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/schedule" flat>Schedule</v-btn>
        <v-btn to="/about" flat>About</v-btn>
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
          <v-list-tile to="/schedule">
            <v-list-tile-action>
              <v-icon>calendar_today</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Schedule</v-list-tile-content>
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
    <v-footer class="pa-2 red">&copy; 2019 - Finish Strong</v-footer>
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
