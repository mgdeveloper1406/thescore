import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://archive.org/serve/y-2mate.com-pr-bullon-leccion-10-templanza-en-el-crisol/y2mate.com%20-%20Pr%20Bull%C3%B3n%20%20Lecci%C3%B3n%2010%20%20Templanza%20en%20el%20crisol.mp3",
            active: true,       
         },
        {   
            name:"Domingo 28 de Agosto",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/AudioDH/1domingo.mp3",
            active: false,
        },
        {
            name:"Lunes 29 de Agosto",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/AudioDH/2lunes.mp3",
            active: false,
        },
        {
            name:"Martes 30 de Agosto",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/AudioDH/3martes.mp3",
            active: false,
        },
        {
            name:"Miércoles 31 de Agosto",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/AudioDH/4miercoles.mp3",
            active: false,
        },
        {
            name:"Jueves 1 de Septiembre",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/AudioDH/5jueves.mp3",
            active: false,       
        },
        {
            name:"Viernes 2 de Septiembre",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://s3.us-east-2.wasabisys.com/rebiblicos/Escuela%20Sabatica/AudioDH/6viernes.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


