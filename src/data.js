import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "LA JAULA DEL PÁJARO",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://ia902502.us.archive.org/27/items/y-2mate.com-pr-bullon-leccion-3-la-jaula/y2mate.com%20-%20Pr%20Bull%C3%B3n%20%20Lecci%C3%B3n%203%20%20La%20Jaula.mp3",
            active: true,
        },
        {
            name:"Sábado 16 de Julio",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-SABADO.mp3",
            active: true,
         },
        {   
            name:"Domingo 17 de Julio",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 18 de Julio",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 19 de julio",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 20 de julio",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 21 de julio",
            artist: "Lección 04 – Ver el rostro del Orfebre",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 22 de julio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc4/LECCION-4-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


