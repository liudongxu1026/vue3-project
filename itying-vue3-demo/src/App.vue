<template>
  <!-- <button v-for="(oneBtn,index) of btnList" :key="index">{{oneBtn.name}}</button> -->
  <router-link v-for="(oneLink, index) of btnList" :key="index"
    :to="oneLink.path"
  >
    {{oneLink.name}}
  </router-link>
  <div class="cpnt-coat">
    <router-view></router-view>
  </div>
</template>  

<script>

import { reactive, ref, provide } from 'vue';
export default {
  name: 'App',
  setup(){
    const ProvideTitle = 'new provide title';
    provide('title', ProvideTitle);
    const btnList = reactive([
      { name: "toRefs", path: '/' },
      { name: "computed", path: '/computed' },
      { name: "readonly", path: '/readonly' },
      { name: "watchEffect", path: '/watchEffect' },
      { name: "watch", path: '/watch' },
    ]);
    return {btnList};
  },
}
</script>
<style scoped>
  a{
    padding: 10px;  
    color: #333;
    text-decoration: none;
  }
  .cpnt-coat{
    margin-top: 30px;
  }
  .router-link-active{
    color: #fff;
    background: #36bf73;
  }
</style>
