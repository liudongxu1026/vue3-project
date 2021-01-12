<template>
  <ul>
    <li v-for="(oneStu, index) of state.stuList" :key="index" @click="removeStu(index)">
      {{oneStu.name}} -- {{oneStu.age}}
    </li>
  </ul>
</template>

<script>
import {reactive} from 'vue';
export default {
  name: 'App',
  setup(){
    const {state, removeStu} = aboutStudentFn();
    return {state, removeStu};
  },
}
function aboutStudentFn() {
  let state = reactive({
    stuList: [
      {id: 1, name: 'a', age: 11},
      {id: 2, name: 'b', age: 21},
      {id: 3, name: 'c', age: 31},
    ]
  });
  function removeStu(index){
    state.stuList.splice(index, 1);
  };
  return {state, removeStu};
}
</script>
