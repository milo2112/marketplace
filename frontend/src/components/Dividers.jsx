// import React from 'react'

export default function Dividers() {
    return (
        <>
                <section className="text-center" style={{ paddingTop: '50px', paddingLeft: '350px' }}>
                    <div className="row  mb-1">
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i className="fas fa-image fa-3x text-primary mb-4"></i>
                            <h5 className="text-secondary fw-bold mb-3">5 🎯</h5>
                            <h6 className="fw-normal mb-5 h3 rte--block text-white">Agencias</h6>
                            <p className="text-white"> Atención presencial disponible en las principales ciudades del país</p>
                            <div className="vr vr-blurry bg-secondary position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                        </div>
  
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i className="fas fa-image fa-3x text-primary mb-4"></i>
                            <h5 className="text-secondary fw-bold mb-3">+ 10 🗺️</h5>
                            <h6 className="fw-normal mb-5 h3 rte--block text-white">Destinos</h6>
                            <p className="text-white"> De norte a sur a lo largo de todo el país y de mar a cordillera</p>
                            <div className="vr vr-blurry bg-secondary position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                        </div>
  
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i className="fas fa-image fa-3x text-primary mb-4"></i>
                            <h5 className="text-secondary fw-bold mb-3">+ 10 🛌🏼</h5>
                            <h6 className="fw-normal mb-5 h3 rte--block text-white">Alojamientos</h6>
                            <p className="text-white"> Disponibles para grupos, parejas y turistas individuales en todos los destinos</p>
                            {/* <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div> */}
                        </div>
                    </div>
                </section>
      </>
    )
}
