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
            name:"Sábado 9 de julio",
            artist: "LA JAULA DEL PÁJARO",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-SABADO.mp3",
            active: true,
         },
        {   
            name:"Domingo 10 de julio",
            artist: "HACIA LA TIERRA PROMETIDA POR UN CALLEJÓN",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-DOMINGO.mp3",
            active: false,
        },
        {
            name:"Lunes 11 de julio",
            artist: "AGUAS AMARGAS",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-LUNES.mp3",
            active: false,
        },
        {
            name:"Martes 12 de julio",
            artist: "EL GRAN CONFLICTO EN EL DESIERTO",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-MARTES.mp3",
            active: false,
        },
        {
            name:"Miércoles 13 de julio",
            artist: "UN LEGADO QUE PERDURA",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-MIERCOLES.mp3",
            active: false,
        },
        {
            name:"Jueves 14 de julio",
            artist: "EL FUEGO DE PRUEBA",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-JUEVES.mp3",
            active: false,       
        },
        {
            name:"Viernes 15 de julio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/06/en-el-crisol-con-cristo-guia-escuela-sabatica-3er-trimestre-pdf-1024x751.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://escuelasabatica.cl/2022/tri3/lecc3/LECCION-3-VIERNES.mp3",
            active: false,
      
        },
    ];
}

export default chillHop;


