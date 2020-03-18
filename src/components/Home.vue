<template>
  <div>
      
      <v-container>
          <v-card flat class=" grey lighten-5 text-center" >
                    <TaskList class="px-2"/> 
                    <v-row justify="center" v-if="listItems.length<=0 && !$store.getters.isnewTask">
                        <v-col cols="12" xs="12" sm="8" >
                            <v-img min-width="400" :src="require('../assets/iotask.png')"></v-img>
                            <h3 class="text-center font-weight-light">No tasks found?</h3>
                            <v-card-text class="text-center">
                                <div class="font-weight-light grey--text text--darken-2">Try to assign more tasks to your employees or</div>
                                <p class="font-weight-light grey--text text--darken-2">create a new project from scratch</p>
                            </v-card-text>
                        </v-col>
                    </v-row>
          </v-card>
          
      </v-container>
      
  </div>
</template>

<script>
import TaskList from './TaskList';
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters(['listItems']),
        // ...mapState(['newTask'])
    },
    components: {
        TaskList
    },
    
}
</script>

<style>

</style>