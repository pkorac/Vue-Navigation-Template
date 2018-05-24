<template>
	<div id="simple-view" class="screen-view">
		<h2>Simple back</h2>

		<button @click="changeScreen('SimpleView', 'slide-right')">Back</button>

		
		

	</div>
</template>

<script>

export default {
	name: 'simple-back',
	data(){
		return{

		}
	},
	methods:{
		changeScreen( view, transition ){
			this.$emit('onChangeScreen', view, transition );
		}
	}
}

</script>


<style scoped>

#simple-view{
	background: #fef0f0 url('../assets/dust_scratches.png');
}


</style>