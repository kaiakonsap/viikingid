<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(''); ?><?php if (wp_title('', false)) {
            echo ' :';
        } ?> <?php bloginfo('name'); ?></title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <?php wp_head(); ?>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.10.2.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/owl.js"></script>

    <!--[if lt IE 9]>
    <script src="js/aFarkas-html5shiv-cec73ff/dist/html5shiv.js"></script>
    <![endif]-->


</head>
<body <?php body_class(); ?>>

<!-- wrapper -->
<div id="container">

    <!-- header -->
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
