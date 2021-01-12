<template>
  <div>{{jsons}}</div>
  <!-- <button @click="myFn">打印一下</button> -->
</template>

<script>
import {ref, customRef} from 'vue';
function myRef(value){
  // track 追踪
  // trigger 触发
  return customRef((track, trigger)=>{
    let res = fetch(value).then(res=> {
      return res.json()
    }).then(data=>{
      value = data;
      trigger(); // 告诉vue，可以触发界面更新了
    });
    return {
      // 不能在get方法中发送网络请求
      // 渲染界面 --> 发送请求 --> 渲染界面 死循环
      get(){ 
        track(); //告诉vue，这个数据是需要追踪变化的
        console.log('get', value);
        return value;
      },
      set(newValue){
        value = newValue;
        trigger(); // 告诉vue，可以触发界面更新了
        console.log('set', newValue)
      },
    };
  });
};
export default {
  name: 'App',
  setup(){
    const jsons = myRef('../public/data.json');
    return {jsons};
  },
}
</script>
