
import axios from 'axios'; 



const typeMap = 'PA0/'; // Type map dat je wilt. https://openweathermap.org/api/weather-map-2#layers verschillende
const zoomLvl = '2/';
const xCord = '0/';
const yCord = '3';
const apikey = '900dd223f79e8489796101dc6ded398b'; // API key
//const nlversie = '&units=metric&lang=nl';
const url = `https://maps.openweathermap.org/maps/2.0/weather/${typeMap}/${zoomLvl}/${xCord}/${yCord}?appid=${apikey}`; 


export default({
    namespaced: true, //belangrijk als je verschillende api mappen samen komen in de 

    state: {
        loadingStatus: 'notloading',
        map: '',
        errors: [],

    },

    mutations: {

        SET_LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },
        SET_MAP(state, payload){
            state.map = payload;
        },
      
        ADD_ERROR(state, payload){
            state.errors = [...state.errors, payload]
        }
    },

    actions:{
        getMap(context){
            context.commit('SET_LOADING_STATUS', 'loading');
            
            axios.get(url)
                .then(result => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_MAP', result.data);
                })
                .catch(err =>{
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_MAP', [] );
                    context.commit('ADD_ERROR', err);
                })
        }

    },
    modules: {
        
    },

    getters: {
    
    }

})