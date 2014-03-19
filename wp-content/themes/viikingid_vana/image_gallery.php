<?php /* Template Name: Pildigaleriide nimekiri */ get_header("header3"); ?>

	<main role="main">

<div class="main">
	<div class="left">		<div class="module_menu">
			<div>
				<div>
					<div>
					<?php
					  if($post)
					  $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0&sort_column=menu_order");
					
					  if ($children) { ?>
					  <ul  class="menu">
					  <?php echo $children; ?>
					  </ul>
					  <?php } ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="content">

		<div class="sisu">
								<?php $cat=get_post_custom_values('category');?>
								 <?php query_posts("cat=$cat[0]&order=ASC"); ?>
							<div id="gallery">

											<?php if (have_posts()): while (have_posts()) : the_post(); ?>
										<div class="gallery_element">
										 <a href="<?php echo get_permalink()?>">
										 <div class="gallerykast">
													
																				
																																												                          
																							       <?php if(has_post_thumbnail()): ?>
																								<div class="image_thumb">	
																								   <?php the_post_thumbnail();?>
																								</div>
																									<?php endif; ?>
																							
																						
																						
																					
													
											</div>
										
											<div class="link_holder"><?php the_title();?></div>
										</a>
									</div>
								<?php endwhile; ?>

								<?php else: ?>

								<!-- article -->
								<article>

									<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

								</article>
								<!-- /article -->

								<?php endif; ?>
								<?php wp_reset_query(); ?>
							</div>
						
			<div style="clear:both"></div>
		</div>
	</div>	
	</div>
	
	<?php get_footer("footer2"); ?>
	</main>