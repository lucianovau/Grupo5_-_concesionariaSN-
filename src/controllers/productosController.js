let path = require('path')
const controller = {
    productos: (req, res) => {
        let ruta = path.resolve(__dirname, '../views/products/productos');
        res.render(ruta);
    },
    detalle: (req, res)=>{
        let ruta = path.resolve(__dirname, '../views/products/detallesProd')
        res.render(ruta, productos[0])
    },
    detalleId: (req, res)=>{
        let ruta = path.resolve(__dirname, '../views/products/detallesProd')
        let idAuto = req.params.id;
        let producto = productos[idAuto];
        res.render(ruta, producto)
   }    
}
const productos = [
    {
        title: "Ford Ranger",
        descripcion: "XLT 2.0L Diesel Cabina Doble 4x2",
        precio: "$150000",
        img1: "/img/FordRanger/Pick-Up.jpg",
        img2: "/img/FordRanger/interior-pickup.jpg",
        img3: "/img/FordRanger/interior-pickup1.jpg",
        img4: "/img/FordRanger/interior-pickup2.jpg",
        img5: "/img/FordRanger/pickup-atras.jpg",
        img6: "/img/FordRanger/pickup-atras1.jpg",
        caract: "La Nueva Ranger se destaca por su tencología innovadora, incorporando una pantalla LED multitáctil de 12' con alta definición y un panel de instrumentos LED de 12,4'",
        confort: "La Nueva Ranger presenta un diseño completamente renovado, destacándose por su apariencia moderna y atractiva, tanto en el interior como en el exterior.",
        seguridad: "La Nueva Ranger incorpora Ford Co-Pilot 360. Un conjunto de tecnologías de asistencia al conductor que ayudan a mejorar la seguridad en la conducción.",
        fichaTecnica: "Motor 2.0L Bi-Turbo diesel con 210 CV 500 Nm de torque, Asiento de cuero ecológico, Sensores de estacionamiento traseros y delanteros"
    },
    {
        title: "Ford Mustang",
        descripcion: "GT V8 5.0L TiVCT",
        precio: "$55.652.000",
        img1: "/img/Pick-Up.jpg",
        img2: "/img/interior-pickup.jpg",
        img3: "/img/interior-pickup1.jpg",
        img4: "/img/interior-pickup2.jpg",
        img5: "/img/pickup-atras.jpg",
        img6: "/img/pickup-atras1.jpg",
        caract: "Modos de conduccion selecionables (Normal, deportivo+, pista, pista carreras, nieve/humed y MyMody) determminan la respuesta del acelarador, los puntos de cambio de marcha.",
        confort: "Su motor V8 5.0L que ofrece 466CV para la versión GT y 475CV para la versión Mach 1 está acompañado de tecnologías desarrolladas para aprovechar al máximo su potencial y permitir una experiencia de manejo irrepetible como nunca antes se vio en Mustang.",
        seguridad: "El sofisticado sistema de segurida dincluye: airbag frontal y de rodilla para conductor y acompañante, airbags de cortina y laterales. Para los mas pequeños incuye fijaciones ISOFIX ",
        fichaTecnica: "Motor"
    },
    {},
]
module.exports = controller