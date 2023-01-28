import camisaJeans from "./apiProductsImgs/camisa-jeans.webp"
import calcaJeans from "./apiProductsImgs/calca-jeans.jpg"
import sapatoCouroLacoste from "./apiProductsImgs/sapato-couro-lacoste.PNG"
import sapatenisNike from "./apiProductsImgs/sapatenis-nike.jpeg"
import camisaGolaPolo from "./apiProductsImgs/camisa-gola-polo-adidas.webp"
import camisaAmarelaGucci from "./apiProductsImgs/camisa-amarela-gucci.png"
import saiaRosafem from "./apiProductsImgs/saia-rosa-feminina.jpg"
import calcaJeansFem from "./apiProductsImgs/calça-jeans-feminina.jpg"
import sapatoSocial from "./apiProductsImgs/sapato-social.webp"
import sapatilha from "./apiProductsImgs/sapatilha-moleka.webp"
import smartWatch from "./apiProductsImgs/smart-watch-gucci.jpeg"
import colarPerolas from "./apiProductsImgs/colar-perolas.webp"
import cordaoOuro from "./apiProductsImgs/cordao-ouro.jpg"
import correntePrata from "./apiProductsImgs/corrente-prata.webp"
import camisaListaAdidas from "./apiProductsImgs/camisa-lista-adidas.webp"
import camisaLacoste from "./apiProductsImgs/camisa-lacoste.jpg"

export const api = [
    {
     id:0,
     img: camisaJeans,
     nome:"Camisa jeans",
     marca:"lacoste",
     valor:'12.00',
    },
    {
     id:1,
     img:calcaJeans,
     nome:"Calça jeans",
     marca:"adidas",
     valor:'18.00',  
    },
    {
     id:2,
     img: sapatoCouroLacoste,
     nome:"Sapato de Couro",
     marca:"lacoste",
     valor:'22.00',  
    },
    {
     id:3,
     img:sapatenisNike,
     nome:"Sapatênis",
     marca:"nike",
     valor:'220.00',
    },
    {
     id:4,
     img:camisaGolaPolo,
     nome:"Camisa Gola Polo",
     marca:"adidas",
     valor:'50.00',  
    },
    {
     id:5,
     img:camisaAmarelaGucci,
     nome:"camiseta amarela",
     marca:"gucci",
     valor:'19.90',  
    },
    {
     id:6,
     img:saiaRosafem,
     nome:"saia rosa",
     marca:"girls look",
     valor:'25.00',  
    },
    {
     id:7,
     img:calcaJeansFem,
     nome:"calça jeans",
     marca:"girls look",
     valor:'41.00',  
    },
    {
     id:8,
     img:sapatoSocial,
     nome:"sapato social",
     marca:"italylook",
     valor:'70.00',  
    },
    {
     id:9,
     img:sapatilha,
     nome:"sapatilha",
     marca:"moleka",
     valor:'32.00',  
    },
    {
     id:10,
     img:smartWatch,
     nome:"Smart watch",
     marca:"gucci",
     valor:'12.00',  
    },
    {
     id:11,
     img:colarPerolas,
     nome:"Colar de pérolas",
     marca:"mymode",
     valor:'50.55',  
    },
    {
     id:12,
     img:cordaoOuro,
     nome:"cordão ouro",
     marca:"lacoste",
     valor:'1222.00', 
    },
    {
     id:13,
     img:correntePrata,
     nome:"corrente prata",
     marca:"mylook",
     valor:'222.00', 
    },
    {
     id:14,
     img:camisaListaAdidas,
     nome:"Camisa lista",
     marca:"adidas",
     valor:'12.00',  
    },
    {
     id:15,
     img:camisaLacoste,
     nome:"Camisa",
     marca:"lacoste",
     valor:'33.00',
    },
] 



//pega um objeto aleatorio da api
function randomItem (item){
    let index = Math.floor(Math.random() * item.length);

    return item[index];
}

//listando objetos aleatorios da api

export let listApiItems = []

for (let i = 1; i <= 12; i++){
    listApiItems.push(randomItem(api))
}



listApiItems.forEach(item=>{
    console.log(item)
});

