<!--
 * @Author: 刘东旭
 * @Date: 2021-01-07 11:43:59
 * @LastEditors: 刘东旭
 * @LastEditTime: 2021-01-07 11:46:27
 * @Description: 
-->
<template>
	<input type="text" v-model="obj.userName"/>
	{{obj.userName}}
</template>
<script>
import {readonly} from 'vue';
export default {
	name: 'readonly',
	setup(){
		const obj = readonly({
			userName: '张益达',
			age: 10,
		});
		return {obj};
	},
}
</script>