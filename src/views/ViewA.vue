<template>
	<div id="placeholder-view" class="screen-view">
		<h2>View A</h2>

		<button @click="changeScreen('viewB', 'slide-left')">Load View B</button>

	</div>
</template>

<script>

import ViewB from '../views/ViewB';


export default {
	name: 'ViewA',
	data(){
		return{
			subviews: {
				'viewB': ViewB
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
	background: #f8f8f8;
}


</style>