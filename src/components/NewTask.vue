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
    background: linear-gradient(0deg, rgba(252, 249, 249, 0.171) 28.21%, #dddddd60 134.95%);
    opacity: 0.2;
}

#newtask {
    /* opacity: 0.7; */
    
}
input {
    text-indent: 3rem;
}

</style>