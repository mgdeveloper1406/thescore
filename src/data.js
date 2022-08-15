import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://archive.org/download/y2mate.com-pr-bullon-leccion-7-esperanza-indestructible.mp3-_1_/y2mate.com-Pr-Bull%C3%B3n-Lecci%C3%B3n-7-Esperanza-indestructible.mp3-_1_.mp3",
            active: true,
        },
        {
            name:"Sábado 13 de Agosto",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-SABADO.mp3",
            active: true,
         },
        {   
            name:"Domingo 14 de Agosto",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 15 de Agosto",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 16 de Agosto",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 17 de Agosto",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 18 de Agosto",
            artist: "Lección 08 – Viendo al Invisible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 19 de Agosto",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc8/LECCION-8-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


