<template>
  <div>{{state.name}}</div>
  <div>{{state.attr.age}}</div>
  <div>{{state.attr.height}}</div>
  <button @click="myFn">点一下</button>
</template>

<script>
import {isReadonly, readonly, ref, shallowReadonly} from 'vue';
export default {
  name: 'App',
  setup(){
    // readonly: 用于创建一个只读的数据，并且是递归只读，每一层都是只读的
    let state = readonly({name: 'aaa', attr: {age: 18, height: 1.88}});

    // let state = shallowReadonly({name: 'aaa', attr: {age: 18, height: 1.88}});
    let state2 = ref({name: 'liuer', age: 1});
    function myFn(){
      state = {}; 
      // state.name = 'bbb';
      // state.attr.age = 10;
      // state.attr.height = 1.50;
      console.log(isReadonly(state)); //true
      console.log(isReadonly(state2)); //false
    }
    return {state, myFn}
  },
}
</script>
