<template>
  <div ref="mydiv"></div>
  <!-- <button @click="myFn">打印一下</button> -->
</template>

<script>
import {ref, onMounted} from 'vue';
export default {
  name: 'App',
  setup(){
    let mydiv = ref(null);
    onMounted(()=>{
      console.log('onMounted', mydiv.value); // mydiv的dom节点
    });
    console.log(mydiv.value); //null
    return {mydiv};
    // const jsons = myRef('../public/data.json');
    // return {jsons};
  },
}
</script>
