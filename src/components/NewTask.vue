<template>
<div>
<TaskItem :task="task" class="dummy"/>
  <div class="task-box">
      
    <v-text-field id="newtask" @keyup.enter.native="addTask($store.getters.title)" 
       color="grey lighten-3" full-width v-model="$store.getters.title" placeholder=""></v-text-field>   
  </div>
  </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
import TaskItem from './TaskItem'
export default {
    computed: {
        ...mapGetters(['listItems'])
    },
    methods: {
        ...mapMutations(['addTask'])
    },
    data(){
        return {
            task: {
                id:'#',
                title: '',
                completed: false,
                type: 'spotify'
            }
        }
    },
    components: {
        TaskItem
    }
}
</script>

<style>

.task-box{
    
    margin-top: -5rem;
}
.dummy {
    /* background: linear-gradient(0deg, rgba(250, 250, 250, 0.993) 28.21%, #fffefef5 134.95%); */
    opacity: 0.5;
    background-color: white;
}

#newtask {
    
}
input {
    text-indent: 3rem;
}

</style>