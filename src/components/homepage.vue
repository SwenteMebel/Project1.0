
<template>
 <div class="grid xl:grid md:w-screen xl:w-screen md:justify-center flex-wrap font-serif snap-y snap-mandatory mb-2">
  <section v-for="gerecht, index in gerechtenData.gerechten" :key="gerecht.id" @click="selectedGerechtenIndex(index)" class="my-10 h-screen mx-5 p-3 md:relative snap-always snap-center bg-gray-400 md:p-2 md:m-[10rem] md:my-[2rem] md:h-[100vh] md:max-w-[100vh] md:min-w-[60vh] md:w-screen rounded-2xl shadow-black shadow-lg hover:shadow-xl hover:shadow-orange-200 linear duration-200" >
    <div class="">
     <img :src="getImgUrl(gerecht.img)" :alt="gerecht.naam_gerecht"> 
    </div>
    <div class=" text-center p-2">
      <h1 class="text-2xl font-bold">{{ gerecht.tietel }}</h1>
      <h3 class="text-xl font-bold">{{ gerecht.naam_gerecht }}</h3>
    </div>
    <div class="bg-orange-100 rounded-lg p-2 md:rounded-xl md:p-2 ">
      <ul class="">
        <p class="md:text-2xl font-semibold pl-2">Ingredienten:</p>
        <li class="list-decimal mx-7 md:p-1 p-2 font-semibold" v-for="ingredient in gerecht.ingredienten" :key="ingredient">
            <div class="flex justify-between"> 
              <div class="gird justify-start md:p-1 md:text-lg first-letter:uppercase font-normal">{{ ingredient }}</div> 
              <div class="grid justify-end md:p-1 md:text-lg font-semibold rounded-lg "><button class="bg-green-500 p-1 rounded-lg hover:bg-green-300 ease-linear duration-150 hover:shadow-sm hover:shadow-black">Add to shopping list</button></div>
          </div>
        </li>
      </ul>
      <div class="md:p-2 border-t-black border-t-2">
        <p class="md:text-lg text-[16px] font-semibold">Bereiding: <span class="font-normal first-letter:uppercase ">{{ gerecht.bereiding }}</span></p>
        <p class="md:text-lg text-[16px] font-semibold">Bereidings tijd: <span class="font-normal">{{ gerecht.bereidingtijd }}</span></p>
      </div>
      
    </div>
    
    <div class="md:flex justify-end items-end">
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


