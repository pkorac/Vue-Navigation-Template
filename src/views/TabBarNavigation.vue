<template>
	<div id="tab-bar-nav">
		<div class="screen">

			<transition name="tabbarTransition">
				<keep-alive>
					<component :is="activeView" :key="activeView"></component>
				</keep-alive>
			</transition>
		

			<div id="tab-bar">
				<button v-on:click="changeTab('PlaceholderViewA')">A</button>
				<button v-on:click="changeTab('PlaceholderViewB')">B</button>
				<button v-on:click="changeTab('SimpleNavigation')">C</button>
			</div>

		</div>
	</div>
</template>

<script>

import PlaceholderViewA from '../views/PlaceholderViewA';
import PlaceholderViewB from '../views/PlaceholderViewB';
import SimpleNavigation from '../views/SimpleNavigation';

export default {
	name: 'TabBarNavigation',

	components:{
		PlaceholderViewA,
		PlaceholderViewB,
		SimpleNavigation
	},

	data(){
		return{
			activeView: 'PlaceholderViewA',
		}
	},

	computed: {
		
	},

	methods: {


		changeTab( view ){
			this.activeView = view;
		}

	},

}

</script>


<style>

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