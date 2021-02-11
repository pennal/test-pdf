import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import './theme'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#2572B5',
    secondary: '#4caf50',
    tertiary: '#495057',
    accent: '#82B1FF',
    error: '#f55a4e',
    info: '#00d3ee',
    success: '#2174B5',
    warning: '#ffa21a'
  }
})
