<template>
  <!--  选择水果 -->
  <ChooseFruit v-if="false" />
  <!-- suspense组件案例 1 setTimeout 模拟请求-->
  <SuspenseOne v-if="false" />
  <!-- suspense组件案例 2 axios 请求 -->
  <SuspenseTwo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChooseFruit from './components/ChooseFruit.vue';
import SuspenseOne from './components/suspense-one/SuspenseOne.vue';
import SuspenseTwo from './components/suspense-two/SuspenseTwo.vue';
export default defineComponent({
  name: 'App',
  components: {
    ChooseFruit,
    SuspenseOne,
    SuspenseTwo,
  },
  setup(){
    return {
      
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
