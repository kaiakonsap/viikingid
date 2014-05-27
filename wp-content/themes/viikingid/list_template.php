<?php /* Template Name: Nimekiri Template */
get_header("header2"); ?>


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
                                )
                            )
                        ); ?>
                </div>
            </nav>



            <div class="slaider_container thumbs">


                <div id="owl1" class="owl-carousel owl-theme">
                    <?php
                    if (is_array(get_post_custom_values('category'))) {
                        $cat = implode(",", get_post_custom_values('category'));
                        query_posts("cat=$cat&order=ASC");
                    } else {
                        query_posts("order=ASC");
                    }
                    ?>
                    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                        <div class="item">
                            <a href="<?php echo get_permalink() ?>">
                                <div class="thumb">
                                    <div class="frame_wrap center">

                                        <?php if (has_post_thumbnail()): ?>
                                            <div class="img_wrap">

                                                <?php the_post_thumbnail(); ?>

                                            </div>
                                        <?php endif; ?>

                                    </div>
                                    <div class="link_holder"><?php the_title(); ?></div>
                                    <?php edit_post_link(); ?> </div>
                            </a>
                        </div>



                    <?php endwhile; ?>

                    <?php else: ?>

                        <!-- article -->
                        <article>

                            <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

                        </article>
                        <!-- /article -->

                    <?php endif; ?>
                    <?php wp_reset_query(); ?>


                </div>
            </div>
        </div>
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/bottom_frame.png" alt="frame"/>
    </div>
</div>

</div>
<?php get_footer("footer2"); ?>



