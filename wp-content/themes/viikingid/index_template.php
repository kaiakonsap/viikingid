<?php /* Template Name: index template */ get_header("header1"); ?>

<main role="main">

    <div class="wrapper panorama">
        <img src="<?php echo get_template_directory_uri(); ?>/img/panoraam2.png" class="advancedpanorama" width="3220" height="508" usemap="testmap" alt="Atelier du sculpteur" />
        <map id="testmap" name="testmap">
            <area shape="rect" coords="1653,72,1839,255" href="index.html" alt="viikingite külast" />
            <area shape="rect" coords="1950,114,2081,210" href="images/test.JPG" alt="meelelahutus" />
            <area shape="rect" coords="1920,276,2070,351" href="images/test.JPG" alt="kontakt"  />
        </map>
    </div>

    <div id="owl_back">
        <div id="owl3" class="owl-carousel owl-theme">
            <?php if (have_posts()): while (have_posts()) : the_post(); ?>


                    <a href="<?php echo get_permalink()?>">
                        <?php edit_post_link(); ?>
                                    <?php the_content(); ?>


                    </a>



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
    <?php get_footer("footer1"); ?>

</main>