<template>
	<div id="simple-view" class="screen-view">
		<h2>Simple view</h2>

		<h3>Transitions</h3>
		<ul>
			<li><button @click="changeScreen('SimpleBack', 'slide-left')">Slide left</button></li>
			<li><button @click="changeScreen('SimpleBack', 'slide-right')">Slide right</button></li>
			<li><button @click="changeScreen('SimpleBack', 'slide-up')">Slide up</button></li>
			<li><button @click="changeScreen('SimpleBack', 'slide-down')">Slide down</button></li>
			<li><button @click="changeScreen('SimpleBack', 'fade')">Fade</button></li>
		</ul>		

	</div>
</template>

<script>

export default {
	name: 'simple-view',
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
	background: #F7F5F4;
}

ul{
	list-style: none;
	padding: 0px;
}

</style>