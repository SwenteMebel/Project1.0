import { createStore } from "vuex"; 

//import andere files om te laten zien op de pagina. 
import WeatherAPI from './methods/WeatherAPI.js';
import WeatherMap from './methods/WeatherMap.js';

export default createStore ({

    modules: {
        WeatherAPI, // regels de api voor de plaats naam 
        WeatherMap, // de map voor het weer.
    },


});