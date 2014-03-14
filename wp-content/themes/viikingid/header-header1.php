<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
		<link href="//www.google-analytics.com" rel="dns-prefetch">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		
		<?php wp_head(); ?>
		    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.10.2.min.js"></script>
			<script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
		    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.panorama.js"></script>
		    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/cvi_text_lib.js"></script>
			<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.advanced-panorama.js"></script>
			<!--[if lt IE 9]>
			<script src="js/aFarkas-html5shiv-cec73ff/dist/html5shiv.js"></script>
			<![endif]-->
		<script>
       $(document).ready(function(){
            $("img.advancedpanorama").panorama({
                auto_start: 0,
                start_position: 0
                /* add your execution parameters here */
            });
        });
        </script>

	</head>
	<body <?php body_class(); ?> id="panorama_body">

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
							<?php viking_nav(); ?>
						</ul>
					</div>

					<!-- /nav -->
			</header>
			<!-- /header -->
