<template>
	<div id="simple-nav">
		<div class="screen">

			<transition :name="activeTransition">
				<keep-alive>
					<component :is="activeView" @onChangeScreen="changeScreen" :key="activeView"></component>
				</keep-alive>
			</transition>
	
		</div>
	</div>
</template>

<script>

//keep alive

import SimpleView from '../views/SimpleView';
import SimpleBack from '../views/SimpleBack';

export default {
	name: 'SimpleNavigation',

	components:{
		SimpleView,
		SimpleBack
	},

	data(){
		return{
			activeView: 'SimpleView',
			activeTransition: 'slide-left'
		}
	},

	computed: {
		
	},

	methods: {

		changeScreen( view, transition ){
			this.activeView = view;
			this.activeTransition = transition;
		}

	},

}

</script>


<style>

#simple-nav{
}


#tab-bar{
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 50px;
	z-index: 3000;
	background: rgba(255,255,255,0.7);
	box-shadow: 0px -1px 3px rgba(0,0,0, 0.05);
}

</style>