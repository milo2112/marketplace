# Proyecto Final Market Place

Esta es la documentación del proyecto final del curso FullStack Javascript de la academia Desafío Latam

## Author

- Milton Rosas - Github profile: [@milo2112](https://github.com/milo2112)


## Hito 1 - Diseño y prototipo
### Requerimiento 1: Diseño de la interfaz gráfica

Para responder a este requerimiento, se definen las diferentes vistas que contendrá el sitio, donde
el usuario podra navegar y observar los productos ofrecidos, loggearse o registrarse, seleccionar y comprar productos y además, tendrá la posibilidad de generar un usuario administrador que podrá mantener las tarjetas de los productos ofrecidos. Las vistas son 7: 
- Home: le permite al usuario ver productos destacados y ofertas.
- Login: le permite al usuario loggearse a la aplicación.
- Register: le permite al usuario registrarse.
- Admin: le permitira al usuario con perfil administrador, mantener las tarjetas de productos creando, modificando o eliminando productos.
- Products Gallery: le permite al usuario ver una galeria con todos los productos.
- Products Detail: le permite al usuario ver la descripción de un producto y ponerlo en su carro de compra.
- Shopping Cart: le permite al usuario comprar y administrar su carro de compras agregando o eliminando productos.

#### Home page

![Home](../documentation/uiDesgin/Home.png)


#### Login page

![Login](../documentation/uiDesgin/Login.png)


#### Register page

![Register](../documentation/uiDesgin/Register.png)


#### Admin page

![Admin](../documentation/uiDesgin/Admin.png)


#### Products Gallery page

![Products Gallery](../documentation/uiDesgin/Products%20Gallery.png)


#### Products Detail page

![Products Detail](../documentation/uiDesgin/Product%20Detail.png)


#### Shopping Cart page

![Shopping cart](../documentation/uiDesgin/Shopping%20Cart%20View.png)



### Requerimiento 2: Definición de la navegación entre las vistas

Para responder a este requerimiento, se generarán controles para el acceso a las diferentes vistas
definidas en el requerimiento anterior.

Existirán 2 niveles de control como atributos de las vistas: vistas con atributo público y vistas con atributo privado.

En el caso de las vistas con atributo público, el usuario no tendrá restricciones para mirar productos, en este caso podrá mirar las siguientes páginas sin necesidad de estar loggeado, pero no podrá realizar compras ni tampoco administrar el contenido del sitio:
- Home
- Login
- Register
- Product Gallery
- Products Detail

En el caso de las vistas con atributo privado, su acceso será controlado con la generación de un token de autenticación para los usuarios que ya existan en el sitio. Existirán 2 tipos de usuarios separados por roles:

- Usuario administrador: que posee acceso irrestricto al sitio y demás podrá realizar la administración del contenido del mismo creando, modificando o eliminando productos.

- Usuario cliente: que posee acceso al sitio en modo cliente, pudiendo ver todas las vistas definidas con el atributo público, pero además podrá administrar su carro de compras agregando o eliminando productos antes de comprar.


#### Diagrama de Definición de la navegación 

![Diagrama definicion navegacion](../documentation/navegationDefinition/DefinicionNavegacion.drawio.png)


### Requerimiento 3: Listado de dependencias a utilizar en el proyecto

A continuación se detallan las tecnologías que serán utilizadas en el desarrollo tanto del frontewnd como del backend.

#### Listado de dependencias del Proyecto Frontend

![Vite](https://img.shields.io/badge/Vite-v4.4.10-gray?style=flat&logo=Vite&logoColor=white&color=646CFF)
![React](https://img.shields.io/badge/React-v18.2.0-gray?style=flat&logo=react&logoColor=white&color=61DAFB)
![axios](https://img.shields.io/badge/axios-v1.5.1-gray?style=flat&logo=axios&logoColor=white&color=5A29E4)
![standardjs](https://img.shields.io/badge/standardjs-v17.1.0-gray?style=flat&logo=standardjs&logoColor=white&color=F3DF49)
![bootstrap](https://img.shields.io/badge/bootstrap-v5.3.2-gray?style=flat&logo=bootstrap&logoColor=white&color=7952B3)
![CSS3](https://img.shields.io/badge/CSS3-gray?style=flat&logo=CSS3&logoColor=white&color=1572B6)


#### Listado de dependencias del Proyecto Backend

![javascript](https://img.shields.io/badge/javascript-gray?style=flat&logo=javascript&logoColor=white&color=F7DF1E)
![nodes](https://img.shields.io/badge/node-v18.16.0-gray?style=flat&logo=node.js&logoColor=white&color=339933)
![Express](https://img.shields.io/badge/Express-v4.18.2-gray?style=flat&logo=Express&logoColor=white&color=000000)
![nodemon](https://img.shields.io/badge/nodemon-v3.0.1-gray?style=flat&logo=nodemon&logoColor=white&color=76D04B)
![standardjs](https://img.shields.io/badge/standardjs-v17.1.0-gray?style=flat&logo=standardjs&logoColor=white&color=F3DF49)
![dotenv](https://img.shields.io/badge/dotenv-v16.3.1-gray?style=flat&logo=dotenv&logoColor=white&color=ECD53F)
![postgresql](https://img.shields.io/badge/pg-v8.11.3-gray?style=flat&logo=postgresql&logoColor=white&color=4169E1)
![uuid](https://img.shields.io/badge/uuid-v9.0.1-gray?style=flatd&color=338ee6)
![cors](https://img.shields.io/badge/cors-v2.8.5-gray?style=flatd&color=000000)
![jest](https://img.shields.io/badge/jest-v28.1.3-gray?style=flatd&color=000000)
![supertest](https://img.shields.io/badge/supertest-v6.2.4-gray?style=flatd&color=000000)

### Requerimiento 4: Diseño de las tablas de la base de datos y sus relaciones

A continuación se detalla el modelo Entidad Relación donde se persistirán los datos del sitio.

![Model](../documentation/MER/model.PNG)


### Requerimiento 5: Diseño del contrato de datos de la API REST

#### Disclaimer: Si se requiere ver la doucmentación en línea, puede verla aquí abajo

#### 🔗 Documentation Link https://documenter.getpostman.com/view/30796892/2s9Ye8eufu


A continuación se detalla la documentación asociada a los datos del contrato API.

![JSON Documentation](../documentation/apiDocumentation/Marketplace%20API%20documentation%20-%20Milton%20Rosas.postman_collection.json)
