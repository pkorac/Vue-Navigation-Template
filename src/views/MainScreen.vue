<template>
	<div id="main-screen">
		<div class="screen">

			<transition :name="animationTransition">
				<keep-alive>
					<component :is="activeComponent" :key="activeComponent.name" @onChangeScreen="changeScreen"></component>
				</keep-alive>
			</transition>

		</div>
	</div>
</template>

<script>

import ViewA from '../views/ViewA';

export default {
	name: 'TabBarNavigation',

	data(){
		return{
			activeComponent: ViewA,
			animationTransition: 'slide-left'
		}
	},


	methods: {

		changeScreen( component, transition ){
			if ( !component ){
				console.error( 'No subview component found.' )
			} else {
				this.activeComponent = component;
				this.animationTransition = transition
			}
			
		}

	},

}

</script>


<style>

</style>