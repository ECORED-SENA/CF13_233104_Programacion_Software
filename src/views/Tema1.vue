<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Construcción del #[em Backend] de la aplicación #[em web]

    p(data-aos="fade-left").mb-5 Se inicia con una estructura de proyecto MEAN (Mongo, Express, Angular y Node.js) para el proyecto que abarca tanto el #[em Front-end] como el #[em Backend]. Para la instalación de las primeras herramientas como Node.js y Express en la sección material complementario de este documento encontrará la guía de instalación de Node.js y de Express.  A continuación, se incluye una figura que representa de manera general el proceso de codificación de #[em software].

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span Codificación #[em software].

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")
          figcaption Nota. Codificación en lenguaje de desarrollo de #[em software].

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Instalación y configuración de herramientas de Node.js

    p(data-aos="fade-left").mb-5 Se utiliza el Visual Studio Code (VS Code) con la siguiente estructura de directorios que se muestra en la figura 3 para el #[em Backend].

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3.
          span Estructura de directorios #[em Backend].

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt")
          figcaption Nota. Estructura de directorios del proyecto.

    .bg--full.img_01
      .row.justify-content-center
        .col-lg-10
          .bg--blue.brad_01.p-4.mb-4(data-aos="zoom-in")
            .row.justify-content-center.align-items-center
              .col-lg.mb-4.mb-lg-0
                p.mb-0 Como se observa en la figura anterior se crea la carpeta GESTION-EMPLEADOS, que será la principal o raíz del proyecto. Dentro de esta se crea la carpeta #[em Backend], en la cual se crean otros directorios y archivos como se alcanza a apreciar en la figura. De tal forma, que esta será la estructura que apoyará el desarrollo de la base de la aplicación.
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt").img165.m-auto

          p(data-aos="fade-left").mb-4 Una vez creadas las carpetas y archivos como lo son #[em controllers, models, routes, database].js e index.js, se abre la terminal del VS Code y se digita el siguiente comando para crear un proyecto Node.js, como se muestra en el ejemplo de la siguiente figura:

          .row.justify-content-center.mb-5(data-aos="flip-left")
            .col-auto
              .bg--code_02
                p.mb-0 npm init --yes         

          
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 4.
            span Terminal de VS Code.

          figure(data-aos="zoom-in").mb-4
            img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt")

          p(data-aos="fade-left").mb-4 Una vez creado el proyecto se requiere todas las bondades del #[em framework] de Node.js, para lo cual se hace necesario Express, que va a generar una serie de componentes que ayudarán mucho al desarrollo de esta aplicación; por lo tanto, se instala Express con la siguiente línea de comandos desde el terminal del VS Code:

          .row.justify-content-center.mb-5(data-aos="zoom-in")
            .col-auto
              .bg--code_01
                p.mb-0 npm install express
          

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Desarrollo del index.js

    p(data-aos="fade-left").mb-4 El siguiente paso es iniciar con el desarrollo del archivo principal del #[em Backend], que se llama index.js como se muestra en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-10      
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5.
          span Estructura index.js.

        .bg--code(data-aos="zoom-in")
          p #[span.c0 const] #[span.c2 express] &#61; #[span.c2 require]&#40;#[span.c3 &#39; express &#39;]&#41; ;

          p #[span.c0 const] #[span.c2 morgan] &#61; #[span.c2 require]&#40;#[span.c3 &#39; morgan &#39;]&#41; ;

          p #[span.c0 const] #[span.c2 cors] &#61; #[span.c2 require]&#40;#[span.c3 &#39; cors &#39;]&#41; ;

          p #[span.c0 const] #[span.c1 app] &#61; #[span.c2 express]&#40; &#41; ; #[span.c4 // la constante app tendrá ahora todo el funcionamiento del servidor]

          p #[span.c0 const] #[span.c1 mongoose] &#61; #[span.c2 require]&#40; #[span.c3 &#39; &#46; /database &#39;] &#41; ; #[span.c4 // no se quiere todo el archivo sino la conexión]              

          p #[span.c4 /** * Se crea una REST API, es la manera de decirle al servidor que reciba y envíe datos  */]

          p #[span.c4 // Configuraciones]

          p #[span.c1 app]#[span.c2 .set](#[span.c3 'port'], #[span.c1 process.env] #[span.c0 .PORT] || #[span.c4 3000]);
          p #[span.c1 app] #[span.c0 .use](#[span.c2 morgan](#[span.c3 'dev'])); 
          p #[span.c0 app] #[span.c2 .use](#[span.c2 express.json]()); #[span.c4 // método que ayuda a convertir el código para que el servidor pueda entender lo que viene del cliente.]
          p #[span.c1 app]#[span.c2 .use](#[span.c2 cors]({#[span.c1 origin:] #[span.c3 'http://localhost:4200']})); #[span.c4 // método para comunicar con el cliente]
          p #[span.c4 // rutas de nuestro servidor]
          p #[span.c1 app] #[span.c2 .use](#[span.c3 '/api/empleados'],#[span.c2 require](#[span.c3 './routes/empleado.routes']));
          p #[span.c4 // Iniciando el servidor]
          p #[span.c1 app]#[span.c2 .listen](#[span.c1 app]#[span.c2 .get](#[span.c3 'port']), () &#61;&#62; {#[span.c4 // esta es una mejor manera de configurar el puerto]
          p.pd--1 #[span.c1 console]#[span.c2 .log](#[span.c3 'server activo en el puerto'], #[span.c1 app]#[span.c2 .get](#[span.c3 'port']));
          p }); 

        figcaption.mb-5 Nota. Código completo archivo index.js

        p.text-center.mb-4 Puede descargar el contenido de estas instrucciones en el #[strong archivo index.js] disponible a continuación.

        .row.justify-content-center
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/index_js.zip')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-zip.svg")
              .anexo__texto
                p Anexo. Estructura index.js


        p(data-aos="fade-left").mb-5 En la figura anterior se aprecia el código del archivo index.js para el proyecto, por lo cual en la medida del avance de este componente se irá explicando cada línea de código que se requiera ejecutar. En ese sentido, se inicia con el requerimiento de Express y se almacena en una constante en JavaScript llamada Express. De esta forma se tendrá el acceso a todo el funcionamiento del servidor con la línea de código:

        .row.justify-content-center(data-aos="fade-right")
          .col-auto
            .bg--code_01
              p.mb-0 const app = express();

    .bg--mint.p-4.mb-4
      .row.justify-content-center
        .col-xl-3.d-none.d-xl-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_05.png", alt="alt")
        .col-xl-9(data-aos="fade-left")
          p Una vez creada la constante app, se pasa a la configuración del puerto por donde va a escuchar y a recibir el servidor todo tipo de solicitudes por parte del cliente, según se muestra en la siguiente línea:
          .row.justify-content-center.mb-4(data-aos="zoom-in")
            .col-auto
              .bg--code_02
                p.mb-0 app.set('port', process.env.PORT || 3000);

          p(data-aos="fade-left") De este modo, #[em set] es para crear una variable que va a ser accedida desde cualquier parte de la aplicación, por lo que la estructura es la siguiente (nombre var, valor); #[em process] es porque cuando se despliegue la app no se va a tener la opción de definir el puerto, sino que el mismo servicio de la nube ayudará a definirlo, en el caso de que el puerto 3000 esté ocupado.

          p(data-aos="fade-left") Con el fin de revisar los cambios en el servidor de manera automática se tiene planeada la instalación de algunas herramientas que harán más fácil el desarrollo sobre Node.js, por lo que se instala Nodemon (Vortexbird, 2017) como una utilidad que monitorea de manera constante los cambios en el código fuente que se está desarrollando y de manera automática reinicia el servidor. Por lo tanto, la línea de código utilizada en la terminal de VS Code es:

          .row.justify-content-center.mb-4(data-aos="zoom-in")
            .col-auto
              .bg--code_01
                p.mb-0 npm install nodemon –D 

    .row.justify-content-center
      .col-lg-10.mb-5
        p(data-aos="fade-left").mb-5 Esto quiere decir que Nodemon será instalado como una dependencia de desarrollo y no como dependencia general del proyecto. Por lo que se configura el archivo package.json según se muestra en la siguiente figura, y se inicia a ejecutar el servidor con la siguiente línea de comando:

        .row.justify-content-center(data-aos="zoom-in")
          .col-auto
            .bg--code_01
              p.mb-0 npm run dev

      .col-lg-9.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 6.
          span Estructura package.json.

        .bg--code(data-aos="zoom-in")
          p {
          p #[span.c0 "name"]: #[span.c3 "gestion-empleados"],
          p #[span.c0 "version"]: #[span.c3 "1.0.0"],
          p #[span.c0 "description"]: #[span.c3 " "],
          p #[span.c0 "main"]: #[span.c3 "index.js"],
          p #[span.c0 "scripts"]: {
          p #[span.c0 "dev"]: #[span.c3 "nodemon BackEnd/index.js"]
          p },
          p #[span.c0 "keywords"]: [ ],
          p #[span.c0 "author"]: #[span.c3 " "],
          p #[span.c0 "license"]: #[span.c3 "ISC"],
          p #[span.c0 "dependencies"]: {
          p.pd--1 #[span.c0 "cors"]: #[span.c3 "^2.8.5"],
          p.pd--1 #[span.c0 "express"]: #[span.c3 "^4.17.1"],
          p.pd--1 #[span.c0 "mongoose"]: #[span.c3 "^5.12.14"],
          p.pd--1 #[span.c0 "morgan"]: #[span.c3 "^1.10.0"]
          p  },
          p  #[span.c0 "devDependencies"]: {
          p.pd--1 #[span.c0 "nodemon"]: #[span.c3 "^2.0.7"]
          p.pd--1 }
          p }
        figcaption.mb-5 Nota. Código completo archivo package.json.

        p.text-center.mb-4 Puede descargar el contenido de estas instrucciones en el archivo #[strong package.json] disponible a continuación.

        .row.justify-content-center
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/package_json.zip')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-zip.svg")
              .anexo__texto
                p Anexo. Estructura package.json
    
      .col-lg-10(data-aos="fade-left")
        p.mb-5 Ahora, se construyen las Middleware dentro del archivo de index.js como se puede apreciar en la figura anterior, encargadas de procesar los datos, es decir, cuando se solicitan o envían al servidor. Al respecto, el servidor debe entender los datos que le llegan del cliente (AngularJS toma los datos del cliente y los envía en formato JSON) y es por eso que se necesita algún tipo de conversión, por lo que se requiere del uso del formato JSON ejecutando la siguiente instrucción:
        
        .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-auto
            .bg--code_02
              p.mb-0 app.use(express.json());

        .bg--mint.p-4(data-aos="zoom-in")
          .row.justify-content-center.align-item-center
            .col-lg-8 
              p.mb-4 Con el fin de observar la transacción de mensajes por consola se tiene una herramienta útil llamada #[em morgan], que ayuda a mirar en consola lo que el usuario está solicitando. Esta herramienta es opcional para el desarrollo de la aplicación, no obstante se deja la línea de comando para su instalación y utilización:

              .row.justify-content-center.mb-4
                .col-auto
                  .bg--code_01
                    p.text-center.mb-4 npm install morgan
                    p.text-center.mb-0 app.use(morgan('dev'));

            .col-lg-4.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_06.png", alt="alt")

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Configuración e instalación de la base de datos MongoDB

    p(data-aos="fade-left") A continuación, se realizará la conexión de la aplicación del servidor a la base de datos, por lo que se inicia a configurar y a instalar los recursos necesarios antes de iniciar a desarrollar. En ese sentido, se instala MongoDB de manera persistente en el equipo de desarrollo, para lo cual se deja información para su instalación en la sección material complementario de este documento. La siguiente figura representa de manera general el diagrama entidad-relación de una base de datos.

    .bg--full.img_02
      .row.justify-content-center
        .col-lg-8.mb-5
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 7.
            span Diagrama entidad-relación.

          figure.mb-5(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt")
            figcaption Nota. Esquema general diagrama entidad-relación base de datos. Pixabay (2016).

          p(data-aos="fade-left") En la siguiente figura se muestra la imagen que representa el inicio del proceso de instalación de MongoDB.

          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 8.
            span MongoDB.

          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_08.png", alt="alt")
            figcaption Nota. Panel de control MongoDB.

    .row.justify-content-center
      .col-lg-11
        .bg--mint.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left")
              p.mb-0 De igual manera, a nivel opcional se instala la extensión de MongoDB dentro del entorno de VS Code, permitiendo tener una integralidad para el desarrollo, estas herramientas facilitan la celeridad en el proceso de construcción de sistemas de #[em software]. Por lo tanto, en el material de apoyo se dejará información para acceder a la guía para la instalación de esta extensión, denominada extensión VS Code y MongoDB.  La siguiente figura muestra de qué manera se visualiza dicha extensión dentro del entorno de desarrollo.
            .col-lg-5(data-aos="zoom-in")
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 9.
                span Extensión MongoDB

              figure
                img(src="@/assets/curso/temas/t1/t1_09.png", alt="alt")
                figcaption Nota. Panel de control MongoDB.

        p(data-aos="fade-left").mb-5 Posteriormente, y con el fin de realizar la conexión a la base de datos y definir la estructura de los datos de la aplicación a desarrollar, o lo que técnicamente se conoce como esquemas, se instala la herramienta Mongoose con la siguiente línea de comando desde la terminal de VS Code:

        .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-auto
            .bg--code_02
              p.mb-0 npm install mongoose

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Configuración de database.js

    p(data-aos="fade-left") Con todas las herramientas necesarias para la conexión de la aplicación a la base de datos se empieza a desarrollar y a configurar sobre el archivo database.js. 

    .row.justify-content-center
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 10.
          span Estructura database.js.

        .bg--code(data-aos="zoom-in")
          p #[span.c0 const] #[span.c4 mongoose] = #[span.c2 require](#[span.c3 'mongoose']);
          p #[span.c0 const] #[span.c1 URI] = #[span.c3 'mongodb://localhost/empleados']; 
          p #[span.c4 mongoose].#[span.c2 connect](#[span.c1 URI])
          p.pd--1 #[span.c2 .then](#[span.c1 db] => #[span.c1 console]#[span.c2 .log](#[span.c3 'DB is connected']))
          p.pd--1 #[span.c2 .catch](#[span.c1 err] => #[span.c1 console].#[span.c2 error](#[span.c1 err]));  
          p #[span.c4 module].#[span.c4 exports] = #[span.c4 mongoose]; 
        figcaption.mb-5 Nota. Código completo archivo database.js.

        p.text-center Puede descargar el contenido de estas instrucciones en el archivo #[strong database.js] disponible a continuación.

        .row.justify-content-center
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/database_js.zip')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-zip.svg")
              .anexo__texto
                p Anexo. Estructura database.js.
      
      .col-lg-10
        .bg--blue.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t1/t1_10.png", alt="alt")
            .col-lg-8(data-aos="fade-left")
              p Con respecto al código del archivo database.js, allí se indica que es necesario que el módulo se conecte a MongoDB, por eso aparece Mongoose. Así, al llamarse al módulo se almacena en una constante, por otra parte, se define la dirección de la conexión de la base de datos en una constante denominada URI y, se utiliza una promesa para obtener la información de la base de datos y corroborar si hay conexión o no. 
              p.mb-0 Por ser un módulo que se utiliza en toda la aplicación se exporta. De esta forma la constante Mongoose devolverá la conexión.

        p(data-aos="fade-left").mb-5 De manera adicional se puede observar que en el archivo index.js, se invoca o llama el archivo database.js en el cual se especifica que lo que se requiere es la conexión. En este sentido, solo resta probar si la conexión está activa, por lo que se inicia el servidor con la línea de comando #[strong #[em npm run dev]], vista anteriormente. A continuación, se muestra en la figura el resultado de la terminal del VS Code:

        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 11.
            span Respuesta de la terminal.

          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_11.png", alt="alt")
            figcaption Nota. Respuesta conexión a base de datos funcionando.

    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Configuración de las rutas del proyecto con Node.js

    p(data-aos="fade-left").mb-4 El siguiente paso es configurar las rutas o URL por donde se van a enviar o recibir los datos, por lo que se crea un archivo llamado empleado.route.js dentro de la carpeta #[em routes]. En este primer apartado lo que se quiere es revisar en primera instancia es el funcionamiento de las rutas, por lo que a manera de prueba se tiene el código que se muestra en la siguiente figura:

    .bg--full.img_02.mb-5
      .row.justify-content-center
        .col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 12.
            span Estructura ejemplo empleado.route.js.
          
          .bg--code(data-aos="zoom-in")
            p #[span.c4 /**]
            p #[span.c4 * Vamos a crear rutas del servidor]
            p #[span.c4 * creamos un módulo por eso utilizamos express]
            p #[span.c4 * vamos a utilizar como nuestra rest api para]
            p #[span.c4 * enviar y recibir datos en formato json]
            p #[span.c4 */]
            p #[span.c0 const] #[span.c2 express] = #[span.c2 require](#[span.c3 'express']);
            p #[span.c0 const] #[span.c1 router] = #[span.c2 express.Router]();
            p #[span.c4 /* generamos un ejemplo cuando le soliciten]
            p #[span.c4 algo al servidor por el método GET **/]
            p #[span.c1 router].#[span.c2 get](#[span.c3 '/'], (#[span.c1 req], #[span.c1 res]) #[span.c0 =>] {                            
            p.pd--1 #[span.c1 res]#[span.c2 .json]({
            p.pd--2 #[span.c1 status:] #[span.c3 'API REST funcionando']
            p.pd--1 });
            p })  
            p #[span.c0 module.exports] = #[span.c0 router;]

          figcaption.mb-5 Nota. Código completo archivo empleado.route.js para comprobar el funcionamiento de las rutas.

          p.text-center.mb-4 Puede descargar el contenido de estas instrucciones en el archivo #[strong empleado.route.js] disponible a continuación.

          .row.justify-content-center
            .col-auto
              a.anexo.mb-4(:href="obtenerLink('/downloads/empleado_route_js.zip')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-zip.svg")
                .anexo__texto
                  p Anexo. Estructura empleado.route.js

        .col-lg-10
          .row.justify-content-center
            .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
              p De manera adicional se puede observar el archivo index.js, en el cual se establece la ruta por donde se van a recibir o enviar los datos desde el servidor que para el caso de estudio será http://localhost:3000/api/empleados, de tal forma se observa que para la definición de esta ruta se hace necesario requerir el archivo empleado.routes.js ejecutando la siguiente instrucción:

              .row.justify-content-center.mb-4(data-aos="zoom-in")
                .col-auto
                  .bg--code_02
                    p.mb-0 app.use('/api/empleados',require('./routes/empleado.routes'));

              p(data-aos="fade-left").mb-0 Al hacer el llamado en el servidor se vería de la siguiente manera:

            .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t1/t1_12.png", alt="alt")

    .row.justify-content-center.mb-5            
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 13.
          span Respuesta del servidor.
        
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t1/t1_13.png", alt="alt")
          figcaption Nota. Vista desde un navegador.

    p(data-aos="fade-left") Ya visto un ejemplo del funcionamiento de las rutas es necesario comprender su comportamiento, por lo que cada solicitud debe ir asociada a una ruta, y esta a su vez a un intercambio de información o de datos, es decir, de interacción con la BD. En ese sentido, es más que necesario la construcción del modelo empleado.js con datos específicos para los empleados dentro de la carpeta #[em models].

    .row.justify-content-center.mb-5            
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 14.
          span Estructura empleado.js. 
        
        .bg--code(data-aos="zoom-in")
          p #[span.c0 const] #[span.c4 mongoose] = #[span.c2 require](#[span.c3 'mongoose']);
          p.mb-5 #[span.c0 const] {#[span.c4 Schema]} = #[span.c4 mongoose];
          p #[span.c0 const] #[span.c1 EmpleadoSchema] = #[span.c0 new] #[span.c4 Schema]({
          p.pd--1 #[span.c1 name:] {#[span.c4 type:String], #[span.c1 require]:#[span.c0 true]},
          p.pd--1 #[span.c1 position]: {#[span.c4 type:String], #[span.c1 require]:#[span.c0 true]},
          p.pd--1 #[span.c1 office]: {#[span.c4 type:String], #[span.c1 require]:#[span.c0 true]},
          p.pd--1 #[span.c1 salary]: {#[span.c4 type:Number], #[span.c1 require]:#[span.c0 true]},
          p });
          p #[span.c4 module.exports] = #[span.c4 mongoose].#[span.c2 model](#[span.c3 'Empleado'], #[span.c0 EmpleadoSchema]);

        figcaption.mb-5 Nota. Código completo archivo empleado.js.

        p.text-center.mb-4 Puede descargar el contenido de estas instrucciones en el archivo #[strong empleado.js] disponible a continuación.

        .row.justify-content-center
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/empleado_js.zip')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-zip.svg")
              .anexo__texto
                p Anexo. Estructura empleado.js

      .col-lg-8(data-aos="zoom-in")
        .crd--avatarH
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_14.svg", alt="alt").img85
            .col
              p.mb-0 Se requiere Mongoose y se almacena en una constante denominada de la misma forma, que se utilizará para definir los esquemas de datos, para lo cual se empiezan a modelar con su información, nombre, cargo, entre otros. En ese sentido, Mongoose le dice a MongoDB cómo va a lucir la estructura de empleados.

    separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Desarrollo de controladores para la API REST

    p(data-aos="fade-left") Una de las mejores prácticas para estructurar una aplicación cuando va en crecimiento es el uso de los controladores. Estos se encargan de definir los métodos y acciones que necesitan las rutas. Por lo tanto, se crea el archivo empleado.controller.js dentro de la carpeta #[em controllers].

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 15.
          span Estructura controlador empleado

        .bg--code(data-aos="zoom-in")
          p #[span.c4 /**]
          p #[span.c4 * Se coloca el controlador como un objeto y luego se exporta como]
          p #[span.c4 * se requiere primero el modelo empleado]
          p.mb-5 #[span.c4 */]

          p #[span.c0 const] #[span.c1 Empleado] = #[span.c3 require](#[span.c3 '../models/empleado']);
          p.mb-5 #[span.c0 const] #[span.c1 empleadoCtrl] = {};
            
          p #[span.c4 /**]
          p #[span.c4 * DEFINO LOS MÉTODOS  */]
            
          p #[span.c4 //Obtener todos los empleados]
          p #[span.c1 empleadoCtrl].#[span.c2 getEmpleados] = #[span.c0 async] (#[span.c1 req, res]) => {
          p.pd--1 #[span.c0 const] #[span.c1 empleados] = #[span.c5 await] #[span.c1 Empleado].#[span.c2 find]();
          p.pd--1 #[span.c1 res].json(#[span.c0 empleados]);   
          p.mb-5 }                    
            
          p #[span.c4 // Crear empleados]
            
          p #[span.c0 empleadoCtrl].#[span.c2 createEmpleados] = #[span.c0 async] (#[span.c1 req, res]) => { 
          p.pd--1 #[span.c0 const] #[span.c1 empleado] = #[span.c0 new] #[span.c2 Empleado](#[span.c1 req.body]);
          p.pd--1 #[span.c5 await] #[span.c1 empleado].#[span.c2 save]();    
          p.pd--1 #[span.c1 res].#[span.c2 json]({
          p.pd--2 #[span.c3 'status']: #[span.c2 'Empleado guardado']
          p.pd--1 });
          p.mb-5 }

          p #[span.c4 //Conseguir un único empleado] 
          p #[span.c1 empleadoCtrl].#[span.c2 getUnicoEmpleado] = #[span.c0 async] (#[span.c1 req, res]) => {     
          p.pd--1 #[span.c0 const] #[span.c1 empleadoUnico] = #[span.c5 await] #[span.c1 Empleado].#[span.c2 findById](#[span.c1 req.params.id]); 
          p.pd--1 #[span.c1 res].#[span.c2 json](#[span.c0 empleadoUnico)];
          p.mb-5 }
            
          p #[span.c4 //Actualizar empleado]
          p #[span.c1 empleadoCtrl].#[span.c2 editarEmpleado] = #[span.c0 async] (#[span.c1 req, res]) =>  {
          p.pd--1 #[span.c0 const] { #[span.c1 id] } = req.params; 
          p.pd--1 #[span.c0 const]  #[span.c1 emepleadoEdit] = {  
          p.pd--2 name: req.body.name,
          p.pd--2 position: req.body.position,
          p.pd--2 office: req.body.office,
          p.pd--2 salary: req.body.salary
          p.pd--1 };
          p.pd--1 #[span.c5 await] #[span.c1 Empleado].#[span.c3 findByIdAndUpdate](#[span.c0 id], {#[span.c1 $set:] #[span.c0 emepleadoEdit]}, {#[span.c1 new:]  #[span.c0 true]}); 
          p.pd--1 #[span.c0 res].#[span.c3 json]({#[span.c0 status:] #[span.c3 'Empleado Actualizado']});
          p.mb-5 }

          p #[span.c4 // Eliminar empleado] 
          p #[span.c0 empleadoCtrl].#[span.c3 eliminarEmpleado] = #[span.c0 async] (#[span.c1 req, res]) => {
          p.pd--1 #[span.c5 await] #[span.c1 Empleado].#[span.c3 findByIdAndDelete](#[span.c1 req.params.id]);
          p.pd--1 #[span.c1 res].#[span.c3 json]({#[span.c1 status]: #[span.c3 'Empleado Eliminado']});
          p.mb-5 }
              
          p #[span.c4 //exporto el módulo]
          p #[span.c1 module.exports] = #[span.c1 empleadoCtrl;]
        
        figcaption.mb-5 Nota. Código completo archivo empleado.controller.js.

        p.text-center.mb-5 Puede descargar el contenido de estas instrucciones en el archivo #[strong empleado.controller.js] disponible a continuación.

        .row.justify-content-center
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/empleado_controller_js.zip')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-zip.svg")
              .anexo__texto
                p Anexo. Estructura empleado.controller.js

    p(data-aos="fade-left").mb-5 Se inicia explicando de manera sucinta el código presentado anteriormente. En primera instancia se requiere el modelo realizado denominado empleado.js, por lo cual se almacena en una constante Empleado. 

    .bg--mint.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_17.png", alt="alt")
        .col-lg-8
          p(data-aos="fade-left") Por otra parte, en cada uno de los métodos se utilizan funciones nativas y nuevas de JavaScript. En ese sentido, es necesario recordar que antes se utilizaban las funciones de tipo #[em callback], que existían como parámetros de los métodos, después aparecieron las promesas con la función #[em then], pero ahora existen funciones que están dedicadas a realizar de manera más eficiente el procesamiento de los datos y mejorar los tiempos de respuesta como lo son #[strong #[em async]] y #[strong #[em await]] que hacen parte de la última versión de JavaScript.

          p.mb-0 Para el método de #[strong obtener empleados] se utiliza la función #[em async], la cual entrega en formato json todo lo que encuentre de empleados. Por eso se utiliza la función await, porque se espera que se vaya a tardar un poco en esta actividad de buscar. En ese sentido, se utiliza uno de los métodos intrínsecos del modelo Empleado que para este caso es #[em find()].

    .row.mb-5(data-aos="fade-left")
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/recursos/square_00.svg", alt="alt").img85
      .col
        p.mb-0 Además, el método de crear empleado tiene una naturaleza similar al anterior, solo que en este método se crea una nueva instancia de empleado #[strong #[em new] Empleado]. De esta forma lo que seguiría es guardar ese nuevo registro con #[strong #[em save()]]. Es importante anotar que hasta el momento no se ha creado la base de datos en MongoDB, pero apenas se almacena un registro se crea la base de datos. 

    p(data-aos="fade-left") Para el método de editar empleado presenta una sintaxis interesante, en primer lugar se escribe de otra forma para capturar el id del usuario que se quiere actualizar { id }, además crea una constante #[strong empleadoEdit] para pasarle los datos traídos del cliente y finalmente se utiliza #[em await], para dar una espera en la acción de encontrar por id y actualizar a través de la función #[strong set], que se utilizará para modificar los datos en última instancia.    

    .row.justify-content-center
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 16.
          span Código de la ruta empleado. 

        .bg--code(data-aos="zoom-in")
          p #[span.c4 /**]
          p #[span.c4 *]
          p #[span.c4 * creamos un módulo por eso utilizamos express]
          p #[span.c4 */]

          p #[span.c0 const] #[span.c2 express] = #[span.c2 require](#[span.c3 'express']);
          p #[span.c0 const] #[span.c1 router] = #[span.c2 express.Router]();
          p.mb-5 #[span.c0 const] #[span.c1 empleadoCtrl] = #[span.c2 require](#[span.c3 '../controllers/empleado.controller']);
              
          p #[span.c1 router].#[span.c2 get](#[span.c3 '/'], #[span.c1 empleadoCtrl.getEmpleados]); #[span.c4 // Rutas más limpias (obtener empleados)]
          p #[span.c1 router].#[span.c2 post](#[span.c3 '/'], #[span.c1 empleadoCtrl.createEmpleados]);#[span.c4 //guardar]
          p #[span.c1 router].#[span.c2 get](#[span.c3 '/:id'], #[span.c1 empleadoCtrl.getUnicoEmpleado]);#[span.c4 // obtiene un único empleado]
          p #[span.c1 router].#[span.c2 put](#[span.c3 '/:id'],#[span.c1 empleadoCtrl.editarEmpleado]); #[span.c4 //Actualizar datos (uno a la vez)]
          p.mb-5 #[span.c1 router].#[span.c2 delete](#[span.c3 '/:id'], #[span.c1 empleadoCtrl.eliminarEmpleado]);
            
          p #[span.c1 module.exports] = #[span.c1 router];
        
        figcaption Nota. Código completo archivo empleados.routes.js.
      
      .col-lg-8(data-aos="fade-left")
        p.mb-5 Con respecto al código anterior se observa que se requiere el uso del controlador, por lo que se almacena en una constante llamada empleadoCtrl, y de esta forma se pueden utilizar todos los métodos de este, es decir, la gestión o CRUD sobre el empleado.

        .crd--avatarH(data-aos="zoom-in")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_15.svg", alt="alt").img85
            .col
              p.mb-0 En ese sentido, se observa que el objeto router llama a cada uno de los métodos por defecto de petición #[em HTTP] como #[em GET, POST, PUT,] entre otros, asociados a los métodos realizados con el controlador. De manera que se tienen rutas mucho más limpias y apoyadas con la buena práctica del uso del controlador. 		

    separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Realización de pruebas de la #[em API REST] con #[em Postman]

    p(data-aos="fade-left") Una vez finalizada la construcción tanto del modelo, controlador y rutas, se dispone a generar las pruebas respectivas para evaluar el funcionamiento de la API REST; por lo tanto, se utilizará la herramienta #[em Postman]. En la sección material complementario de este documento encontrará la guía para su instalación.

    p(data-aos="fade-left").mb-5 Se inicia insertando datos, por lo que utilizará el método POST, el cual llamará a la ruta para crear empleados.

    .bg--full.img_03
      .row.justify-content-center
        .col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 17.
            span Pruebas con #[em Postman].

          figure.mb-5(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_16.png", alt="alt")
            figcaption Nota. Parámetros y respuesta usando #[em Postman].

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11.mb-5
        .bg--blue.p-4
          .row.justify-content-center
            .col-xl-6.mb-4.mb-xl-0
              p(data-aos="fade-left") En la figura anterior se pueden apreciar los datos que se envían al servidor, dado que #[em Postman] permite realizar esa emulación del cliente. Los datos que se envían están acordes al esquema definido en el modelo de empleado.js, como lo son #[em name, position, office y salary]. La respuesta en consola, que se programa como #[em status] es que el Empleado ha sido guardado. 

              .cajon.cjn--mint.mb-4(data-aos="fade-left")
                p.mb-4 En este orden de ideas, es necesario revisar la base de datos y verificar que efectivamente se ha guardado la información y si realmente MongoDB la ha creado.
                p.mb-0 En la siguiente figura se presenta la imagen que representa la interfaz gráfica de MongoDB y el resultado de verificación de la creación de la base de datos.

              p(data-aos="fade-left").mb-0 La siguiente figura muestra el resultado de la verificación de un registro de empleado almacenado en MongoDB.

            .col-xl-6.col-8(data-aos="zoom-in")
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 18.
                span Panel MongoDB.

              figure
                img(src="@/assets/curso/temas/t1/t1_18.png", alt="alt")
              figcaption Nota. Panel de MongoDB que muestra la base de datos empleados creada.

          
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 19.
          span Registro de empleado almacenado en MongoDB.

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t1/t1_19.png", alt="alt")
          figcaption Nota. Verificación en MongoDB de información guardada.


    p(data-aos="fade-left").mb-5 Como es evidente la API REST funciona correctamente, se ha creado la base de datos empleado y se tiene almacenado el primer registro del empleado Santiago. De igual forma, se evidencia para los demás métodos  HTTP, GET, PUT o DELETE que también funcionan, por lo cual se realiza la invitación a probar el API con #[em Postman].

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_20.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Hasta este punto se ha realizado el desarrollo del #[em Backend], por lo que hasta el momento se tiene la base de datos lista para poder generar ahora la construcción del #[em Front-end], el cual será el que “dialogará” con el servidor. De esta forma se presenta a continuación una figura que ilustra la estructura general del proyecto.   

      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 20.
          span Resumen estructura del proyecto #[em web].

        figure.d-none.d-lg-flex(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t1/t1_21.png", alt="alt")       

        figure.d-flex.d-lg-none(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t1/t1_22.png", alt="alt")
          
        figcaption Nota. Esquema de comunicación #[em Backend] – #[em Front-end].




         

  


    


        


      
       
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
