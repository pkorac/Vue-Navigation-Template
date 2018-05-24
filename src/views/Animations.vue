<template>
	<div id="animations-screen">
		<h1>Animations</h1>

		<hr>
		<h2>Simple</h2>
		<button v-on:click="show = !show">Toggle</button>
		<transition name="fade-text" appear>
			<div v-if="show">Some text to show or hide</div>
		</transition>

		<transition name="bounce-text" appear>
			<div v-if="show">Some text to show or hide</div>
		</transition>


		<hr>
		<h2>Between components</h2>
		<button v-on:click="currentComponent='v-a'">Show comp A</button>
		<button v-on:click="currentComponent='v-b'">Show comp B</button>

		<div id="slide-transition-container">
			<transition name="component-fade" >
				<component v-bind:is='currentComponent' class="switched-component"></component>
			</transition>
		</div>
		<br>
		<br>

		<hr>
		<h2>Lists</h2>
		<button v-on:click="sortItByName">Sort by name</button>
		<button v-on:click="sortItByLength">Sort by length</button>
		<button v-on:click="addRandom">Add at random</button>
		<button v-on:click="removeRandom">Remove at random</button>

		<ul>
			<transition-group name="list">
				<li v-for="item in items" v-bind:key="item">{{ item }}</li>
			</transition-group>
		</ul>


		<input type="text" v-model="searchString">
		<ul>
			<transition-group name="list">
				<li v-for="item in computedList" v-bind:key="item">{{ item }}</li>
			</transition-group>
		</ul>



		<hr>
		<h2>Numbers</h2>
		<input type="number" name="" v-model="number">
		<div>{{ animatedNumber }}</div>


	</div>
</template>

<script>

import TweenMax from "gsap/TweenMax";

export default{
	name: 'Animations',
	data(){
		return {
			show: true,
			currentComponent: 'v-a',
			items: ['one', 'two', 'three', 'four'],
			searchString: '',
			numberToAnimate: 0,
			number: 0
		}
	},

	components: {
		'v-a': {
			template: '<div>Component A</div>'
		},
		'v-b': {
			template: '<div>Component B</div>'
		},
	},


	computed: {
		computedList: function(){
			var query = this.searchString;
			var found = this.items.filter( function(item){
				var index = item.toLowerCase().indexOf( query.toLowerCase() );
				if ( index !== -1 ){
					return item;
				} else {
					return null;
				}
			} );
			return found;
		},


		animatedNumber: function(){
			return this.numberToAnimate.toFixed(0);
		}
	},


	methods: {
		sortByName( itemA, itemB ){
			if( itemA > itemB ){
				return 1;
			} else if( itemA < itemB ){
				return -1;
			} else {
				return 0;
			}
		},

		sortByLength( itemA, itemB ){
			return itemA.length - itemB.length;
		},


		sortItByName(){
			this.items.sort( this.sortByName );
		},

		sortItByLength(){
			this.items.sort( this.sortByLength );
		},

		addRandom(){
			var rndIndex = Math.floor( Math.random()*this.items.length );
			this.items.splice( rndIndex, 0, 'RND' + Math.random().toFixed(2) );
		},

		removeRandom(){
			var rndIndex = Math.floor( Math.random()*this.items.length );
			this.items.splice( rndIndex, 1 );
		}

	},


	watch: {
		number: function(newVal){
			TweenMax.to( this.$data, 3, { numberToAnimate: newVal } );
		}
	},


	created(){


		//console.log(TweenMax);

		//this.items.sort( this.sortByName );
		//this.items.sort( this.sortByLength );
	}
}


</script>


<style>

.fade-text-enter-active{
	transition: all 500ms ease-in-out;
}

.fade-text-leave-active{
	transition: all 3000ms ease-in-out;	
}

.fade-text-enter{
	//background: red;
	opacity: 0;
	transform: translateX(-20px);
}

.fade-text-enter-to{
	//background: blue;
}

.fade-text-leave{
	//background: pink;
}

.fade-text-leave-to{
	//background: green;
	opacity: 0;
	transform: translateX(20px);
}


.bounce-text-enter-active {
  animation: bounce-in .5s;
}
.bounce-text-leave-active{
	//animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


.component-fade-enter-active, .component-fade-leave-active{
	transition: all 1000ms ease-in-out;
}

.component-fade-enter{
	transform: translateX(50px);
	opacity: 0;
}

.component-fade-leave-to{
	transform: translateX(-50px);
	opacity: 0;
}


#slide-transition-container{
	position: relative;
}

#slide-transition-container div{
	position: absolute;
	top: 0px;
	left: 0px;
}

.switched-component{
	background: #f0f0f0;
	width: 200px;
}



/*Lists*/

.list-enter-active, .list-leave-active{
	transition: all 500ms ease-in-out;
}

.list-enter, .list-leave-to{
	opacity: 0;
	transform: translateX(-30px);
}

.list-move{
	transition: all 500ms ease-in-out;
}






</style>