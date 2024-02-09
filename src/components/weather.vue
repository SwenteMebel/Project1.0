<template>
    <div class="bg-yellow-500 grid justify-center md:w-screen font-serif">
        <div class="bg-orange-500 md:w-[50rem] mt-10 p-10 md:h-[10rem] md:grid md:justify-center md:p-2">
            <h1 class="text-center text-2xl font-bold text-shadow-xl ">Weather app</h1>    
            <input class='p-2 md:p-1 bg-green-200 md:mt-3 md:w-[40rem] rounded-l-xl md:rounded-xl text-center text-lg ' type="text" v-model.trim="placeName" placeholder="Search City"> 
            <button class=' p-2 md:p-1 bg-green-300 md:mt-3 md:w-[40rem] rounded-r-xl md:rounded-xl text-center text-lg text-semibold ' @click="ophalen(placeName)">Zoek</button>
        </div>
        <!--<div v-if='!error()' class="">{{ errormsg }}</div>-->
        <div v-if='theWeather || theWeather.length >= 1' class="bg-purple-300">
            <div class="bg-yellow-700 grid justify-center m-5 md:px-5">
                <div class="bg-blue-200 w-50">
                    <div class="grid justify-center">
                        <span class="text-3xl font-semibold mt-10">&#8451; {{ theWeather.main.temp }} </span>
                        <span class="text-xl  font-semibold mt-10">{{ theWeather.name }}</span>
                    </div>
                
                    <div class="flex justify-center">
                        <div class="bg-sky-300 flex items-center justify-center md:w-[20rem] w-[10rem]">
                            <span class="text-lg first-letter:capitalize font-medium">{{ theWeather.weather[0].description }}</span>
                        </div>
                        <div class="bg-orange-300">
                            <img :src='getimgurl(theWeather.weather[0].icon)' alt="icoonweer">
                        </div>
                    </div>
                </div>
              
              
            </div>
        </div>
    </div>
</template>


<script>
import mixins from '../mixins/mixins'; 

export default {
    name: 'weatherApp',
    mixins: [mixins],

    methods:{
        async ophalen(location){
            console.log('Gezocht op plaats: ' + location  )
            await this.$store.dispatch('WeatherAPI/getWeather', location);
            console.log(this.$store.state.WeatherAPI.place)
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
        }
    }
}
</script>