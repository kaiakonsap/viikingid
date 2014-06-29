<?php /* Template Name: SUUR kaart Template */
get_header("header6"); ?>

<div class="imgmap">
    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <?php edit_post_link(); ?>
        <?php the_content(); ?>
        <?php the_post_thumbnail(); ?>

    <?php endwhile; ?>


    <?php else: ?>

        <!-- article -->
        <article>

            <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>
            <img height="1458" width="3000" src="<?php echo get_template_directory_uri(); ?>/img/map.jpg" alt="" />
            <ol>
                <li id="area1"><a href="#">Desc</a></li>
                <li id="area2"><a href="#">Desc</a></li>
                <li id="area3"><a href="#">Desc</a></li>
                <li id="area4"><a href="#">Desc</a></li>
                <li id="area5"><a href="#">Desc</a></li>
            </ol>
        </article>
        <!-- /article -->
    <?php endif; ?>

</div>

<?php get_footer("footer5"); ?>
