<template>
  <h1>count1: {{count}}</h1>
  <h1>count2: {{count2}}</h1>
  <button @click="addCount">我就看看</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  // 组合api入口函数
  setup(){
    // 使用ref函数，定义count变量，初始值是0，变量发生改变后，vue去自动ui界面
    let count = ref(0);
    let count2 = 1; // 不适用ref的不会自动更新ui界面
    function addCount(){
      console.log('count', count.value);
      console.log('count2', count2);
      count.value += 1;
      count2 += 1;
    };
    return {count, addCount, count2};
  },
}
</script>
