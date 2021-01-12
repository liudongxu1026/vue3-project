<template>
  <div>{{state}}</div>
  <button @click="myFn">打印一下</button>
</template>

<script>
import {toRef} from 'vue';
export default {
  name: 'App',
  setup(){
    let obj = {name: 'abc'};
    let state = toRef(obj, 'name');
    function myFn(){
      state.value = 'aaaaaa';
      console.log(state.value);
      console.log(obj)
    }
   return {state, myFn}
  },
}
</script>
