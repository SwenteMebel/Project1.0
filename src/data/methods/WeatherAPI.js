
import axios from 'axios'; 



const url = `http://api.openweathermap.org/data/2.5/`; //API url + de rest
const placeCode = 'weather?q='; //na de q komt de plaats naam in de axios
const apikey = '&appid=900dd223f79e8489796101dc6ded398b'; // API key
const nlversie = '&units=metric&lang=nl';


export default({
    namespaced: true, //belangrijk als je verschillende api mappen samen komen in de 

    state: {
        loadingStatus: 'notloading',
        place: '',
        errors: [],

    },

    mutations: {

        SET_LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },
        SET_PLACE(state, payload){
            state.place = payload;
        },
      
        ADD_ERROR(state, payload){
            state.errors = [...state.errors, payload]
        }
    },

    actions:{
        getWeather(context, location){
            context.commit('SET_LOADING_STATUS', 'loading');
            console.log('de invoer in getWeather functie ' + location )
            axios.get(url + placeCode + location + apikey + nlversie)
                .then(result => {
                    const lat = 
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_PLACE', result.data);
                })
                .catch(err =>{
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_PLACE', [] );
                    context.commit('ADD_ERROR', err);
                })
        }

    },
    modules: {
        
    },

    getters: {
    
    }

})