<template>
	<div id="placeholder-view" class="screen-view">
		<h2>View B</h2>

		<button @click="changeScreen('viewA', 'slide-right')">Load View A</button>

	</div>
</template>

<script>

import ViewA from '../views/ViewA';


export default {
	name: 'ViewB',
	data(){
		return{
			subviews: {
				'viewA': ViewA
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