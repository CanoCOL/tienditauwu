import './Home.css'

import { SubMenu } from '../SubMenu/SubMenu.js'

import { Footer } from '../Footer/Footer.js'

export function Home(){
    let descripcionBanda="Cigarettes After Sex es una banda de indie rock estadounidense originaria de El Paso, Texas, formada en 2008 por Greg González. Su EP debut, «I.», fue lanzado en 2012 con los sencillos «Affection» y «K» en 2015 y 2016, respectivamente. Su primer álbum de estudio homónimo, Cigarettes After Sex, fue lanzado el 9 de junio de 2017."

    return(
        <>
            
            <div className='banner'></div>
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center text'>Cigarettes after Sex</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )

}