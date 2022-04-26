<template>
	<h1 @click="increase">1</h1>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
};
</script>

<style>
h1 {
	font-size: 50x;
	color: royalblue;
}
</style>
