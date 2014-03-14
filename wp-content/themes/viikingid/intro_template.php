<?php /* Template Name: Külast Template */ get_header("header2"); ?>

	<main role="main">
	

  
  
      <div class="wrapper">
         <div id="frame">
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/top_frame.png" alt="frame"/>

        <div id="paper" class="paper">
            <nav class="nav">
			<?php
			  if($post->post_parent)
			  $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
			  else
			  $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
			  if ($children) { ?>
			  <ul>
			  <?php echo $children; ?>
			  </ul>
			  <?php } ?>
            </nav>
			
			
			
            <div id="frame_content">

		
                <div id="owl2" class="owl-carousel owl-theme">

											<?php if (have_posts()): while (have_posts()) : the_post(); ?>

									<?php the_content(); ?>


								<?php endwhile; ?>

								<?php else: ?>

								<!-- article -->
								<article>

									<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

								</article>
								<!-- /article -->

							<?php endif; ?>




            </div>
            </div>
        </div>
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/bottom_frame.png" alt="frame"/>
    </div>
    </div>
  
</div>  
<?php get_footer("footer2"); ?>


	</main>



