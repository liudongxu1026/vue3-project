<!--
 * @Author: 刘东旭
 * @Date: 2021-01-04 12:01:32
 * @LastEditors: 刘东旭
 * @LastEditTime: 2021-01-04 12:31:57
 * @Description: 
-->
<template>
	<!-- <h1> {{result}} </h1> -->
  <img :src="result" alt="" srcset="">
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios';
export default defineComponent({
  async setup(){
    // return {result: "https://newimg.jspang.com/myqrCode.jpg"}
    const res = await axios.get('https://apiblog.jspang.com/default/getGirl');
    if(!res.data) return;
    const result = res.data.imgUrl;
    return {result};
  },
   
})
</script>