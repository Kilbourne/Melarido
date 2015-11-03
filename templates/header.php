<header class="banner">

  <a class="brand" href="<?= esc_url(home_url('/')); ?>"></a>
  <div class="container">
    <p>Lo <span class="red">Spettacolo</span> non è mai stato <span class="red">così bello</span>!</p>
    <nav class="nav-primary">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
      endif;
      ?>
    </nav>
  </div>
</header>
