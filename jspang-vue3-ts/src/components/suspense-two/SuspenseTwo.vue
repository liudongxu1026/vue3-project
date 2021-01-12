<!--
 * @Author: 刘东旭
 * @Date: 2021-01-04 11:46:19
 * @LastEditors: 刘东旭
 * @LastEditTime: 2021-01-04 12:15:13
 * @Description: 
-->
<template>
	<Suspense>
		<!-- #defaul 放的是默认的组件内容 -->
		<template #default>
      <Result />
		</template>
		<!-- #fallback 放的是加载时占位的 -->
		<template #fallback>
      <!-- <h1>加载中...</h1> -->
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2594087829,364749085&fm=26&gp=0.jpg" alt="">
		</template>
	</Suspense>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Result from './Result.vue';
export default defineComponent({
  name: "suspense-two",
  components: {
    Result,
  },
});
</script>

