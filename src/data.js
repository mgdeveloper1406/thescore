import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Sábado 04 de Junio",
            artist: "JOSÉ, EXPERTO EN SUEÑOS",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-SABADO.mp3?_=1",
            active: true,
        },
        {
            name:"Domingo 05 de Junio",
            artist: "PROBLEMAS FAMILIARES",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-DOMINGO.mp3?_=2",
            active: false,
        },
        {
            name:"Lunes 06 de Junio",
            artist: "EL ATAQUE A JOSÉ",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-LUNES.mp3?_=3",
            active: false,
        },
        {
            name:"Martes 07 de Junio",
            artist: "JUDÁ Y TAMAR",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-MARTES.mp3?_=4",
            active: false,
        },
        {
            name:"Miércoles 08 de Junio",
            artist: "JOSÉ, ESCLAVO EN EGIPTO",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-MIERCOLES.mp3?_=5",
            active: false,
        },
        {
            name:"Jueves 09 de Junio",
            artist: "LOS SUEÑOS DE FARAÓN",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-JUEVES.mp3?_=6",
            active: false,
        },
        {
            name:"Jueves 09 de Junio",
            artist: "Nymano, JK the Sage",
            cover: "https://escuelasabatica.cl/2022/tri2/imagenes/tapa.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
            active: false,
        },
        {
            name:"Viernes 10 de Junio",
            artist: "PARA ESTUDIAR Y MEDITAR",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/cd6ad456b39b442e4d39e346c5f778df969326e6-1024x1024.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://www.audioescuelasabatica.com/wp-content/uploads/2022/03/LECCION-11-VIERNES.mp3?_=7",
            active: false,
      
        },
    ];
}

export default chillHop;


