<!DOCTYPE html>
<html>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); ?><?php if (wp_title('', false)) {
            echo ' :';
        } ?> <?php bloginfo('name'); ?></title>

    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="<?php bloginfo('description'); ?>">
<script src="<?php echo get_template_directory_uri();?>/js/jquery-1.10.2.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>


    <?php wp_head(); ?>


    <!--[if lt IE 9]>

    <![endif]-->
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/smoothDivScroll.css"
          media="screen"/>

    <script>jQuery("#owl3").owlCarousel();</script>

</head>

<body id="panorama_body">
<div id="fb-root"></div>
<script>
    $.noConflict();
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<div id="container">
    <header>
        <div id="icons">

            <?php if ( dynamic_sidebar('Keeled') ) : else : endif; ?>
            <div class="fb-like" data-href="https://www.facebook.com/Viikingitekyla" data-width="24" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>
        </div>
        <button type="button" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <!-- nav -->
        <a href="#">
            <span id="advert">
                <span id="img_wrap">
                     <img src="<?php echo get_template_directory_uri(); ?>/img/test2.jpg"/>
                </span>
            </span>
        </a>

        <div class="accordion">
            <?php if ( dynamic_sidebar('Akordion') ) : else : endif; ?>
        </div>
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