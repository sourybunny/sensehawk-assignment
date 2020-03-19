import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    list: [],
    newTask: false,
    title: '',
    selectCompleted: false
}

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
    addTask: ({commit},payload)=>{
        commit('addTask',payload)
    },
    setNewTask: ({commit},val)=>{
        commit('setNewTask',val)
    },
    setShowCompleted: ({commit},val)=>{
        commit('setShowCompleted',val)
    },
    updateList: ({commit},val)=>{
        commit('updateList',val)
    },
}

const mutations = {
    addTask: (state,payload)=>{
        state.list.push(
            {title:payload,id:state.list.length+1,type:'spotify',completed:false}
            );
    },
    setNewTask: (state,val)=>{
        state.newTask = val;
    },
    setShowCompleted: (state,val)=>{
        state.selectCompleted = val;
    },
    updateList: (state,val)=>{
        state.list= val;
    }
}
export default new Vuex.Store({
    state, 
    getters,
    actions,
    mutations
})