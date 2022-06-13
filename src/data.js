import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sábado 11 de Junio",
            artist: "Lección 12 – José, príncipe de Egipto",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-SABADO.mp3?_=1",
            active: true,
        },
        {
            name:"Domingo 12 de Junio",
            artist: "JOSÉ ASCIENDE AL PODER",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-DOMINGO.mp3?_=2",
            active: false,
        },
        {
            name:"Lunes 13 de Junio",
            artist: "EL ATAQUE A JOSÉ",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-LUNES.mp3?_=3",
            active: false,
        },
        {
            name:"Martes 14 de Junio",
            artist: "Lección 12 – José, príncipe de Egipto",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-MARTES.mp3?_=4",
            active: false,
        },
        {
            name:"Miércoles 15 de Junio",
            artist: "Lección 12 – José, príncipe de Egipto",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-MARTES.mp3?_=4",
            active: false,
        },
        {
            name:"Jueves 16 de Junio",
            artist: "Lección 12 – José, príncipe de Egipto",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-JUEVES.mp3?_=6",
            active: false,       
        },
        {
            name:"Viernes 17 de Junio",
            artist: "Lección 12 – José, príncipe de Egipto",
            cover: "https://www.recursos-biblicos.com/wp-content/uploads/2022/03/leccion-escuela-sabatica-segundo-trimestre-2022-el-genesis-1.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-12-VIERNES.mp3?_=7",
            active: false,
      
        },
    ];
}

export default chillHop;


