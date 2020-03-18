import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    list: [],
    newTask: false,
    title: '',
    selectCompleted: false
}
// {
//     id: 1,
//     title: 'This is task 1 ',
//     type: 'spotify',
//     completed: true
// },
// {
//     id: 2,
//     title: 'This is task 2',
//     type: 'spotify',
//     completed: false
// },
// {
//     id: 3,
//     title: 'This is task 3',
//     type: 'spotify',
//     completed: false
// }
const getters = {
    listItems: (state)=>{
        return state.list;
    },
    completed: (state)=>{
        return state.list.filter(item=>item.completed==true)
    },
    isnewTask: (state)=>{
        return state.newTask;
    },
    showCompleted: (state)=>{
        return state.selectCompleted;
    }
}

const actions = {

}

const mutations = {
    addTask: (state,payload)=>{
        state.list.push(
            {title:payload,id:state.list.length+1,type:'spotify',completed:false}
            );
        state.title='';
        

    },
    setNewTask: (state,val)=>{
        state.newTask = val;
    },
    setShowCompleted: (state,val)=>{
        state.selectCompleted = val;
    }
}
export default new Vuex.Store({
    state, 
    getters,
    actions,
    mutations
})