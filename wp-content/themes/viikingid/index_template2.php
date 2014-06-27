<?php /* Template Name: index2 template */
get_header("header1"); ?>


    <div class="cloud"><p><a href="#"> Testime pilve</a></p></div>
    <div class="wrapper panorama">

        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <p><?php the_title() ?></p>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>

    <div id="frame_content">


        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <?php edit_post_link(); ?>
            <?php the_content(); ?>


        <?php endwhile; ?>


        <?php else: ?>

            <!-- article -->
            <article>

                <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

            </article>
            <!-- /article -->
        <?php endif; ?>

    </div>

    </div>
<?php get_footer("footer1"); ?>