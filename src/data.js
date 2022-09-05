import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Comentarios del Pastor Bullón",
            artist: "Lección 11 – Aguardar en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://archive.org/serve/y-2mate.com-pr-bullon-leccion-10-templanza-en-el-crisol/y2mate.com%20-%20Pr%20Bull%C3%B3n%20%20Lecci%C3%B3n%2010%20%20Templanza%20en%20el%20crisol.mp3",
            active: true,       
         },
        {   
            name:"Domingo 4 de septiembre",
            artist: "Lección 11 – Aguardar en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc11/LECCION-11-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 5 de septiembre",
            artist: "Lección 10 – Templanza en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc11/LECCION-11-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 6 de septiembre",
            artist: "Lección 11 – Aguardar en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc11/LECCION-11-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 7 de septiembre",
            artist: "Lección 11 – Aguardar en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc11/LECCION-11-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 8 de septiembre",
            artist: "Lección 11 – Aguardar en el Crisol",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc11/LECCION-11-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 9 de Septiembre",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc11/LECCION-11-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


