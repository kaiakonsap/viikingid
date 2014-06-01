<?php /* Template Name: reklaami template */ get_header("header4"); ?>

	<main role="main">
	<div id="content">
		<h1><?php echo $cfs->get('ajaga_piiratud_soodustus'); ?> <span><?php echo $cfs->get('pakkumine_kehtib'); ?></span></h1>
		<h2>Viikingite Küla kliendikaart</h2>
		<ul id="point_out"><li>Tasuta</li><li> Alati <?php echo $cfs->get('kliendikaarti_soodustus'); ?> raha tagasi ostult</li></ul>
		<div id="lyoness_card"><span><?php echo $cfs->get('kliendikaarti_tutvustus'); ?></span></div>
<?php if (have_posts()): while (have_posts()) : the_post(); ?>
<?php edit_post_link(); ?> 
		<?php the_content(); ?>
		<?php endwhile; ?>
	<?php else: ?>
	<!-- article -->
		<article>
			<h2><?php _e( 'form puudub', 'html5blank' ); ?></h2>
		</article>
	<!-- /article -->
	<?php endif; ?>


<?php get_footer("footer4"); ?>
	</main>