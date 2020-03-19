<template>
  <div class="rect">
                    <div class="layout align-center">
                        <v-checkbox filled v-model="task.completed"></v-checkbox> 
                        <div><span :class="{'grey--text':task.completed}">{{task.title}}</span></div>
                    </div>
                    <div class="mx-4 grey--text"><i class="scale-up  mr-2 far fa-folder"></i><span>0/3</span></div>
                    
                    <div class="mr-4 grey--text"><i class="fab scale-up  mr-2 fa-reddit"></i><span>3</span></div>
                    <div class="align-center">
                        <!-- <v-select v-model="task.type"
                        :items="selects"
                        solo
                        ></v-select> -->
                        
                        <select :class="classList" class="select chip  label px-3 py-2" v-model="task.type">
                            <option><span>spotify</span></option>
                            <option><span>sketch</span></option>
                            <option><span>dribble</span></option>
                            <option><span>iotask</span></option>
                        </select>
                    </div>
                </div>
</template>

<script>
export default {
    props: ['task'],
    computed: {
        classList(){
            var classlist = '';
                switch(this.task.type) {
                case "spotify":
                    classlist='yellow lighten-4 orange--text'
                    break;
                case "sketch":
                    classlist='green lighten-4 green--text'
                    break;
                case "dribble":
                    classlist='purple lighten-4 purple--text'
                    break;
                default:
                    classlist='blue lighten-4 blue--text'
                }
                return classlist;
        }
    }
}
</script>

<style>
.rect {
    width: 100%;
    display: inline-flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(224, 221, 221, 0.616);
    background-color: white;
    transition: all 0.5s;
}
.rect:hover {
    background-color: rgba(240, 238, 238, 0.712);
}
.title {
    float: left;
}
.scale-up{
    /* transform: scale(1.2); */
}
</style>