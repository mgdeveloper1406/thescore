import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://ia601506.us.archive.org/34/items/y-2mate.com-pr-bullon-leccion-4-viendo-el-rostro-del-orfebre/y2mate.com%20-%20Pr%20Bull%C3%B3n%20%20Lecci%C3%B3n%204%20%20Viendo%20el%20Rostro%20del%20Orfebre.mp3",
            active: true,
        },
        {
            name:"Sábado 23 de Julio",
            artist: "Lección 05 – Calor extremo",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-SABADO.mp3",
            active: true,
         },
        {   
            name:"Domingo 24 de Julio",
            artist: "Lección 05 – Calor extremo",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 25 de Julio",
            artist: "Lección 05 – Calor extremo",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 26 de julio",
            artist: "Lección 05 – Calor extremo",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 27 de julio",
            artist: "Lección 05 – Calor extremo",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 28 de julio",
            artist: "Lección 05 – Calor extremo",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 29 de julio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc5/LECCION-5-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


