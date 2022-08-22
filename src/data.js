import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://archive.org/serve/y-2mate.com-pr-bullon-leccion-9-una-vida-de-alabanza/y2mate.com%20-%20Pr%20Bull%C3%B3n%20%20Lecci%C3%B3n%209%20%20Una%20vida%20de%20alabanza.mp3",
            active: true,
        },
        {
            name:"Sábado 20 de agosto",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-SABADO.mp3",
            active: true,
         },
        {   
            name:"Domingo 21 de Agosto",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 22 de Agosto",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 23 de Agosto",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 24 de Agosto",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 25 de Agosto",
            artist: "Lección 09 – Una Vida de Alabanza",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 26 de Agosto",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc9/LECCION-9-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


