<template>
    <h1>Weather app</h1>
    <input type="text" v-model.trim="placeName"> <button @click="ophalen(placeName)">Zoek</button>
    <div v-if='theWeather || theWeather.length >= 1' class="">
        {{ theWeather }}<br>
        Name City: {{ theWeather.name }}<br>
        Temperatuur: {{ theWeather.main.temp }}<br>
        Gevoels temp: {{ theWeather.main.feels_like }} <br>
        Regen verwacht: {{ theWeather.weather[0].description }} in {{ theWeather.rain }}
        <img :src='getimgurl(theWeather.weather[0].icon)' alt="icoonweer">
    </div>
</template>


<script>
   
export default {
    name: 'weatherApp',
    
    methods:{
        async ophalen(location){
            console.log('Gezocht op plaats: ' + location  )
            await this.$store.dispatch('WeatherAPI/getWeather', location);
            console.log(this.$store.state.WeatherAPI.place)
        },

        getimgurl(icon){
            const imgUrl = 'https://openweathermap.org/img/wn/';
            const sizeIcon = '@2x.png';
            const urlIcon = imgUrl + icon + sizeIcon;
            return urlIcon;
        }
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