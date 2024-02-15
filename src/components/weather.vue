<template>
    <div class=" grid justify-center md:w-screen font-serif items-center md:h-[40rem] md:mt-[10rem] bg-salte-900">
        <div class=" md:w-[50rem] mt-10 p-10 md:h-[10rem] md:grid md:justify-center md:p-2">
            <h1 class="text-center text-2xl font-bold text-shadow-xl ">Find my weather!</h1>    
            <input class='p-2 md:p-1 bg-sky-200 md:mt-3 md:w-[28rem] rounded-l-xl md:rounded-xl text-center text-lg focus:bg-sky-300' type="text" v-model.trim="placeName" placeholder="Search City"> 
            <button class=' p-2 md:p-1 bg-sky-200 md:mt-3 md:w-[28rem] rounded-r-xl md:rounded-xl text-center text-lg text-semibold hover:bg-sky-300 linear duration-150' @click="ophalen(placeName)">Zoek</button>
        </div>
        <!--<div v-if='!error()' class="">{{ errormsg }}</div>-->
        <div v-if='theWeather || theWeather.length >= 1' class="grid min-h-[30rem] md:min-h-[40rem]">
            <div class=" grid justify-center m-5 md:px-5 ">
                <div class="bg-blue-200 grid items-end p-5 hover:opacity-40 linear duration-200 rounded-xl">
                    <div class="grid justify-center">
                        <span class="text-3xl font-semibold mt-10">&#8451; {{ theWeather.main.temp }} </span>
                        <span class="text-xl  font-semibold ml-2">{{ theWeather.name }} ({{ theWeather.sys.country }})</span>
                    </div>
                
                    <div class="flex border-t-2">
                        <div class="flex items-center justify-center md:w-[20rem] w-[10rem] border-r-2">
                            <span class="text-xl first-letter:capitalize font-bold">{{ theWeather.weather[0].description }}</span>
                        </div>
                        <div class="">
                            <img class='' :src='getimgurl(theWeather.weather[0].icon)' alt="icoonweer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="theMap || theMap.length >= 1" class="">
         
        </div>
       
    </div>
</template>


<script>
import mixins from '../mixins/mixins'; 

export default {
    name: 'weatherApp',
    mixins: [mixins],

    methods:{
        ophalen(location){
            console.log('Gezocht op plaats: ' + location  )
            this.$store.dispatch('WeatherAPI/getWeather', location);
            console.log(this.$store.state.WeatherAPI.place)
            this.$store.dispatch('WeatherMap/getMap');
            console.log(this.$store.state.WeatherMap.map);
        },

      
    },

    computed:{
        // Haalt de data op uit de WeatherAPI.place op.
        theWeather(){
            console.log(this.$store.state.WeatherAPI.place)
            return this.$store.state.WeatherAPI.place;
        },
        errormsg(){
            return this.$store.state.WeatherAPI.error;
        },
        error(){
            return this.$store.state.WeatherAPI.error.length > 0; 
        },
        loading(){
            return this.$store.state.WeatherAPI.loadingStatus;
        },

        // Ophalen van de API map 
        theMap(){
            console.log('Map data:' + this.$store.state.WeatherMap.map.length)
            return this.$store.state.WeatherMap.map;
        },       
        errormsgmap(){
            return this.$store.state.WeatherMap.error;
        },
        errormap(){
            return this.$store.state.WeatherMap.error.length > 0; 
        },
        loadingmap(){
            return this.$store.state.WeatherMap.loadingStatus;
        },

    }
}
</script>