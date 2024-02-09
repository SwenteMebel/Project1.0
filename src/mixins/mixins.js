//Gedeelde map met functies 
export default {

    methods: {
        async getImgUrl(img){ // maakt 
            console.log('getImgUrl() word aangeroepen vanuit mixins map en bestand. met de img ' + img );
            const { default: imageUrl } = await import(`@/assets/gerechtenimg/${img}`);
            return imageUrl;
        },

        // Functie die het icon van het de component weather maakt. 
        getimgurl(icon){ // icon staat voor het icon benaming die hij uit de API haalt.
            const imgUrl = 'https://openweathermap.org/img/wn/'; // url voor icon
            const sizeIcon = '@2x.png'; //icon grote
            const urlIcon = imgUrl + icon + sizeIcon; //voegt alles samen
            return urlIcon;
        },

    
    }
}