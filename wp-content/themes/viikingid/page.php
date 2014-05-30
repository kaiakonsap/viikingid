<?php /* Template Name: Tutvustus Template */
get_header("header2"); ?>

<div class="wrapper">
    <div id="frame">
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/top_frame.png" alt="frame"/>

        <div id="paper" class="paper">

            <?php if (have_posts()): while (have_posts()) : the_post(); ?>

                <div class="nav">
                    <div id="breadcrumbs"> <?php if (function_exists('show_full_breadcrumb'))
                            show_full_breadcrumb(
                                array(
                                    'labels' => array(
                                        'local' => false, // set FALSE to hide
                                        'home' => 'Esileht'
                                    )
                                )
                            ); ?>
                    </div>
              <p><?php the_title() ?></p>
            </div>


            <div id="frame_content">
                <div class="item">
                <?php edit_post_link(); ?>
                       <?php the_content(); ?>


                    <?php endwhile; ?>

                    <?php else: ?>

                        <!-- article -->
                        <article>

                            <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

                        </article>
                        <!-- /article -->
                </div>
            </div>
            <?php endif; ?>

        </div>
        </div>
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/bottom_frame.png" alt="frame"/>
    </div>
</div>

</div>
<?php get_footer("footer2"); ?>
