import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sábado 2 de julio",
            artist: "Lección 2: LOS CRISOLES VENIDEROS",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-SABADO.mp3",
            active: true,
        },
        {
            name:"Domingo 3 de julio",
            artist: "SORPRESAS",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 4 de julio",
            artist: "LOS CRISOLES DE SATANÁS",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 5 de julio",
            artist: "LOS CRISOLES DEL PECADO",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Miércoles 6 de julio",
            artist: "LOS CRISOLES DE PURIFICACIÓN",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 7 de julio",
            artist: "LOS CRISOLES DE LA MADUREZ",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 8 de julio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc2/LECCION-2-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


