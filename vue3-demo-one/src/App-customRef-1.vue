<template>
  <div>{{age}}</div>
  <button @click="myFn">打印一下</button>
</template>

<script>
import {ref, customRef} from 'vue';
function myRef(value){
  // track 追踪
  // trigger 触发
  return customRef((track, trigger)=>{
    return {
      get(){
        track(); //告诉vue，这个数据是需要追踪变化的
        console.log('get', value);
        return value;
      },
      set(newValue){
        value = newValue;
        console.log('set', newValue)
        trigger(); //告诉vue，可以触发界面更新了
      },
    };
  });
};
export default {
  name: 'App',
  setup(){
	  let age = myRef(1);
    function myFn(){
      age.value += 1;
    };
    return {age, myFn};
  },
}
</script>
