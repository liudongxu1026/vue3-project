<template>
	<Suspense>
		<!-- #defaul 放的是默认的组件内容 -->
		<template #default>
      <Result />
		</template>
		<!-- #fallback 放的是加载时占位的 -->
		<template #fallback>
      <h1>加载中...</h1>
		</template>
	</Suspense>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Result from './Result.vue';
export default defineComponent({
  name: "suspense-one",
  components: {
    Result
  },
})
</script>