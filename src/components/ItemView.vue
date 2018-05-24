<template>
	<div id="item-view" class="screen-view">
		<h2>item view</h2>
		<button @click="changeScreen('ListView', 'slide-right')">Back</button>
	</div>
</template>

<script>

export default {
	name: 'item-view',
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

#item-view{
	background: #fef0f0 url('../assets/dust_scratches.png');
}
</style>