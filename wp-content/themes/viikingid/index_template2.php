<?php /* Template Name: index2 template */
get_header("header1"); ?>


    <ol id="data">
        <?php
        $fields = $cfs->get('lingid');
            $index = 1;
        foreach ($fields as $field) {
            ?>

            <li class="cloud" id="area<?php echo $index ?>"><p><a href="<?php echo $field['url']; ?>"><?php echo $field['tekst']; ?></a></p></li>


        <?php $index++;
        }
        ?>

        </ol>



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
    <div id="owl_back">

        <div id="owl3" class="owl-carousel owl-theme">

            <?php
            $fields = $cfs->get('pildid');

            foreach ($fields as $field) {
                ?>

                <div class="item">

                    <a href="<?php echo get_permalink($field['url']); ?>">
                        <img src="<?php echo $field['pilt']; ?>"/></a>
                </div>
            <?php
            }
            ?>

        </div>
    </div>
    </div>
<?php get_footer("footer1"); ?>