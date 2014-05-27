<!DOCTYPE html>
<html>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); ?><?php if (wp_title('', false)) {
            echo ' :';
        } ?> <?php bloginfo('name'); ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <?php wp_head(); ?>

    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/jquery.panorama.css"
          media="screen"/>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.10.2.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.panorama.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/owl.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("img.advancedpanorama").panorama({
                auto_start: 0,
                start_position: 0
                /* add your execution parameters here */
            });


            $("#owl3").owlCarousel();


        });
    </script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/cvi_text_lib.js"></script>
    <script type="text/javascript"
            src="<?php echo get_template_directory_uri(); ?>/js/jquery.advanced-panorama.js"></script>
</head>

<body id="panorama_body">
<div id="container">
    <header>
        <div id="icons">
            <img src="<?php echo get_template_directory_uri(); ?>/img/lang.png" alt="alt_text"/>
            <img src="<?php echo get_template_directory_uri(); ?>/img/fb.png" alt="alt_text"/>

        </div>
        <!-- nav -->
        <button type="button" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <div class="navbar-collapse">
            <ul class="nav navbar-nav">
                <?php if (function_exists(shailan_dropdown_menu())) {
                    shailan_dropdown_menu();
                }
                ?>
            </ul>
        </div>

        <!-- /nav -->
    </header>
    <!-- /header -->