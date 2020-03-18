<template>
    <div>
        <v-layout justify-end mt-3 v-if="isnewTask">
            <v-spacer></v-spacer>
                <v-btn class="mx-3" :disabled="!showCompleted" small outlined color="orange" @click="setShowCompleted(false)" >All</v-btn>
                <v-btn small outlined :disabled="showCompleted" color="orange" @click="setShowCompleted(true)" >Completed</v-btn>
            
        </v-layout>
        <v-layout mt-4 column>
            <v-flex>
                <div v-if="showCompleted">
                    <p v-if=" isnewTask && completed.length<=0">You haven't completed any task</p>
                    <div  v-for="task in completed" :key="task.id">
                        <TaskItem :task="task"/>
                    </div>
                </div>
                <div v-if="!showCompleted">
                    <p v-if="isnewTask && listItems.length<=0">This list is empty. Please add a task</p>
                    <div v-for="task in listItems" :key="task.id">
                    <TaskItem :task="task"/>
                </div>
                </div>
            </v-flex>
            <NewTask v-if="$store.getters.isnewTask"/>
        </v-layout>
        
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
import NewTask from './NewTask';
import TaskItem from './TaskItem';
export default {
    components: {
        NewTask,
        TaskItem
    },
    methods: {
        ...mapMutations(['setShowCompleted'])
    },
    data () {
      return {
        
        
      }
    },
    computed: {
        ...mapGetters(['showCompleted','completed','listItems','isnewTask'])
    }
}
</script>

<style>


</style>