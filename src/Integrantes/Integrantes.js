import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (
        <>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom ">
                    <img id='img' src="https://i.discogs.com/K_3SsQKJo6Zibz_uIS8lMtesAMhryp3eAGz8uIZyxPc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ2NjAx/MDYtMTYxMTk4MzA1/My00MzM1LmpwZWc.jpeg" alt="la mujer de mi tio" className="img-fluid w-100 mt-3 rounded-circle animate__animated animate__backInDown wow" data-bs-toggle="collapse" data-bs-target="#collapseExample1">
                    </img>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInDown wow'>
                    <h2>Greg González</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body">
                           <b>Greg González</b>
                           No hay informacion sobre este artista...
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div  className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft wow'>
                    <h2>Phillip Tubbs</h2>
                    <h3>Guitarrista</h3>
                </div>
                <div className="col-12 col-md-4 zoom ">
                    <img id='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/POS17_%40Kristsll-206_%2835964739876%29.jpg/1200px-POS17_%40Kristsll-206_%2835964739876%29.jpg" alt="la mujer de mi tio" className="img-fluid w-100 mt-3 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample2">
                    </img>
                </div>

            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse " id="collapseExample2">
                        <div className="card card-body ">
                        <p>El músico de El Paso Phillip Tubbs, bajo el seudónimo de Pink Orange Red, ha estado escribiendo e interpretando sus propias canciones desde su adolescencia. Phillip Tubbs es el único miembro de Pink Orange Red, que hace música en un estilo de baile con un enfoque en la composición de canciones clásicas y letras personales. Más recientemente, dejó la banda de renombre internacional Cigarettes After Sex para volver a centrarse en su propia música. En Cigarettes, Phillip</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}