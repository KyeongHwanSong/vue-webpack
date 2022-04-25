<template>
	<div>{{ massage }}</div>
	<div></div>
	<HelloWorld />
</template>
<script>
import HelloWorld from '~/components/HelloWorld';

export default {
	components: { HelloWorld },
	data() {
		return {
			massage: '1121',
		};
	},
};
</script>
