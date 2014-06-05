<?php get_header("header2"); ?>

<div class="wrapper">
    <div id="frame">
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/top_frame.png" alt="frame"/>

        <div id="paper" class="paper">
            <nav class="nav">
                <div id="breadcrumbs"> <?php if (function_exists('show_full_breadcrumb'))
                        show_full_breadcrumb(
                            array(
                                'labels' => array(
                                    'local' => false, // set FALSE to hide
                                    'home' => 'Esileht'
                                ),
                                'page_ancestors' => array(
                                    'showLink' => true
                                )
                            )
                        ); ?>
                </div>
                <?php if (have_posts()): while (have_posts()) :
                the_post(); ?>
                <p><?php the_title() ?></p>
            </nav>
            <div id="frame_content">
                <div class="item">
                    <?php the_content(); ?>


                    <?php endwhile; ?>

                    <?php else: ?>

                        <!-- article -->
                        <article>

                            <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

                        </article>
                        <!-- /article -->

                    <?php
                    endif; ?>


                </div>
            </div>
        </div>
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/bottom_frame.png" alt="frame"/>
    </div>
</div>

</div>
<?php get_footer("footer2"); ?>


