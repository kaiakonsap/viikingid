<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="et-ee" <?php language_attributes(); ?>>
	<head>
		 <meta http-equiv="content-type" content="text/html; charset=<?php bloginfo('charset'); ?>" />

		  <meta name="description" content="<?php bloginfo('description'); ?>"/>
		  
		<meta name="title" content="<?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?>"/>
		<meta name="author" content="Mati, Kaia" />
		 <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
		
		<link href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<?php wp_head(); ?>
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style2.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style3.css" type="text/css" />

		
	</head>

<body <?php body_class(); ?> id="advert_body">
<div id="advert_container">

	<div id="header">
	<h1><?php echo $cfs->get('suur_lapealkiri'); ?></h1>
		<div id="discount_text"><h3><?php echo $cfs->get('soodustuse_tekst'); ?> <span><?php echo $cfs->get('soodustuse_protsent'); ?></span></h3></div>
		<div id="discount"><h3><?php echo $cfs->get('soodustus'); ?></h3></div>
	</div>
