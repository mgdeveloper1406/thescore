import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 06 – LUCHANDO CON LA FUERZA DE CRISTO",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://ia601508.us.archive.org/23/items/y-2mate.com-pr-bullon-leccion-6-luchando-con-la-fuerza-de-cristo/y2mate.com%20-%20Pr%20Bull%C3%B3n%20%20Lecci%C3%B3n%206%20%20Luchando%20con%20la%20fuerza%20de%20Cristo.mp3",
            active: true,
        },
        {
            name:"Sábado 06 de Agosto",
            artist: "Lección 07 – Esperanza indestructible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-7-SABADO.mp3",
            active: true,
         },
        {   
            name:"Domingo 07 de Agosto",
            artist: "Lección 07 – Esperanza indestructible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-7-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 08 de Agosto",
            artist: "Lección 07 – Esperanza indestructible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-7-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 09 de Agosto",
            artist: "Lección 07 – Esperanza indestructible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-7-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 10 de Agosto",
            artist: "Lección 07 – Esperanza indestructible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-7-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 11 de Agosto",
            artist: "Lección 07 – Esperanza indestructible",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-8-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 12 de Agosto",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc7/LECCION-7-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


