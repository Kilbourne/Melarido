<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

if(is_front_page()){


?>

<!doctype html>

<html <?php language_attributes(); ?>>
  <?php get_template_part('templates/head'); ?>
  <body <?php body_class(); ?>>
    <!--[if lt IE 9]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <div class="page-wrapper wrapper wrapper--wide" role="document">
    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>

      <div class="content row">
        <main class="main">




          <?php  include Wrapper\template_path(); ?>
        </main><!-- /.main -->
        <?php if (Setup\display_sidebar()) : ?>
          <aside class="sidebar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
      </div><!-- /.content -->

    <?php
      do_action('get_footer');
      get_template_part('templates/footer');
      wp_footer();
    ?>
    </div><!-- /.wrap -->
    <div class=""  id="responsive-menu">


        <div id="responsive-menu-title">



            Menu Title

        </div>

    <div class="responsive-menu"><ul><li class="page_item page-item-47"><a href="//localhost:3000/melarido/animazione-adulti/">Animazione Adulti</a></li><li class="page_item page-item-49"><a href="//localhost:3000/melarido/service/">Service</a></li></ul></div>




</div>
<div id="click-menu" class="overlay" role="button" aria-label="Responsive Menu Button">



    <div class="threeLines" id="RM3Lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>



</div>
  </body>
</html>

<?php }else{ ?>
<?php  include Wrapper\template_path(); }?>
