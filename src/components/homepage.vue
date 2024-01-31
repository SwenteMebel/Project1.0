
<template>
 <div class="grid xl:flex xl:w-screen md:justify-center flex-wrap font-serif">
  <div v-for="gerecht, index in getShuffledGerechten" :key="gerecht.id" @click="selectedGerechtenIndex(index)" class="bg-gray-400 md:p-2 md:m-10 md:w-[30rem] md:min-h-[30rem] rounded-2xl shadow-black shadow-lg" >
    <div class="">
     <!-- <img :src="getImgUrl(gerecht.img)" alt="gerecht.naam_gerecht"> -->
    </div>
    <div class=" bg-orange-800 text-center p-2 ">
      <h1 class="text-2xl font-bold">{{ gerecht.tietel }}</h1>
      <h3 class="text-xl font-bold">{{ gerecht.naam_gerecht }}</h3>
    </div>
    <div class="">
      <ul class="bg-orange-300">
        <p class="text-lg font-semibold pl-2">ingredienten:</p>
        <li class=" list-decimal mx-7" v-for="ingredient in gerecht.ingredienten" :key="ingredient"> {{ ingredient }}</li>
      </ul>
      <div class="bg-orange-700 p-2 ">
        <p>Bereiding: {{ gerecht.bereiding }}</p>
      <p>Bereidings tijd: {{ gerecht.bereidingtijd }}</p>
      </div>
      <p v-if="gerecht.rating !== 0">Likes: {{ gerecht.rating }}</p>
    </div>
    <div class="">
      <button class="bg-green-500 px-2 p-1 m-1 rounded-xl border-[0.1rem] border-black" @click="setRating(+1)">+1</button> 
      <button class="bg-red-500   px-2 p-1 m-1 rounded-xl border-[0.1rem] border-black" @click="setRating(-1)">-1</button>
    </div>
    <div class="">
      <button @click="addfavo()" v-if="gerecht.favoriet == false" class="bg-gray-700 text-white p-2 rounded-xl">Add Favoriet</button>
      <button @click="removefavo()" v-if="gerecht.favoriet == true" class="bg-yellow-500 font-bold p-2 rounded-xl">YEEE! Favoriet</button>
    </div>
  </div>
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
    getShuffledGerechten() {
      const shuffledGerechten = this.shuffleArray([...this.gerechtenData.gerechten]);
      return shuffledGerechten.slice(0, 4);
    }
  },
  methods: {
    selectedGerechtenIndex(index){
      this.gerechtenIndex = index;
    },

    // Shuffelt de array data gerechten door elkaar.
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    setRating(value){
      this.gerechtenData.gerechten[this.gerechtenIndex].rating += value;
    },
    addfavo(){
      this.gerechtenData.gerechten[this.gerechtenIndex].favoriet == true;
    },
    removefavo(){
      this.gerechtenData.gerechten[this.gerechtenIndex].favoriet == false;
    }

  }
}



</script>

