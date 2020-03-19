<template>
<div>
<TaskItem :task="task" class="dummy"/>
  <div class="task-box">
    <v-text-field hide-details ref="input" autofocus id="newtask" @keyup.enter.native="addTask(name);name='';" 
       color="grey lighten-3" full-width v-model="name" placeholder=""></v-text-field>   
  </div>
  </div>
</template>
<script>
import Events from '../events.js'
import {mapGetters,mapActions} from 'vuex';
import TaskItem from './TaskItem'
export default {
    computed: {
        ...mapGetters(['listItems','isnewTask'])
    },
    created(){
        Events.$on('setFocus', ()=>{
            this.$refs.input.focus();
        })
    },
    methods: {
        ...mapActions(['addTask'])
    },
    data(){
        return {
            task: {
                id:'#',
                title: '',
                completed: false,
                type: 'spotify'
            },
            name: this.$store.getters.title
        }
    },
    components: {
        TaskItem
    }
}
</script>

<style>

.task-box{
    
    margin-top: -4.6rem;
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
    caret-color: black;
}

</style>