<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); ?><?php if (wp_title('', false)) {
            echo ' :';
        } ?> <?php bloginfo('name'); ?></title>

    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <?php wp_head(); ?>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.10.2.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

    <!--[if lt IE 9]>
    <script src="js/aFarkas-html5shiv-cec73ff/dist/html5shiv.js"></script>
    <![endif]-->


</head>
<body <?php body_class(); ?>>
<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<!-- wrapper -->
<div id="container">

    <!-- header -->
    <header>
        <div id="icons">
            <?php if ( dynamic_sidebar('Keeled') ) : else : endif; ?>
            <img src="<?php echo get_template_directory_uri(); ?>/img/en_US.png"/>
            <img src="<?php echo get_template_directory_uri(); ?>/img/ru_RU.png"/>
            <img src="<?php echo get_template_directory_uri(); ?>/img/fi.png"/>
            <div class="fb-like" data-href="https://www.facebook.com/Viikingitekyla" data-height="24" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>

        </div>
        <!-- nav -->
        <button type="button" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <div class="navbar-collapse">
            <div class="nav navbar-nav">
                <?php if (function_exists(shailan_dropdown_menu())) {
                    shailan_dropdown_menu();
                }
                ?>
            </div>
        </div>

        <!-- /nav -->
    </header>
    <!-- /header -->
