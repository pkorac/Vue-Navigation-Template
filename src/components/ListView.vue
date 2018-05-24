<template>
	<div id="list-view" class="screen-view">
		<h2>List view</h2>
		<button @click="changeScreen( 'ItemView', 'slide-left' )">Show item</button>
	</div>
</template>

<script>

export default {
	name: 'list-view',
	
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
#list-view{
	background: #f0f0fe url('../assets/tic-tac-toe.png');
}
</style>