<?php /* Template Name: advert template */ get_header("header4"); ?>

	<main role="main">
<div id="advert_container">
						<?php if (have_posts()): while (have_posts()) : the_post(); ?>
						<div class="contentpaneopen">
				
						<span class="contentheading" width="100%"><?php the_title() ?></span>

						</div>
						<div class="contentpaneopen">
						<div>
							<span align="top">

							
									<?php the_content(); ?>
									<?php endwhile; ?>

								<?php else: ?>
									<!-- article -->
									<article>
										<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
									</article>
									<!-- /article -->
								<?php endif; ?>

							</span>
						</div>
						</div>
						<span class="article_separator">&nbsp;</span>

									<div style="clear:both"></div>
</div>
<?php get_footer("footer3"); ?>
	</main>