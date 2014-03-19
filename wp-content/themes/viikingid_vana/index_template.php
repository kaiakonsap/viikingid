<?php /* Template Name: index template */ get_header("header1"); ?>

	<main role="main">

<div id="intro">
<img src="<?php echo get_template_directory_uri(); ?>/img/vf7.png" usemap="#main" width="800px" height="610px" style="border:none" alt="Viikingite küla"/>
<map name="main" id="main">

<area shape="rect" coords="85,430,260,510" href=" <?php echo get_permalink(68) ?>" alt="Millal avatud" title="Millal avatud"/>
<area shape="rect" coords="310,430,485,510" href="<?php echo get_permalink(70) ?>" alt="Astu sisse!" title="Astu sisse!"/>
<area shape="rect" coords="530,430,705,510" href="<?php echo get_permalink(72) ?>" alt="Kus me asume?" title="Kus me asume?"/>
</map></div>
<div id="rotator"><img src="<?php echo get_template_directory_uri(); ?>/img/esimene1.jpg" alt="Pilt 1" /><img src="<?php echo get_template_directory_uri(); ?>/img/esimene1.jpg" alt="Pilt 2" /><noscript><img src="<?php echo get_template_directory_uri(); ?>/img/esimene1.jpg" alt="Pilt 1" /></noscript></div>
<?php get_footer("footer1"); ?>


	</main>



