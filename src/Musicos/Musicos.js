import { Footer } from '../Footer/Footer.js'
import { Carrousel } from '../Carrousel/Carrousel.js'

export function Musicos() {

    //un arreglo de objetos es formato comun al consumir un api

    let musicos = [
        {
            nombre: "Cigarretes after Sex",
            rol: "Banda",
            url: "https://promocionmusical.es/wp-content/uploads/2019/01/Cigarettes-after-sex.jpg"
        },
        
    ]

    let conciertosMemorables = [
        {
            fecha: "17/6/2019",
            ubicacion: "TUESDAY 15TH MAY-VIENNA GASOMETER",
            descripcion: "No hay una descipcion detallada sobre este evento.",
            foto: "https://photos.bandsintown.com/large/8677496.jpeg"
        },
        {
            fecha: "31/7/2021",
            ubicacion: "WEDNESDAY 16TH MAY-BERLIN, COLUMBIAHALLE",
            descripcion: "No hay una descipcion detallada sobre este evento.",
            foto: "https://yoconciertos.com/wp-content/uploads/2019/08/68903478_3007904295913228_5303377126920028160_o.jpg"
        },
        {
            fecha: "5/12/2015",
            ubicacion: "SATURDAY 19TH MAY-HAMBURG, GRUENSPAN",
            descripcion: "No hay una descipcion detallada sobre este evento.",
            foto: "https://www.sopitas.com/wp-content/uploads/2019/08/cigarettes-after-sex-resen%CC%83a-concierto.png?w=1128"
        },
        {
            fecha: "2/6/2018",
            ubicacion: "SUNDAY 20TH MAY-LUXEMBOURG, ATRLIER",
            descripcion: "No hay una descipcion detallada sobre este evento.",
            foto: "https://www.informador.mx/export/sites/elinformador/img/2018/01/29/tyt.jpg_347421144.jpg"
        },
        {
            fecha: "8/5/2022",
            ubicacion: "MONDAY 28TH MAY-ZURICH,Z-TRA",
            descripcion: "No hay una descipcion detallada sobre este evento.",
            foto: "https://setlist.me/wp-content/uploads/2019/08/Cigarretes-After-Sex-2.jpg"
        },

    ]

    //mapeando un arreglo para hacer render
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    musicos.map((musico) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-5 border-dark">
                                        <img src={musico.url} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center  text-danger fs-3 mt-2">{musico.nombre}</h1>
                                        <h1 className="text-center  fs-3 text-info">{musico.rol}</h1>
                                    </div>
                                </div>
                            </>

                        )

                    })
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    conciertosMemorables.map((conciertoMemorable) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-3 border-dark">
                                        <img src={conciertoMemorable.foto} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center fs-5 text-info mt-2">{conciertoMemorable.ubicacion}</h1>
                                        <h1 className="text-center fs-5 text-secondary ">{conciertoMemorable.fecha}</h1>
                                        
                                        <h1 className="text-center fs-5 text-dark">{conciertoMemorable.descripcion}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div>
            <Carrousel></Carrousel>
            </div>
            <div >
                <Footer></Footer>
            </div>
            
        </>

    )

}

