<!--
 * @Author: 刘东旭
 * @Date: 2021-01-06 12:46:41
 * @LastEditors: 刘东旭
 * @LastEditTime: 2021-01-07 11:43:53
 * @Description: 
-->
<template>
	<br/>
	<input type="text" v-model="firstName"/>
	<input type="text" v-model="lastName"/>
	<b>{{fullName}}</b>

</template>
<script>
import {computed, reactive, toRefs} from 'vue';
export default {
	name: "Computed",
	setup(){
		const userName = reactive({
			firstName: "张",
			lastName: "大哈",
		});
		const fullName = computed(()=>{
			return userName.firstName + userName.lastName;
		});
		// const fullName = userName.firstName + userName.lastName;
		return {
			...toRefs(userName),
			fullName,
		};
	},
}
</script>