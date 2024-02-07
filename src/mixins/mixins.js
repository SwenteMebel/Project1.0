//Gedeelde map met functies 
export default {

    methods: {
        async getImgUrl(img){
            console.log('getImgUrl() word aangeroepen vanuit mixins map en bestand. met de img ' + img );
            const { default: imageUrl } = await import(`@/assets/gerechtenimg/${img}`);
            return imageUrl;
        },
   

    
    }
}