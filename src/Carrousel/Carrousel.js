import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export function Carrousel() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (
        <>

            <div className="container mt-5 animate__animated animate__bounce wow">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://indiehoy.com/wp-content/uploads/2019/09/Cigarettes_After_Sex_Vorterix_28_Agosto_2019_Jonathan_Delgado_Indiehoy_13.jpg" height="700" className="w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://crazyminds.es/wp-content/uploads/CIGARETTES-AFTER-SEX-2020.jpg" height="700" className="w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://assets.deutschlandfunk.de/FILE_0b1738a01da41dbf26bbc61f95f07df0/1920x1080.jpg?t=1597489400510" height="700" className="w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}