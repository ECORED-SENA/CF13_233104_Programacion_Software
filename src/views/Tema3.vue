<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Paradigmas, estándares y costos asociados al desarrollo de #[em software]

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        p.mb-4 Los paradigmas de desarrollo permiten mejorar el proceso de construcción de #[em software] y las metodologías de ingeniería de #[em software] sirven de base para la ejecución de cualquier proyecto de desarrollo.

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t3/t3_01.png", alt="alt")

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstm_h3
          h3 Lenguajes de programación

    p(data-aos="fade-left").mb-5 Existen diversos lenguajes de programación que permiten dar una serie de instrucciones para definir sentencias con miras a  controlar un sistema de información. A continuación, se presentan los lenguajes de programación más comunes para el desarrollo de #[em software]:

    .crd.bg_slider_01.brd--rad_02.px-4.py-2.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative            
            h4 Java
            p Considerado como uno de los lenguajes de programación más populares y aún sigue siendo el lenguaje de programación líder, es el lenguaje nativo de Android, plataforma más utilizada a nivel mundial.

            p.mb-0 Su principal característica es su gran portabilidad y se logra ejecutar en cualquier sistema, además, es muy escalable. Es un lenguaje estático, por eso lo hace rápido y fácil de mantener, resulta tener pocos errores. 
       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_02.png', alt='').img300.m-auto

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative            
            h4 Python
            p.mb-0 Es considerado un lenguaje de programación de alto nivel que se utiliza para desarrollar todo tipo de aplicaciones. Se utiliza también en la creación de aplicaciones #[em web], análisis de datos y algoritmos. Tiene sintaxis fácil de utilizar, centrado en la legibilidad y simplicidad del código, por eso es ideal para desarrolladores, y se enfoca también en la carrera artificial, big data, robótica o ciberseguridad.
       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_03.png', alt='').img300.m-auto

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative            
            h4 C#
            p.mb-0 Considerado uno de los lenguajes de programación más populares y antiguos, debido a su gran portabilidad y aceptación por los grandes de la tecnología como Apple o Microsoft. Tiene características similares a Java, es muy efectivo para usar aplicaciones de escritorio y juegos de Windows, esto lo hace muy referente. De igual forma, se pueden desarrollar aplicaciones #[em web] y móviles. 
       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_04.png', alt='').img300.m-auto
              
        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative            
            h4 Kotlin
            p.mb-0 Este lenguaje de programación fue reconocido por Google en el año 2019. Está muy referenciado con las aplicaciones para Android. No es un lenguaje de fácil manejo, es recomendable empezar por Java antes de iniciar con Kotlin.
       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_05.png', alt='').img300.m-auto

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative            
            h4 JavaScript
            p Lenguaje muy utilizado en el desarrollo #[em web], agregando interactividad al sitio, ofreciéndole animación y vida a los botones, juegos, animaciones y formularios. A nivel mundial existen muchos sitios #[em web] en los cuales el 95% de ellos contienen lenguaje JavaScript, por lo que se referencia como un lenguaje muy grande e importante.
            p.mb-0 Es considerado versátil y muy fácil de aprender, con muy buena flexibilidad.
       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_06.png', alt='').img300.m-auto

        .row.justify-content-center.align-items-center.pt-5
          .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative            
            h4 TypeScript
            p Aparece como una solución a muchos problemas de JavaScript, direccionado hacia la facilidad para el desarrollo de aplicaciones robustas, implementa unas características para desarrollar herramientas avanzadas. TypeScript expone una escritura estática y JavaScript es un lenguaje dinámico. Además, dispone de interfaz y se debe compilar el código, en cambio JavaScript no necesita interfaz y no es necesario compilarlo. 
       
          .col-lg-4.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_07.png', alt='').img300.m-auto

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstm_h3
          h3 Paradigmas de programación

    .bg--full.img_05.mb-5
      p(data-aos="fade-left") Hace referencia a los principios fundamentales para la creación del #[em software]; es decir, los diferentes estilos de programación o generación de código para direccionar a las máquinas y demás dispositivos tecnológicos.

      .row.justify-content-center.mb-5
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/t3_08.png', alt='')
            .col-lg-8(data-aos="fade-left")
              p Las aplicaciones #[em software] tratan de resolver las necesidades, ofreciendo a los usuarios diferentes tareas, operaciones o trabajos determinados en los que es necesario intervenir este tipo de problemas de diferentes maneras, recurriendo a la forma más eficiente en un paradigma de programación y dependiendo de su complejidad.

              p.mb-0 El paradigma de programación es un camino o guía para agilizar el desarrollo #[em web] siguiendo con las reglas y estructuras determinadas para la aplicación.

      .row.mb-4(data-aos="fade-right")
        .col-auto
          .cstm_h3
            h3 Tipos de paradigma de programación

      p(data-aos="fade-left").mb-4 Los paradigmas de programación son diferentes y se orientan hacia distintos tipos de programación como son:

      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10.col-md-8
          figure.d-none.d-lg-flex
            img(src='@/assets/curso/temas/t3/t3_09.svg', alt='')
          figure.d-lg-none.d-flex
            img(src='@/assets/curso/temas/t3/t3_10.svg', alt='')

      .row.mb-4(data-aos="fade-right")
        .col-auto
          .cstm_h3
            h3 Editores de código

      p(data-aos="fade-left").mb-4 Existen muchas opciones para escoger el mejor editor de código como desarrollador #[em web], los desarrolladores siempre buscan aumentar la suficiencia, productividad y rendimiento de la aplicación o el programa que se esté programando.

      .bg--darkBlue_02.p-4(data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg
            p.text-white De igual forma, los mejores desarrolladores #[em web] buscan ser eficientes y tener buen rendimiento en su código, deben estar basados en un buen editor de texto, conociéndolo a fondo y sabiendo interpretarlo. 

            p.text-white.mb-0 Ahora, se expone un poco al respecto:
          .col-auto
            figure
              img(src="@/assets/curso/temas/t3/t3_11.svg", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-center(titulo="Froala")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_12.png', alt='')
               
            .col-lg             
              p Es un editor HTML Wysiwyg de próxima generación, es de muy buena integración y con un diseño limpio. Contiene editor de texto JS de alto rendimiento y fácil de usar.

              p.mb-0 Contiene más de 170 bloques de diseño que se basan en Bootstrap para crear diseños #[em web] exclusivos. Es de licencia gratuita. Es de muy buena interacción y personalización. Del mismo modo, es óptimo para el desarrollo del #[em Backend] que facilita la sintaxis para el desarrollador.

          .row.align-items-center(titulo="UltraEdit")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_13.png', alt='')
               
            .col-lg             
              p.mb-0 Es un potente editor de texto, muy seguro y flexible para Mac, Linux y Windows. La edición de columnas y listas son muy buenas experiencias. El funcionamiento de las herramientas es cambiante y ligero en el sistema de menú. Utiliza muchas plantillas inteligentes, plantillas de macros y herramientas personalizadas. Los desarrolladores se basan en una muy buena potencia, carga ligera de archivos grandes, rendimiento, configuración de temas y muy buena integración de los sistemas operativos. 

          .row.align-items-center(titulo="Visual Studio Code")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_14.png', alt='')
               
            .col-lg             
              p También conocido como VSC, es un editor de código de fuente abierta de Microsoft. Editor de texto de multiplataforma que puede ser ejecutado en cualquier sistema operativo Linux, Windows o Mac. 

              p.mb-0 Está realmente enfocado en incrementar el desempeño del programador. Posee funciones automáticas y depuración del sistema ayudando a la realización de las tareas.

          .row.align-items-center(titulo="Brackets")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_15.png', alt='')
               
            .col-lg             
              p Es un editor de texto moderno, ligero y de código abierto demasiado potente. Facilita el diseño en el navegador con herramientas visuales muy ágiles y eficientes. Diseñado para programadores #[em web] y desarrolladores #[em frontend]. 

              p.mb-0 Una característica diferente es que posee integrado un servidor de vista previa en vivo, mostrando la página actual y no requiere una actualización manual cuando se cambia de archivos o se modifica el código. 

          .row.align-items-center(titulo="Sublime Text")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_16.png', alt='')
               
            .col-lg             
              p.mb-0 Es una aplicación liviana, facilita a los programadores trabajar de manera ágil, tiene varios atajos de teclado, muy flexible para todas las funciones. Compatible con las integraciones multiplataforma y ha sido optimizado para una gran velocidad e interfaz muy fácil de usar. Tiene un periodo de prueba gratuito.

          .row.align-items-center(titulo="Atom Editor")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_17.png', alt='')
               
            .col-lg             
              p.mb-0 Editor de código de fuente abierta para Linux, Mac OS y Microsoft Windows. Permite compartir los progresos de los proyectos con los compañeros de trabajo y trabajar unidos. Atom se puede personalizar según los requisitos, los estilos con CSS y JavaScript.

          .row.align-items-center(titulo="Notepad++")
            .col-auto.mb-4.m-auto
              figure
                img(src='@/assets/curso/temas/t3/t3_18.png', alt='')
               
            .col-lg             
              p.mb-0 Editor ligero y de código abierto. Reemplaza al bloc de notas y admite varios idiomas. Es fácil de usar y consume poca potencia del computador. Posee muchas herramientas útiles para los desarrolladores y diseñadores #[em web]. Ofrece resaltado en su sintaxis, edita múltiples documentos, está disponible solo para Windows. 

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstm_h3
          h3 Costos asociados al desarrollo de #[em software]   

    .bg--full.img_06.pb-5.mb-5
      p(data-aos="fade-left") La estimación de costos de desarrollo de #[em software] es el factor más importante en todo proyecto informático. Es primordial contar con temas estratégicos para tener indicadores que midan el costo de los mismos, y que logren garantizar la eficiencia, calidad y competitividad. Se trata de identificar los recursos necesarios para lograr que un proyecto sea eficiente. 

      .row.justify-content-center
        .col-lg-10.mb-5
          .bg--white.brad_01.p-4
            .row.justify-content-center.align-items-center
              .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
                p Para la valoración o estimación de recursos para el desarrollo de #[em software], existen algunos componentes como los gastos directos o indirectos. 

                p.mb-0 El costo directo de los programas #[em software] comprende desde los ingresos de cada individuo del equipo, los pagos que se deben hacer por la utilización del #[em hardware] y otros elementos para la realización del trabajo.
              .col-lg-auto.col-8(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/t3_19.png', alt='')

        .col-lg-10.col-md-8(data-aos="zoom-in")
          figure.d-none.d-lg-flex
            img(src='@/assets/curso/temas/t3/t3_20.svg', alt='')
          figure.d-lg-none.d-flex
            img(src='@/assets/curso/temas/t3/t3_21.svg', alt='')

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstm_h3
          h3 Factores que afectan el costo del #[em software]  

    p(data-aos="fade-left").mb-5 La estimación del presupuesto en el desarrollo de #[em software] es una tarea compleja la cual involucra diferentes factores que afectan los tiempos reales y los esfuerzos que se invierten en cada proyecto. Los ingenieros de #[em software] son los responsables de definir tanto los procesos metodológicos como los organizacionales que pueden generar incertidumbre, sobreestimación o llevar al fracaso del proyecto.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10.col-md-8
        figure.d-none.d-lg-flex
          img(src='@/assets/curso/temas/t3/t3_22.svg', alt='')
        figure.d-lg-none.d-flex
          img(src='@/assets/curso/temas/t3/t3_23.svg', alt='')

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstm_h3
          h3 Estimación de costo de desarrollo del #[em software]  

    p(data-aos="fade-left").mb-5 Para lograr realizar una buena estimación en el desarrollo de #[em software], los atributos clave de la cotización de un producto #[em software] se deben basar en una metodología de estimación confiable, esta debe ser completa y contener todos los detalles como la planificación, estimular el presupuesto y presupuestar los costos. Los cálculos deben ser acordados por todas las partes interesadas y el presupuesto debe ser ejecutado por el equipo de desarrollo. De Igual manera, los riesgos deben medir, comprender y tener en cuenta los siguientes elementos para definir la estimación de costos del proyecto.

    .bg--full.img_02.pb-5
      .row.justify-content-center.mb-5
        .col-lg-10.col-md-8(data-aos="zoom-in")
          figure.d-none.d-lg-flex
            img(src='@/assets/curso/temas/t3/t3_24.svg', alt='')
          figure.d-lg-none.d-flex
            img(src='@/assets/curso/temas/t3/t3_25.svg', alt='')
              

 
 

          
            


</template>

<script>
export default {
  name: 'Tema3',
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
