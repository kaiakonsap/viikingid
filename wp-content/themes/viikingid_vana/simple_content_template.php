<?php /* Template Name: tavaline sisu Template */ get_header("header2"); ?>

	<main role="main">

<div class="main">
	<div class="left">
	<div class="module_menu">

					<?php
				if($post->post_parent > 2) {
					  $children2 = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0&sort_column=menu_order&depth=1");
					  }
					  	  elseif($post->post_parent == 2) {
					  $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0&sort_column=menu_order");
						}
						else
						{
						
						}
					  if ($children) { ?>
					  <ul  class="menu">
					  <?php echo $children; ?>
					  </ul>
					  <?php } ?>
					 <?php   if ($children2) { ?>
					  <ul  class="menu">
					  <?php echo $children2; ?>
					  </ul>
					  <?php } ?>



		</div>
	</div>
	
	<div class="content">

					<div class="sisu">
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
	</div>	
	</div>
	
	<?php get_footer("footer2"); ?>
	</main>