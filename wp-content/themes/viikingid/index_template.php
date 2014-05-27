<?php /* Template Name: index template */
get_header("header1"); ?>



<div class="wrapper panorama">
    <img src="<?php echo get_template_directory_uri(); ?>/img/panoraam2.png" class="advancedpanorama" width="3220"
         height="508" usemap="testmap" alt="Atelier du sculpteur"/>

    <?php
    if (is_array(get_post_custom_values('category'))) {
        $cat = implode(",", get_post_custom_values('category'));
        query_posts("cat=$cat&order=ASC");
    } else {
        query_posts("order=ASC");
    }
    ?>
    <map id="testmap" name="testmap">
        <?php if (have_posts()): while (have_posts()) : the_post();
            $posttags = get_the_tags();
            $content = the_content($post->ID);?>

            <area shape="rect"
                  coords="<?php  if ($posttags) {
                      $len = count($posttags);
                      $count = 0;
                      foreach ($posttags as $tag) {
                          if ($count == ($len - 1)) {
                              echo $tag->name;
                          } else {
                              echo $tag->name . ',';
                          }
                          $count++;
                      }
                  }?>" href="<?php echo get_permalink($content) ?>" alt='<?php the_post_thumbnail(); ?>'/>

            <input type="text" class="title" value="<?php the_title() ?>"/>

        <?php endwhile; ?>

        <?php else: ?>

            <!-- article -->
            <article>

                <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

            </article>
            <!-- /article -->

        <?php endif; ?>
    </map>
    <?php wp_reset_query(); ?>

</div>

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
