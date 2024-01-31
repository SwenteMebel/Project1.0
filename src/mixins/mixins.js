//Gedeelde map met functies 

export default {
    methods: {
        getImgUrl(img){
            console.log('getImgUrl() word aangeroepen vanuit mixins map en bestand.');
            return require('../assets/afbeeldingen/' + img);
        },
   

    
    }
}