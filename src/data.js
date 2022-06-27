import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sábado 25 de junio",
            artist: "Lección 1: EL CRISOL DEL PASTOR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-SABADO.mp3",
            active: true,
        },
        {
            name:"Domingo 26 de junio",
            artist: "UNA GUÍA PARA EL VIAJE: EL PASTOR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-LUNES.mp3",
            active: false,
        },
        {
            name:"Lunes 27 de junio",
            artist: "EL ATAQUE A JOSÉ",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 28 de junio",
            artist: "DESVÍO INESPERADO 1: EL VALLE",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Miércoles 29 de junio",
            artist: "DESVÍO INESPERADO 2: LA MESA PREPARADA",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 30 de junio",
            artist: "UNA PROMESA SEGURA PARA EL VIAJE",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 1º de julio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc1/LECCION-1-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


