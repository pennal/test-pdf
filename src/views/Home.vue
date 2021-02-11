<template>
  <div class="home">
    <v-container>
      <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-btn @click="generateReport()"  :loading="generating">Generate PDF</v-btn>
      <bookings-print ref="printer" @onProgress="onProgress"></bookings-print>
    </v-flex>
  </v-layout>
    </v-container>
  </div>
</template>

<script>
import BookingsPrint from '../components/BookingsPrint.vue'

export default {
  name: 'Home',
  components: {
    BookingsPrint

  },
  methods: {
    generateReport: function() {
      this.$refs.printer.generateReport();
      this.generating = true;
    },
    onProgress: function(event) {
        console.log("External onProgress")
        console.log(event);
        if (event === 100) {
            this.generating = false;
        }
    },
  },
  data() {
    return {
      generating: false
    }
  }
}
</script>
