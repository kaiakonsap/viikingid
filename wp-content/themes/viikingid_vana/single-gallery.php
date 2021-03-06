<?php get_header("header2"); ?>

<div class="main">
	<div class="left">		<div class="module_menu">
			<div>
				<div>
					<div>
					<ul class="menu">
					<?php $posts = get_posts('category=4&orderby=rand'); foreach($posts as $post) { ?>
						<li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
						<?php } ?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="content">

					<div class="sisu">
					<?php if (have_posts()): while (have_posts()) : the_post(); ?>
						<div class="contentpaneopen">
						<div>
						<span class="contentheading" width="100%"><?php the_title() ?></span>
						</div>
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
	</div>	
	</div>
	
	<?php get_footer("footer2"); ?>

