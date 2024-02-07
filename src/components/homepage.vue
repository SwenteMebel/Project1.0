
<template>
 <div class="grid xl:grid md:w-screen xl:w-screen md:justify-center flex-wrap font-serif">
  <section v-for="gerecht, index in gerechtenData.gerechten" :key="gerecht.id" @click="selectedGerechtenIndex(index)" class="md:relative  bg-gray-400 md:p-2 md:m-[10rem] md:my-[2rem] md:h-[100vh] md:max-w-[100vh] md:min-w-[60vh] md:w-screen rounded-2xl shadow-black shadow-lg hover:shadow-xl hover:shadow-orange-200 linear duration-200" >
    <div class="">
     <img :src="getImgUrl(gerecht.img)" :alt="gerecht.naam_gerecht"> 
    </div>
    <div class=" text-center p-2">
      <h1 class="text-2xl font-bold">{{ gerecht.tietel }}</h1>
      <h3 class="text-xl font-bold">{{ gerecht.naam_gerecht }}</h3>
    </div>
    <div class="bg-orange-300 md:rounded-xl md:p-2 ">
      <ul class="">
        <p class="text-lg font-semibold pl-2">ingredienten:</p>
        <li class=" list-decimal mx-7" v-for="ingredient in gerecht.ingredienten" :key="ingredient"> {{ ingredient }}</li>
      </ul>
      <div class="md:p-2 border-t-black border-t-2">
        <p>Bereiding: {{ gerecht.bereiding }}</p>
      <p>Bereidings tijd: {{ gerecht.bereidingtijd }}</p>
      </div>
      
    </div>
    
    <div class="md:flex justify-end items-end ">
      <div class="">
          <span class="px-2 p-1" v-if="gerecht.rating !== 0">Likes: {{ gerecht.rating }}</span>
          <button class="bg-green-500 px-2 p-1 m-1 rounded-xl border-[0.1rem] border-black" @click="upRating(+1)">+1</button> 
          <button class="bg-red-500   px-2 p-1 m-1 rounded-xl border-[0.1rem] border-black" @click="downRating(-1)">-1</button>
        </div>
        <div class="md:flex justify-end">
          <button @click="addfavo()" v-if="gerecht.favoriet == false" class="bg-gray-700 text-white p-2 rounded-xl">Add Favoriet</button>
          <button @click="removefavo()" v-if="gerecht.favoriet == true" class="bg-yellow-500 font-bold p-2 rounded-xl">YEEE! Favoriet</button>
        </div>
    </div>
      
  </section>
 </div>


 
</template>

<script>
import gerechtenData from '../data/gerechten'; //verwijst naar de map met gerechten data
import mixins from '../mixins/mixins'; // Verwijst naar de map met functies 


export default{
  name: 'homepage',
  mixins: [mixins],


  data(){
    return{
      gerechtenData,
      gerechtenIndex: 0,
    }
  },

  computed: {
    // pakt de eerste 5 van de array in de data gerechten.

  },


  methods: {
    selectedGerechtenIndex(index){
      this.gerechtenIndex = index;
    },



    upRating(){
      this.gerechtenData.gerechten[this.gerechtenIndex].rating += 1;
    },
    downRating(){
      this.gerechtenData.gerechten[this.gerechtenIndex].rating -= 1;
    },
    addfavo(){
      this.gerechtenData.gerechten[this.gerechtenIndex].favoriet = true;
    },
    removefavo(){
      this.gerechtenData.gerechten[this.gerechtenIndex].favoriet = false;
    }

  }

  
}


</script>


