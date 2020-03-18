<template>
  <div>
      <v-text-field id="newtask" @keyup.enter.native="addTask($store.getters.title)" 
       color="grey lighten-3" full-width v-model="$store.getters.title" placeholder="add new task"></v-text-field>
      <!-- <v-btn @click="addTask($store.getters.title)">submit</v-btn> -->
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
    
    computed: {
        ...mapGetters(['listItems'])
    },
    methods: {
        ...mapMutations(['addTask'])
    }
}
</script>

<style>
#newtask {
    opacity: 0.4;
}
</style>