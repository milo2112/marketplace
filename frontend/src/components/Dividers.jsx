import { Image } from 'react-bootstrap'

export default function Dividers() {
    return (
        <>
                <section className="text-center" style={{ paddingTop: '50px', paddingLeft: '350px' }}>
                    <div className="row  mb-1">
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i className="fas fa-image fa-3x text-primary mb-4"></i>
                            <h5 className="text-secondary fw-bold mb-3" style={{ fontFamily: 'Barrio', fontSize: '20px' }}><Image src='..\src\assets\img\hello-backpacker-favicon-color.png' style={{ width: '43px', marginRight: '13px', marginTop: '10px' }} /></h5>
                            <h6 className="fw-normal mb-5 h3 rte--block text-warning" style={{ fontFamily: 'Barrio', fontSize: '30px' }}>Agencias</h6>
                            <p className="text-secondary" style={{ paddingTop: '5px', fontFamily: 'Barrio', fontSize: '20px' }}> 
                              Atención presencial disponible en las principales ciudades del país
                            </p>
                            <div className="vr vr-blurry bg-secondary position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                        </div>
  
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i className="fas fa-image fa-3x text-primary mb-4"></i>
                            <h5 className="text-secondary fw-bold mb-3" style={{ fontFamily: 'Barrio', fontSize: '20px' }}><Image src='..\src\assets\img\world-spa-favicon-color.png' style={{ width: '43px', marginRight: '13px', marginTop: '10px' }} /></h5>
                            <h6 className="fw-normal mb-5 h3 rte--block text-warning" style={{ fontFamily: 'Barrio', fontSize: '30px' }}>Destinos</h6>
                            <p className="text-secondary" style={{ paddingTop: '5px', fontFamily: 'Barrio', fontSize: '20px' }}>
                              De norte a sur a lo largo de todo el país y de mar a cordillera
                            </p>
                            <div className="vr vr-blurry bg-secondary position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                        </div>
  
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i className="fas fa-image fa-3x text-primary mb-4"></i>
                            <h5 className="text-secondary fw-bold mb-3" style={{ fontFamily: 'Barrio', fontSize: '20px' }}><Image src='..\src\assets\img\bed-and-breakfast-favicon-color.png' style={{ width: '43px', marginRight: '13px', marginTop: '10px' }} /></h5>
                            <h6 className="fw-normal mb-5 h3 rte--block text-warning" style={{ fontFamily: 'Barrio', fontSize: '30px' }}>Alojamientos</h6>
                            <p className="text-secondary" style={{ paddingTop: '5px', fontFamily: 'Barrio', fontSize: '20px' }}> 
                              Disponibles para grupos, parejas y turistas individuales en cada destino
                              </p>
                        </div>
                    </div>
                </section>
      </>
    )
}
