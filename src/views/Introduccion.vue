<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción    

    p.mb-4 En este componente formativo se abordarán los conceptos y técnicas que apoyarán el desarrollo de una aplicación #[em web] de manera completa; es decir, se realizará el #[em Backend y Front-end] de la aplicación, de esta forma se podrá observar la comunicación, intercambio y procesamiento de la información de estos dos componentes, por lo que se iniciará con la instalación de herramientas y recursos del lado del servidor, que gestionará la base o plataforma para el despliegue de la aplicación del lado del cliente.  En la segunda parte de este documento se da alcance a la construcción de la aplicación #[em web] Responsive, que consumirá la API REST ya realizada en el servidor.
    
    .bg--full.bg--full.grad_01
      .row.justify-content-center 
        .col-lg-10
          .cajon.cjn--blue.mb-4
            .row.justify-content-center.align-items-center
              .col-lg.mb-4.mb-lg-0
                p Esto permitirá tener un mayor conocimiento sobre las tecnologías #[em web] actuales, especialmente en el uso de las técnicas del lenguaje, los recursos para probar y testear la aplicación, las nuevas formas de sintaxis de algunos lenguajes, los componentes y módulos que harán el trabajo más fácil a los desarrolladores. En últimas palabras este componente apoya de manera significativa el primer paso para generar competencias y habilidades con el fin de generar nuevas aplicaciones #[em web].
              .col-auto
                figure
                  img(src="@/assets/curso/temas/intro/intro_01.svg", alt="alt").img190.m-auto

          p.text-center.mb-4 La siguiente figura representa el esquema general de comunicación entre la aplicación (Front-end) y el servidor (#[em Backend]):

        .col-lg-10.col-md-8.mb-5
          .titulo-sexto.color-acento-contenido
            h5 Fígura 1.
            span Esquema #[em Front-end - Backend].

          figure.d-none.d-lg-flex
            img(src="@/assets/curso/temas/intro/intro_02A.svg", alt="alt") 

          figure.d-lg-none.d-flex
            img(src="@/assets/curso/temas/intro/intro_02B.svg", alt="alt")

          figcaption Nota. Esquema general de comunicación #[em Front-end – Backend].

        .col-lg-10
          .bg--cta.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/recursos/video.svg").img45
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.text-white.mb-1 ¿Qué es #[em Backend] y #[em Front-end]?
                    p.text-white.mb-0 Asimismo, en el siguiente video podrá encontrar información complementaria sobre los elementos, características y componentes del #[em Front-end y Backend]:
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://youtu.be/50RbVujPPGs" target="_blank")
                      span Descargar
                      i.fas.fa-file-download  

                      




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
