<?php get_header("header2"); ?>

<div class="main">
	<div class="left">		<div class="module_menu">
			<div>
				<div>
					<div>
					<?php
					  if($post){
					  $children = wp_list_pages("title_li=&child_of=".MEELELAHUTUSE_ID."&echo=0&sort_column=menu_order");		
					  }
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

