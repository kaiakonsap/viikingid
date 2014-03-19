<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="et-ee" <?php language_attributes(); ?> class="no-js">
	<head>
		 <meta http-equiv="content-type" content="text/html; charset=<?php bloginfo('charset'); ?>" />
		  <meta name="robots" content="index, follow" />
		  <meta name="keywords" content="Viiking, viikingid, küla, forell, üritus, vabaaeg" />
		  <meta name="description" content="<?php bloginfo('description'); ?>">
		  
		<meta name="title" content="<?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?>"/>
		<meta name="author" content="Mati, Kaia" />
		 <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
		
		<link href="//www.google-analytics.com" rel="dns-prefetch">
		<link href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<?php wp_head(); ?>
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style2.css" type="text/css" />

		<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/slidetop.js"></script>
		
	</head>

<body onload="start();" <?php body_class(); ?>>
<div class="box">
<div class="language">
<div id="jflanguageselection">
<div class="rawimages">
<span id="active_language"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/et.gif" alt="Eesti" title="Eesti" /></a></span>
<span><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/ru.gif" alt="Vene" title="Vene" /></a></span>
<span><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/fi.gif" alt="Soome" title="Soome" /></a></span>
<span><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/en.gif" alt="Inglise" title="Inglise" /></a></span>
</div></div></div>

<div class="mainmenu1">
<div class="menukast">
<ul class="menu-nav">
	<?php old_viking_nav(); ?>
</ul>
</div></div>

<div id="rotator">
<SCRIPT language="javascript">document.write('<div style="overflow:hidden;width:'+swidth+'px;height:'+sheight+'px;clip:rect(0 '+swidth+'px '+sheight+'px 0);"><div class=slsh style="position:absolute;z-index:9999;width:'+swidth+'px;height:'+sheight+'px;"></div><div id="slider" style="position:relative;width:'+swidth+'px;height='+sheight+'"></div></div>');</SCRIPT>
</div>

<div class="uss"><img src="<?php echo get_template_directory_uri(); ?>/img/uss10.png" alt="madu" /></div>
