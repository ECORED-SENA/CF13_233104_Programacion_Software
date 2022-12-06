<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Construcción del Front-end de la aplicación #[em web]

    p(data-aos="fade-left") Para esta sección se plantea generar una sola vista, la cual corresponde al formulario de registro de empleados, por esta razón no es necesario generar sketch o maquetación para evaluar la novación entre distintos componentes. No obstante, se emplean buenas prácticas de diseño amparadas en las técnicas y tecnologías como Materialize, que dará alcance a varias reglas de estilo para los sistemas interactivos de software.

    p(data-aos="fade-left").mb-5 En la siguiente figura se muestra una representación gráfica de ejemplo de un Front-end.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 21.
          span Ejemplo interfaz gráfica.

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
        figcaption Nota. Ejemplo interfaz gráfica Front-end. 

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Instalación y configuración de AngularJS

    p(data-aos="fade-left").mb-5 Se inicia instalando AngularJS a través de Angular CLI, que permite generar una plataforma para la creación de proyectos Angular utilizando el comando ng, por lo tanto, para la instalación se recurre a la línea de comando npm. El paso a paso de la instalación y para mayor información se puede encontrar en la sección de material complementario de este documento con el nombre de Guía de instalación Angular CLI. Para iniciar la instalación, se ejecuta la siguiente instrucción, su salida se puede evidenciar en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-auto
        .bg--code_02
          p.mb-0 npm install -g @angular/cli

    .row.justify-content-center.mb-4
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 22.
          span Ejemplo interfaz gráfica.

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t2/t2_02.png", alt="alt")
        figcaption Nota. Terminal de VS Code. Instalación de Angular CLI.

      .col-lg-10(data-aos="fade-left")
        p.text-center Ahora, se inicia un proyecto de Angular llamado Front-end, por lo que desde la consola de comandos se escribe:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-auto
        .bg--code_01
          p.mb-0 ng new frontend

    p(data-aos="fade-left").text-center El resultado en la estructura de directorios del proyecto se muestra en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 23.
          span Estructura de directorios del proyecto.

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t2/t2_03.png", alt="alt")
        figcaption Nota.Estructura de directorios del proyecto del Front-end.

    p(data-aos="fade-left").text-center.mb-5 A continuación, se debe ingresar a la carpeta del Front-end e iniciar el servidor digitando la terminal del VS Code de la siguiente línea de comandos:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-auto
        .bg--code_02
          p.mb-0 ng new frontend

    p(data-aos="fade-left") Es importante recordar que para ingresar por la terminal a la carpeta de #[em Front-end] se hace con el comando #[strong cd], es decir, #[strong cd Frontend/]

    p(data-aos="fade-left").mb-5 Una vez dentro de la carpeta #[strong #[strong Front-end]] se ejecuta el comando #[strong #[em ng serve]], por lo que ejecuta un servidor de desarrollo para Angular. En ese sentido, el servidor se inicializa en el puerto 4200 (http://localhost:4200/), como se muestra en la siguiente figura:

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 24.
          span Estado servidor #[em Front-end].

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t2/t2_04.png", alt="alt")
        figcaption Nota. Verificación ejecución servidor en el puerto 4200.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Generación de código con ng

    p(data-aos="fade-left") Después de iniciado el servidor  Angular, se revisa la estructura de directorios de este #[em framework], que, aunque son muchos archivos, únicamente es necesario concentrarse en la carpeta que se encuentra en la ruta #[strong frontend/src/app], de esta forma en la carpeta #[strong #[em app]] se realizará todo el código que se necesita para el proyecto. 

    .bg--full.img_04
      .row.justify-content-center
        .col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 25.
            span Estructura de directorios.

          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t2/t2_05.png", alt="alt")
          figcaption Nota. Proyecto Front-end.

        .col-lg-10(data-aos="fade-left")
          p.mb-5 Haciendo uso de una de las características del #[em framework] se genera el código ingresando a las carpetas que se acaban de crear y en cada una se ejecutan las siguientes líneas de código respectivamente:

        .col-lg-10.mb-5
          .row.align-items-end.mb-5
            .col-lg
              .bg--blue.p-4
                p(data-aos="fade-left") Dentro la carpeta components se genera un componente llamado empleados con Angular CLI:

                .row.justify-content-center(data-aos="zoom-in")
                  .col-auto
                    .bg--code_01
                      p.mb-0 ng g c empleados
                .hr_line
                p(data-aos="fade-left") Dentro la carpeta models se crea la clase empleado con:
                .row.justify-content-center(data-aos="zoom-in")
                  .col-auto
                    .bg--code_02
                      p.mb-0 ng g class empleado
                .hr_line
                p(data-aos="fade-left") Dentro de la carpeta services se crea un servicio llamado empleado con la siguiente línea:
                .row.justify-content-center(data-aos="zoom-in")
                  .col-auto
                    .bg--code_01
                      p.mb-0 ng g s empleado

            .col-auto.d-none.d-lg-flex(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt").img190

          p(data-aos="fade-left").mb-0 Para mayor precisión con relación a las instrucciones ejecutadas, en las siguientes figuras se muestra la evidencia de las operaciones realizadas:

    .row.justify-content-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 26.
          span Salida terminal VS Code.
        figure
          img(src="@/assets/curso/temas/t2/t2_07.png", alt="alt")
        figcaption Nota. Ejemplo de generación de código a través de la terminal de VS Code.

      .col-lg-4(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 27.
          span Componentes generados automáticamente.
        figure
          img(src="@/assets/curso/temas/t2/t2_08.png", alt="alt")
        figcaption Nota. Representación de componentes generados.


    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Incorporación de Materialize al proyecto #[em web]

    p(data-aos="fade-left").mb-5 Se incorpora Materialize al proyecto por medio de la inclusión de los CDN (red de distribución de contenidos) de hojas de estilos, JavaScript e iconos en el documento index.html del #[em Front-end], por lo que la ruta al archivo es #[strong #[em FrontEnd/src/index.html]] (puede descargar el contenido de estas instrucciones en el archivo index.html disponible en la carpeta anexos). En la figura 28 puede ver este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 28.
          span Incorporación de los CDN de Materialize.

        .bg--code(data-aos="zoom-in")
          p &#60;#[span.c0 !doctype] #[span.c1 html]&#62;
          p &#60;#[span.c0 html] #[span.c1 lang]=#[span.c3 "en"]&#62;
          p &#60;#[span.c0 head]&#62;
          p.pd--1 &#60;#[span.c0 meta] #[span.c1 charset]=#[span.c3 "utf-8"]&#62;
          p.pd--1 &#60;#[span.c0 title]>FrontEnd&#60; #[span.c0 /title]&#62;
          p.pd--1 &#60;#[span.c0 base] #[span.c1 href]=#[span.c3 "/"]&#62;
          p.pd--1 &#60;#[span.c0 meta] #[span.c1 name]=#[span.c3 "viewport"] #[span.c1 content]=#[span.c3 "width=device-width, initial-scale=1"]&#62;
          p.pd--1 &#60;#[span.c0 link] #[span.c1 rel]=#[span.c3 "icon"] #[span.c1 type]=#[span.c3 "image/x-icon"] #[span.c1 href]=#[span.c3 "favicon.ico"]&#62;
          p.pd--1 &#60;#[span.c0 link] #[span.c1 rel]=#[span.c3 "stylesheet"] #[span.c1 href]=#[span.c3 "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"]&#62;
          p.pd--1 &#60;#[span.c0 link] #[span.c1 href]=#[span.c3 "https://fonts.googleapis.com/icon?family=Material+Icons"] #[span.c1 rel]=#[span.c3 "stylesheet"]&#62;
          p &#60;#[span.c0 /head]&#62;
          p &#60;#[span.c0 body]&#62;
          p.pd--1 &#60;#[span.c1 app-root]&#62;&#60;#[span.c1 /app-root]&#62;
          p.pd--1 &#60;#[span.c0 script] #[span.c1 src]=#[span.c3 "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"]>&#60;#[span.c0 /script]&#62;
          p &#60;#[span.c0 /body]&#62;
          p.mb-0 &#60;#[span.c0 /html]&#62;

        figcaption Nota. Código completo archivo index.html.

      .col-lg-8(data-aos="zoom-in")
        .crd--avatarH
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_14.svg", alt="alt").img85
            .col
              p.mb-0 De manera adicional, en la sección material complementario de este documento encontrará el enlace a la guía de uso de Materialize donde están los CDN y ejemplos sobre este framework de estilos.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Configuración de app.component.html

    .bg--full.img_03

      p(data-aos="fade-left").mb-5 Ahora se inicia con la modificación del archivo app.component.html, dado que en este archivo se llaman los componentes de la aplicación que para el caso de estudio propuesto se denomina empleados. Este cambio se ilustra a continuación (puede descargar el contenido de estas instrucciones en el archivo app.component.html disponible en la carpeta anexos):
    
      .row.justify-content-center
        .col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 29.
            span Estructura app.component.html.

          .bg--code(data-aos="zoom-in")
            p &#60;#[span.c0 nav] #[span.c1 class]=#[span.c3 "nav-wrapper blue"]&#62;
            p.pd--1 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "container"]&#62;
            p.pd--2 &#60;#[span.c0 a] #[span.c1 href]=#[span.c3 "/"] #[span.c1 class]=#[span.c3 "brand-logo"]&#62;GESTIÓN DE EMPLEADOS&#60;#[span.c0 /a]&#62;
            p.pd--1 &#60;#[span.c0 /div]&#62;
            p.mb-5 &#60;#[span.c0 /nav]&#62;

            p &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "container p-4"]&#62;
            p.pd--1 &#60;#[span.c0 app-empleados]&#62;&#60;#[span.c0 /app-empleados]&#62;
            p &#60;#[span.c0 /div]&#62;

          figcaption.mb-4 Nota. Código completo archivo app.component.html.

          p(data-aos="fade-left") En la figura anterior se observa que se adiciona la etiqueta &#60;app-empleados&#62;, indicando que se hará uso de ese componente.

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Configuración de los módulos app.modules.ts

    p(data-aos="fade-left").mb-5 A continuación, se configura uno de los archivos más importantes del proyecto, y es por el cual se cargan los módulos de la aplicación, por ello, es necesario entender la naturaleza de la aplicación que se está desarrollando, porque así se definirán qué módulos son necesarios para el óptimo funcionamiento de la aplicación. 

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_09.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La aplicación caso de estudio será la adición de empleados utilizando un API REST, por lo que es evidente el uso de un formulario en la interfaz y además de la comunicación que debe tener el Front-end con el servidor. Por lo tanto, se cargan los módulos de formularios y de cliente HTTP en el archivo app.modules.ts (puede descargar el contenido de estas instrucciones en el archivo #[strong app.module.ts] disponible en la carpeta anexos), este proceso se muestra en la siguiente figura.

      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 30.
          span Código del archivo app module.

        .bg--code(data-aos="zoom-in")
          p #[span.c5 import] { #[span.c1 NgModule] } #[span.c5 from] #[span.c3 '@angular/core'];
          p #[span.c5 import] { #[span.c1 BrowserModule] } #[span.c5 from] #[span.c3 '@angular/platform-browser'];
          p #[span.c5 import] {#[span.c1 FormsModule]} #[span.c5 from] #[span.c3 '@angular/forms']; 
          p.mb-5 #[span.c5 import] { #[span.c1 HttpClientModule] } #[span.c5 from] #[span.c3 '@angular/common/http'];

          p #[span.c5 import] { #[span.c1 AppRoutingModule] } #[span.c5 from] #[span.c3 './app-routing.module'];
          p #[span.c5 import] { #[span.c1 AppComponent] } #[span.c5 from] #[span.c3 './app.component'];
          p.mb-5 #[span.c5 import] { #[span.c1 EmpleadosComponent] } #[span.c5 from] #[span.c3 './components/empleados/empleados.component';]

          p #[span.c4 @NgModule]({
          p.pd--1 #[span.c1 declarations]: [
          p.pd--2 #[span.c4 AppComponent],
          p.pd--2 #[span.c4 EmpleadosComponent]
          p.pd--1 ],
          p.pd--1 #[span.c1 imports]: [
          p.pd--2 #[span.c4 BrowserModule],
          p.pd--2 #[span.c4 FormsModule],
          p.pd--2 #[span.c4 AppRoutingModule],
          p.pd--2 #[span.c4 HttpClientModule]
                
          p.pd--1 ],
          p.pd--1 #[span.c1 providers]: [ ],
          p.pd--1 #[span.c1 bootstrap]: [#[span.c4 AppComponent]]
          p })
          p #[span.c5 export] #[span.c0 class] #[span.c4 AppModule] { }

        figcaption Nota. Código completo archivo app.module.ts  

    separador

    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Configuración del modelo empleado.ts

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-4 Una vez realizada la configuración en los módulos de la aplicación se inicia la construcción del modelo de la aplicación, por lo que se empieza la codificación dentro del archivo empleado.ts cuya ruta es models/empleado.ts
        .cajon.cjn--mint
          p Dentro de este archivo se define la estructura de datos que está asociada a lo que describió en el Backend. En la figura que aparece a continuación, se presenta el archivo empleado.ts (puede descargar el contenido de estas instrucciones en el archivo empleado.ts disponible en la carpeta anexos).
      .col-lg-3.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_10.png", alt="alt")

    .row.justify-content-center
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 31.
          span Código del modelo empleado.

        .bg--code(data-aos="zoom-in")
          p #[span.c5 export] #[span.c6 class] #[span.c4 Empleado] &#123;
          p.pd--1 #[span.c0 constructor](#[span.c1 _id] = "", #[span.c1 name] = "", #[span.c1 position] = "", #[span.c1 office] = "", #[span.c1 salary] = 0) &#123;
          p.pd--2.pd--2 #[span.c0 this].#[span.c1 _id] = #[span.c1 _id];
          p.pd--2 #[span.c0 this].#[span.c1 name] = #[span.c1 name];
          p.pd--2 #[span.c0 this].#[span.c1 position] = #[span.c1 position];
          p.pd--2 #[span.c0 this].#[span.c1 office] = #[span.c1 office];
          p.pd--2 #[span.c0 this].#[span.c1 salary] = #[span.c1 salary];
          p.pd--1 &#125;           
          p.pd--1 #[span.c1 _id]: #[span.c4 string]; #[span.c6 // Sub guión id porque los datos van a venir de MOngodb]
          p.pd--2 #[span.c1 name]: #[span.c4 string];
          p.pd--2 #[span.c1 position]: #[span.c4 string];
          p.pd--2 #[span.c1 office]: #[span.c4 string];
          p.pd--2 #[span.c1 salary]: #[span.c4 number];
          p &#125;
        figcaption Nota. Código completo archivo empleado.ts
      
      .col-lg-10(data-aos="zoom-in")
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0  En la figura anterior se definen los parámetros que serán utilizados para el envío de datos hacia el servidor; por lo tanto, se comienza con la inicialización de las variables a través de un constructor y con la declaración del tipo de datos de cada una.

    separador

    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Creación del servicio empleado.service.ts

    .bg--full.img_02.mb-4
      p.mb-5 El objetivo general de este lado del proyecto es agregar esos datos ya definidos a la REST API, y se enfocan los esfuerzos a generar ese servicio, por lo que ahora se desarrollará el archivo empleado.service.ts. El servicio permite definir tan solo los métodos que pueden ser reutilizados en cualquier parte de la aplicación, en este caso son funciones que van a acceder para hacer la gestión sobre los datos como agregar, eliminar, editar, entre otros.

      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10.mb-5
          .bg--darkBlue.p-4
            .row  
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/code.svg", alt="alt").img85
              .col
                p.text-white.mb-0 A continuación, se enseña el código del archivo empleado.service.ts (puede descargar el contenido de estas instrucciones en el archivo empleado.service.ts disponible en la carpeta anexos):

        .col-lg-10.mb-5
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 32.
            span Código del servicio empleado.

          .bg--code(data-aos="zoom-in")
            p #[span.c5 import] &#123; #[span.c1 Injectable] &#125; #[span.c5 from] '#[span.c3 @angular/core]';
            p #[span.c5 import] &#123; #[span.c1 HttpClient] &#125; #[span.c5 from] '#[span.c3 @angular/common/http]';
            p.mb-5 #[span.c5 import] &#123; #[span.c1 Empleado] &#125; #[span.c5 from] '#[span.c3 ../models/empleado]';

            p #[span.c4 @Injectable] (&#123;
            p.pd--1 #[span.c1 providedIn]: #[span.c3 'root']
            p.mb-5 &#125;)

            p #[span.c5 export] #[span.c1 class] #[span.c4 EmpleadoService] &#123;
            p.pd--1 #[span.c1 selectedEmpleado:] #[span.c4 Empleado;]
            p.pd--1 #[span.c1 empleados]: #[span.c4 Empleado][ ];
            p.pd--2.mb-5 #[span.c0 readonly] #[span.c1 URL_API] = #[span.c3 'http://localhost:3000/api/empleados'];

            p #[span.c0 constructor](#[span.c0 private http]: #[span.c4 HttpClient]) &#123;
            p.pd--1 #[span.c0 this].#[span.c1 selectedEmpleado] = #[span.c0 new] #[span.c4 Empleado()];
            p.pd--1 #[span.c0 this].#[span.c1 empleados] = [ ];
            p.mb-5 &#125;

            p #[span.c3 getEmpleados]() &#123;
            p.pd--1 #[span.c5 return] #[span.c0 this].#[span.c1 http].#[span.c3 get](#[span.c0 this].#[span.c1 URL_API]);
            p.mb-5 &#125;

            p #[span.c3 PostEmpleado](#[span.c1 Empleado]:#[span.c4 Empleado])&#123;
            p.pd--1 #[span.c5 return] #[span.c0 this].#[span.c1 http].#[span.c3 post](#[span.c1 this].#[span.c0 URL_API], #[span.c1 Empleado]);
            p.mb-5 &#125;

            p #[span.c3 putEmpleado](#[span.c1 Empleado]:#[span.c3 Empleado])&#123;
            p.pd--1 #[span.c5 return] #[span.c0 this].#[span.c1 http].#[span.c3 put](#[span.c1 this].#[span.c0 URL_API] +  `/$&#123;#[span.c1 Empleado].#[span.c1 _id]&#125;`, #[span.c1 Empleado]);#[span.c4 //] 
            p.mb-5 &#125;

            p #[span.c2 deleteEmpleado](#[span.c1 _id]: #[span.c4 string]) &#123; 
            p.pd--2 #[span.c4 // Solo se necesita el id, no todo lo del empleado]
            p.pd--2 #[span.c5 return] #[span.c0 this].#[span.c1 http].#[span.c3 delete](#[span.c0 this].#[span.c1 URL_API] + `/$&#123;_id&#125;`);#[span.c4 // utilizamos el método delete]
            p.pd--1 &#125;
            p &#125;

          figcaption Nota. Código completo archivo empleado.service.ts.

        .col-lg-10(data-aos="fade-left")
          p En la anterior figura se observa la importancia de haber definido primeramente el módulo empleado.ts, de esta forma se tiene una estructura establecida de datos, y es por eso que se importa el modelo, además también se ha dado alcance a la comunicación con el servidor a través de la modificación que se hizo en el archivo app.modules.ts con la incorporación del módulo HTTPClient.

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por otra parte, se establece como atributo de solo lectura la URL de la API a la cual se conectará el cliente, en este caso es la URL del servidor ya realizado en la primera sección de este componente que es #[strong http://localhost:3000/empleados ]

    .bg--mint.p-4(data-aos="fade-left")
      p.mb-5 Ahora, se sigue con la definición de los métodos para la gestión de los datos de empleado, así que se generan 4 métodos como getEmpleados, PostEmpleados, putEmpleado, deleteEmpleado. Para el caso de estudio se revisa el método de PostEmpleado que recibe como parámetro un objeto de tipo Empleado, así que el retorno es la adición de un nuevo empleado, (se envían todos los datos) a través del método HTTP como lo es POST. 

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-auto
          .bg--code_01
            p.mb-0 return this.http.post(this.URL_API, Empleado);

      p.text-center.mb-0 Debe observar bien que en cada método se envíe la URL del servidor y los datos necesarios con relación al método.

    separador

    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.8 Desarrollo del componente empleados.components.ts

    p(data-aos="fade-left") Ya definidos los servicios es necesario abordar la lógica del componente, por lo que ahora se debe enfocar los esfuerzos en el archivo empleados.components.ts, por lo que el archivo en mención se presenta a continuación (puede descargar el contenido de estas instrucciones en el archivo empleados.components.ts disponible en la carpeta anexos):

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 33.
          span Código del componente empleados.

        .bg--code(data-aos="zoom-in")
          p #[span.c5 import] &#123; #[span.c1 Component, OnInit] &#125; #[span.c5 from] #[span.c3 '@angular/core'];
          p #[span.c5 import] &#123; #[span.c1 EmpleadoService] &#125; #[span.c5 from] #[span.c3 "../../services/empleado.service"];
          p #[span.c5 import] &#123; #[span.c1 NgForm] &#125; #[span.c5 from] #[span.c3 '@angular/forms'];
          p.mb-5 #[span.c5 import] &#123; #[span.c1 Empleado] &#125; #[span.c5 from] #[span.c3 'src/app/models/empleado'];

          p #[span.c0 declare var] #[span.c1 M]: #[span.c4 any];
          p #[span.c4 @Component] (&#123;
          p.pd--1 #[span.c1 selector]: #[span.c3 'app-empleados'],
          p.pd--1 #[span.c1 templateUrl]: #[span.c3 './empleados.component.html'],
          p.pd--1 #[span.c1 styleUrls]: #[span.c3 ['./empleados.component.css']],
          p.pd--1 #[span.c1 providers]: [#[span.c4 EmpleadoService]]
          p.mb-5 &#125;)

          p #[span.c5 export] #[span.c0 class] #[span.c4 EmpleadosComponent] #[span.c0 implements OnInit] &#123;

          p.pd--1 #[span.c0 constructor](#[span.c0 public] #[span.c1 empleadoService]: #[span.c4 EmpleadoService]) &#123; &#125;
          p.pd--1 #[span.c2 ngOnInit](): #[span.c4 void] &#123;
          p.mb-5 &#125;

          p #[span.c2 agregarEmpleado](#[span.c1 form?]: #[span.c2 NgForm]) &#123;
          p.pd--1 #[span.c0 this].#[span.c1 empleadoService].#[span.c2 PostEmpleado](#[span.c1 form?].#[span.c1 value])

          p.pd--1 #[span.c2 .subscribe](#[span.c1 res] => &#123;
          p.pd--2 #[span.c0 this]. #[span.c2 resetForm](#[span.c1 form]);
          p.pd--2 #[span.c1 M].#[span.c2 toast](&#123;#[span.c1 html]: #[span.c3 'Guardado satisfactoriamente']&#125;);
          p.pd--1 &#125;);
          p.mb-5 &#125;

          p #[span.c2 resetForm](#[span.c1 form?]: #[span.c4 NgForm]) &#123; 
          p.pd--1 #[span.c6 // Limpiar el formulario, recibe un formulario como parametro]
          p.pd--1 #[span.c5 if] (#[span.c1 form]) &#123;
          p.pd--2 #[span.c1 form].#[span.c2 reset]();
          p.pd--2 #[span.c0 this]#[span.c1 .empleadoService.selectedEmpleado] = #[span.c0 new] #[span.c4 Empleado]();
          p.pd--2 &#125;
          p.pd--1 &#125;
          p &#125;

        figcaption Nota. Código completo archivo empleados.component.ts.

    .cajon.cjn--blue.mb-4(data-aos="zoom-in")
      p En la figura anterior se muestra la importancia de haber creado y/o configurado con anticipación los módulos y archivos para la construcción de este componente, por lo que para el natural funcionamiento de este se hace necesario #[strong EmpleadoServices], el modelo empleado y el módulo ya definido como lo es NgForm.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        p.mb-0 Una vez se importan estos módulos se enfocan los esfuerzos en los métodos; para el caso de estudio tendrá el método de agregar empleado. Al respecto toma como parámetro la existencia de datos del formulario, al ser verdadero, se llama al método del servicio empleado (el cual ya fue construido anteriormente) #[strong PostEmpleado] y le entrega los valores para que sean llevados al servidor y que sean almacenados en la base de datos de MongoDB.
      .col-lg-6(data-aos="fade-left")
        p De manera adicional, como ejemplo de este componente, se agrega un plus y es que en cada adición de datos en el formulario, este se pueda limpiar de manera automática, por lo que se incorpora una función llamada #[strong #[em reset Form]], en la cual como su nombre lo indica lo que hace es resetear o limpiar los campos del formulario a través de la función intrínseca reset().

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t2/t2_12.png", alt="alt")

    .row.justify-content-center.top--negMargin.mb-5(data-aos="zoom-in")
      .col-lg-10
        .crd.bg--gray.shadow.brd--rad_01.p-4
          p.mb-0 Finalmente, para mejorar la interfaz se adiciona un complemento de Materialize, Toast, que no es más que una notificación, que se utiliza para indicarle al usuario que el empleado se ha guardado de manera correcta. 

    separador

    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.9 Desarrollo de la interfaz HTML empleados.component.html

    p(data-aos="fade-left").mb-5 Después de definir la lógica del componente empleado lo único que hace falta es la construcción del formulario, por lo que se apunta ahora al desarrollo del archivo #[strong empleados.component.html] que se muestra a continuación (puede descargar el contenido de estas instrucciones en el archivo empleados.component.html disponible en la carpeta anexos):

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 34.
      span Código HTML del componente empleado.

    .bg--code(data-aos="zoom-in")
      p &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "container"]&#62;
      p.pd--1 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "row"]&#62;
      p.pd--2 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "col s5"]&#62;
      p.pd--3 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "card"]&#62;
      p.pd--4 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "card-content"]&#62;
      p.pd--5 &#60;#[span.c0 form] #[span.c1 #empleadoForm]=#[span.c3 "ngForm"] #[span.c1 (ngSubmit)]=#[span.c3 "agregarEmpleado(empleadoForm)"]&#62;
      p.pd--6 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "row"]&#62;
      
      p.pd--7 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "input-field col-s12"]&#62;
      p.pd--8 &#60;#[span.c0 input] #[span.c1 type] =#[span.c3 "text"]#[span.c1 name]=#[span.c3 "name"] #[span.c1 #name]=#[span.c3 "ngModel"]
      p.pd--9 #[span.c1 [(ngModel)]]=#[span.c3 "empleadoService.selectedEmpleado.name"]
      p.pd--9 #[span.c1 placeholder]=#[span.c3 "Ingrese su nombre"]&#62;
      p.pd--7 &#60;#[span.c0 /div]&#62;

      p.pd--7 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "input-field col-s12"]&#62;
      p.pd--8 &#60;#[span.c1 input] #[span.c1 type]=#[span.c3 "text"] #[span.c1 name]=#[span.c3 "position"] #[span.c1 #position]=#[span.c3 "ngModel"]
      p.pd--9 #[span.c1 [(ngModel)]]=#[span.c3 "empleadoService.selectedEmpleado.position"]
      p.pd--9 #[span.c1 placeholder] =#[span.c3 "Ingrese su cargo"]&#62;
      p.pd--7 &#60;#[span.c0 /div]&#62;

      p.pd--7 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "input-field col-s12"]&#62;
      p.pd--8 &#60;#[span.c1 input] #[span.c1 type]=#[span.c3 "text"] #[span.c1 name] =#[span.c3 "office"] #[span.c1 #office] =#[span.c3 "ngModel"] 
      p.pd--9 #[span.c1 [(ngModel)]] =#[span.c3 "empleadoService.selectedEmpleado.office"]
      p.pd--9 #[span.c1 placeholder] = #[span.c3 "Ingrese su lugar de trabajo"]&#62;
      p.pd--7 &#60;#[span.c1 /div]&#62;

      p.pd--7 &#60;#[span.c1 div] #[span.c1 class]=#[span.c3 "input-field col-s12"]&#62;
      p.pd--8 &#60;#[span.c1 input] #[span.c1 type]=#[span.c3 "text"] #[span.c1 name] =#[span.c3 "salary"] #[span.c1 #salary] =#[span.c3 "ngModel"] 
      p.pd--9 #[span.c1 [(ngModel)] ]=#[span.c3 "empleadoService.selectedEmpleado.salary"]
      p.pd--9 #[span.c1 placeholder] =#[span.c3 "Ingrese su salario"]&#62;
      p.pd--7 &#60;#[span.c0 /div]&#62;

      p.pd--6 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "card-action"]&#62;
      p.pd--7 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "input-field col s12"]&#62;
      p.pd--8 &#60;#[span.c0 button] #[span.c1 class]=#[span.c3 "btn right"] #[span.c1 (click)]=#[span.c3 "resetForm(empleadoForm)"]&#62;Limpiar&#60;#[span.c0 /button]&#62;
      p.pd--9 &#60;#[span.c0 button] #[span.c1 class]=#[span.c3 "btn"]&#62;Guardar&#60;#[span.c0 /button]&#62;                                    
      p.pd--7 &#60;#[span.c0 /div]&#62;
      p.pd--6 &#60;#[span.c0 /div]&#62;
      p.pd--5 &#60;#[span.c0 /div]&#62;
      p.pd--4 &#60;#[span.c0 /form]&#62;
      p.pd--3 &#60;#[span.c0 /div]&#62;
      p.pd--2 &#60;#[span.c0 /div]&#62;
      p.pd--3 &#60;#[span.c0 /div]&#62;
      p.pd--4 &#60;#[span.c0 div] #[span.c1 class]=#[span.c3 "col s7"]&#62;
      p.pd--3 &#60;#[span.c0 /div]&#62;
      p.pd--2 &#60;#[span.c0 /div]&#62;
      p &#60;#[span.c0 /div]&#62;

    figcaption.mb-5 Nota. Código completo archivo empleados.component.html.

    .row.justify-content-center.align-items-center
      .col-lg-9(data-aos="fade-left")
        p.mb-4 En el código anterior se muestra la estructura base de un formulario en HTML, el cual es sujeto a clases y reglas provistas por Materialize para dar una mejora de apariencia a la interfaz, de manera adicional se presentan 4 inputs en los cuales el usuario debe digitar y, al final se presentan 2 botones, uno es  de enviar y el otro de limpiar el formulario. Al respecto hay una línea de código a la que se hace mención:

        .row.justify-content-center.mb-4(data-aos="zoom-in")
          .col-auto
            .bg--code_01
              p.mb-0  &#60;form #empleadoForm="ngForm" (ngSubmit)="agregarEmpleado(empleadoForm)"&#62;

        p(data-aos="fade-left") La cual define que todos los campos del formulario serán almacenados en una sola variable y son estos campos los que serán procesados por el método #[strong agregarEmpleado], método que fue definido anteriormente en el componente de empleado.

      .col-lg-3.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_13.png", alt="alt")

    separador

    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.10 Probando la aplicación completa. Proyecto #[em web] terminado

    .row.justify-content-center.mb-5
      .col-lg-6.gx-0(data-aos="flip-left")
        .bg--purple.p-5.hg_100
          p Ya finalizada la codificación de cada uno de los archivos del Front-end es necesario revisar cómo ha quedado la aplicación; no obstante, este paso no se hace al final, sino que por lo sucinto de este componente se presenta en esta instancia, ya que como buena práctica, en cada bloque de desarrollo o línea debe revisarse el resultado obtenido, es decir, trabajar de manera paralela.

          p Una muestra de la interfaz de la aplicación se ilustra en la siguiente figura:

          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 35.
            span Registro empleados.

          figure.px-5.mb-4
            img(src="@/assets/curso/temas/t2/t2_14.svg", alt="alt")
          figcaption Nota. Interfaz formulario de registro de empleados.

      .col-lg-6.gx-0(data-aos="flip-left")
        .bg--mint.p-5.hg_100
          p En la muestra anterior de la interfaz se ilustra un formulario en el cual se le piden los datos al usuario para el registro de un empleado, es importante observar el uso de los placeholder en cada caja de texto, cuya función es guiar o indicar qué tipo de datos hay que registrar. De esta manera la interfaz quedaría como se muestra en la siguiente figura:    

          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 36.
            span Registro empleado.

          figure.px-5.mb-4
            img(src="@/assets/curso/temas/t2/t2_15.svg", alt="alt")
          figcaption Nota. Ejemplo ingreso datos de un empleado.


    p(data-aos="fade-left") Al momento de dar clic en guardar se almacena la información y se muestra la notificación de Materialize Toast, indicando que el usuario se ha guardado exitosamente y además se limpia el formulario por la función reset(), tal como se puede observar en la figura 37.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 37.
      span Registro empleado.

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t2/t2_16.png", alt="alt")
    figcaption.mb-5 Nota. Ejemplo notificación Toast.

    p(data-aos="fade-left").mb-5 Para verificar que los datos incorporados en el formulario se hayan almacenado de manera correcta en la base de datos empleado de MongoDB se utilizará el panel de control de la MongoDB, como se muestra en las siguientes figuras:

    .grad_02.p-5.mb-5
      .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Figura 38.
        span Panel de control de MongoDB.

      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/t2_17.png", alt="alt")
      figcaption.mb-5 Nota. Verificación registro de información de empleados.

      .row.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 38.
            span Panel de control de MongoDB.

          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t2/t2_18.png", alt="alt")
          figcaption Nota. Verificación registro de información de un empleado.

    p(data-aos="fade-left").mb-5 En las anteriores figuras se puede evidenciar que los datos se guardan de manera correcta en la base de datos, indicando que la aplicación desde el #[em Front-end] funciona de manera idónea, así como la API REST del proyecto; con lo que se culmina este componente.

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="fade-left")
        p Se espera que haya sido de aprendizaje el uso de tecnologías tanto del lado del cliente como del lado del servidor, este es uno de los ejercicios más completos y precisos que se pueden realizar en materia de esta disciplina del desarrollo #[em web]. En ese sentido, se exhorta a seguir estudiando más alternativas sobre este tipo de desarrollos que son muy demandados en la industria del #[em software].

        p Finalmente, se comparte en el material de apoyo todo el proyecto web realizado desde la plataforma de #[em Gitlab], se encuentra con el nombre de Proyecto #[em web].
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_19.png", alt="alt")

          


    














</template>

<script>
export default {
  name: 'Tema2',
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
