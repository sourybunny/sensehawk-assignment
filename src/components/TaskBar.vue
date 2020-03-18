<template>
   <div>
    <v-app-bar px-0
      color="grey lighten-5"
      dense flat
    >
      <v-card-text class="px-0"><span class="mr-5 grey--text">SORT:</span> <span>A-Z</span>
   <span class="ml-5 grey--text">PROJECT:</span> <span>SPOTIFY WEBSITE DESIGN</span></v-card-text>

      <v-spacer></v-spacer>
        <v-btn @click="setNewTask(true)" class="blue--text"  text>new task</v-btn>
    </v-app-bar>
   </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
methods: {
        ...mapMutations(['setNewTask'])
    }
}
</script>

<style>
</style>