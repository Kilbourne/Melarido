<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.5&appId=1555133888082231";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<section id="chi-siamo" class="chi-siamo">
  <div class="u-1/2-lap-and-up " >
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/chisi.png';?>" alt="">
  </div><div class="u-1/2-lap-and-up " >
      <p>
        Nel 2009  <span class="green">Luca Sepe</span>, <span class="green">Ugo Cusati</span> e <span class="green">Marinella Ilari</span>, iniziano la loro collaborazione
        in occasione di alcuni Spettacoli in cui i tre svolgevano mansioni artistiche ed
        organizzative. Inizia, così, una proficua collaborazione che li portera' a  formare
        una società…la MELARIDO.
        <br>
        L’esperienza diretta del campo ha portato i tre a concepire un’agenzia di
        organizzazione di eventi d’ogni genere, basata sulla soddisfazione dei propri clienti,
        seguendoli minuziosamente dalla fase di programmazione al momento
        dell’evento stesso.
        <br>
        è per questo che le feste per adulti e bambini, gli eventi nei  locali e nelle piazze,
        le cerimonie di tutti i tipi, acquistano una luce diversa con <span class="red">MELARIDO</span>.
        <br>
        La <span class="red">MELARIDO</span> si completa con il supporto attivo  dell’emittente radiofonica
        <span class="green">KISS KISS NAPOLI</span>, che consente in maniera esclusiva di promozionare gli eventi,
        laddove richiesto, con un potere mediatico senza paragoni.
        <br>
        È per tutto questo, e per molto altro, che c’è…<span class="red">MELARIDO</span>…
      </p>
  </div>
</section>
<section id="servizi" class="servizi striscia forma">
  <div class="servizio allestimenti u-1/3-lap-and-up inline-block" >
    <h3>ALLESTIMENTI EVENTI
    <span class="text-moved" >E SERVICE AUDIO E LUCI</span></h3>
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/foto-allestimenti.png';?>" alt="esempi allestimenti">
    <p class="servizio-desc">Disponiamo di Impianti audio professionali di vari marchi,
    potenza e tipologia affinchè sia possibile, attraverso la
    nostra consulenza, far fronte ad ogni tipo di esigenza di
    spazio e luogo.
    </p>
    <a href="" title="" class="servizio-more">Leggi Tutto.</a>
  </div><div class="servizio adulti u-1/3-lap-and-up inline-block" >
    <h3>ANIMAZIONE ADULTI</h3>
    <div>
    <ul class="lista-adulti">
    <li> speaker</li>
    <li> artisti di strada</li>
    <li> water ball</li>
    <li> drag queen</li>
    <li> brasiliane</li>
    <li> cubiste</li>
    <li> striptease</li>
    <li> karaoke</li>
    <li> piano bar</li>
    <li> posteggia</li>
    <li> statue viventi</li>

    </ul>
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/adulti.png';?>" alt="Esempi Adulti">
    </div>
    <p class="servizio-desc" >Disponiamo di Carrettini professionali per soddisfare
qualsiasi tipologia di richiesta ed esigenza del cliente
privato e non, ideali per stupire e deliziare adulti e bambini.
    </p>
    <a href="" title="" class="servizio-more" >Leggi Tutto.</a>
  </div><div class="servizio bambini u-1/3-lap-and-up inline-block" >
        <h3>FESTE PER BAMBINI &
    <span>ANIMAZIONE</span></h3>
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/bambini.png';?>" alt="esempi bambini">
  </div>
</section>

<section class="trasmissioni">
  <h3>Tutti gli artisti delle sueguenti trasmissioni:</h3>
  <div class="lista-trasmissioni">
      <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/madeinsud.png';?>" alt="MadeInSud" class="inline-block">
      <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/colorado.png';?>" alt="Colorado Cafè Live" class="inline-block">
      <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/zelig.png';?>" alt="Zelig" class="inline-block">
  </div>
</section>
<section  class="radio-show">
  <div class="u-1/3-lap-and-up  left" >
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/direttamente-da-1.png';?>" alt="Direttamente da" >
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/kisskiss.svg';?>" alt="Radio KissKiss" class="kisskiss">
    <p class="text-center">Tutto in una sera… Tutti insieme gli Artisti <br>
più amati della radio<br>
in uno spettacolo staffetta di oltre 3 ore,<br>
con una scenografia sorprendente</p>
  </div><div class="u-2/3-lap-and-up img-container striscia striscia2" >
    <img src="<?php echo get_stylesheet_directory_uri().'/dist/images/radiocomdey.png';?>" alt="Radio Comedy Show">
  </div>
</section>

<section id="artisti" class="artisti">
  <div class="artisti-wrapper">
  <div class="lista-artisti ">
  <?php

    $args = array( 'post_type' => 'artisti', 'posts_per_page' => -1 );
    $loop = new WP_Query( $args );
    while ( $loop->have_posts() ) : $loop->the_post();
  ?>
  <div class=""><?php the_post_thumbnail(); ?></div>
 <?php endwhile; ?>

    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>

  
</section>
<section id="eventi" class="eventi">
  <h3 class="section-title">Eventi</h3>
    <div class="eventi-wrapper">
  <div class="lista-eventi swiper-wrapper ">
  <?php
    $today = date('Ymd');
    $args = array( 'post_type' => 'eventi', 'posts_per_page' => -1,
          'meta_key' => 'data', // name of custom field
  'orderby' => 'meta_value_num',
  'order' => 'ASC',
   'meta_query' => array(
    array(
          'key'   => 'data',
          'compare' => '>=',
          'value'   => $today,
      )
      ));
    $loop = new WP_Query( $args );
    while ( $loop->have_posts() ) : $loop->the_post();
  ?>
  <div class="evento media inline-block u-1/2-lap-and-up swiper-slide">
    <?php $default_attr = array(
  'class' => "media__img"
); the_post_thumbnail('full',$default_attr); ?>
    <div class="media__body">
      <h4><?php $date = DateTime::createFromFormat('Ymd', get_field('data'));
echo $date->format('d-m-Y'); ?></h4>
      <h4><?php the_field('luogo'); ?></h4>
      <p><?php the_content();?></p>
    </div>
  </div>
 <?php endwhile; ?>

    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>



</section>
<footer id="contatti" class="contatti">
  <div class="contatti-wrapper">
  <div class="info">
    <div class="logo"></div>
    <p>
      Melarido Srls <br>
Via Alberto da Nola, 31 - Nola (Na) <br>
Tel. 081 823 16 02 - 334 94 04 457 <br>
www.melaridoeventi.com
    </p>
  </div><div class="form"><?php echo do_shortcode('[contact-form-7 id="4" title="Contatti"]' ); ?></div><div class="fb">
    <div class="fb-page" data-href="https://www.facebook.com/melarido.srls/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/melarido.srls/"><a href="https://www.facebook.com/melarido.srls/">Melarido srls</a></blockquote></div></div>
  </div>
  </div>
</footer>

