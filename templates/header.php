<div class="responsive-menu-wrapper">
      <div class=""  id="responsive-menu">


        <div id="responsive-menu-title">



            Melarido

        </div>

    <div class="responsive-menu"> <ul class="list-inline">
          <li class="active"><a href="#chi-siamo" title="">Chi Siamo</a></li>
          <li><a href="#servizi" title="">Servizi</a></li>
          <li><a href="#artisti" title="">Artisti</a></li>
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
    if($loop->have_posts()){ ?>
          <li><a href="#eventi" title="">Eventi</a></li>
          <?php } ?>
          <!--
          <li><a href="#gallery" title="">Gallery</a></li>
          -->
          <li><a href="#contatti" title="">Contatti</a></li>
        </ul></div>




</div>
<div id="click-menu" class="overlay" role="button" aria-label="Responsive Menu Button">



    <div class="threeLines" id="RM3Lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>



</div>
</div>
<header class="banner striscia striscia1">
  <div class="header-wrapper">
    <a class="brand" href="<?= esc_url(home_url('/')); ?>"><img src="<?php echo get_stylesheet_directory_uri().'/dist/images/logo.png'; ?>" alt=""></a><div class="container">
      <p class="claim" >Lo <span class="red">Spettacolo</span> non è mai stato <span class="red">così bello</span>!</p>
      <nav class="nav-primary">
        <ul class="list-inline">
          <li class="active"><a href="#chi-siamo" title="">Chi Siamo</a></li>
          <li><a href="#servizi" title="">Servizi</a></li>
          <li><a href="#artisti" title="">Artisti</a></li>
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
    if($loop->have_posts()){ ?>
          <li><a href="#eventi" title="">Eventi</a></li>
          <?php } ?>
          <!--<li><a href="#gallery" title="">Gallery</a></li> -->
          <li><a href="#contatti" title="">Contatti</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
