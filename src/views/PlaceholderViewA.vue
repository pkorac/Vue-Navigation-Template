<template>
	<div id="placeholder-view" class="screen-view">
		<h2>Placeholder A</h2>

		<button @click="changeScreen('simpleView', 'slide-right')">Back</button>

	</div>
</template>

<script>

import SimpleView from '../views/SimpleView';


export default {
	name: 'PlaceholderView',
	data(){
		return{
			subviews: {
				'simpleView': SimpleView
			}
		}
	},


	methods:{
		changeScreen( component, transition ){
			this.$emit('onChangeScreen', this.subviews[component], transition );
		}
	}
}

</script>


<style scoped>

#placeholder-view{
	background: #03CA1E;
}


</style>