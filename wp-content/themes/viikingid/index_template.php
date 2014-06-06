<?php /* Template Name: index template */
get_header("header1"); ?>


    <div class="cloud"><p><a href="#"> Testime pilve</a></p></div>
    <div class="wrapper panorama">
        <img src="<?php echo get_template_directory_uri(); ?>/img/background.png" class="advancedpanorama" width="2343"
             height="425" usemap="testmap" alt="Atelier du sculpteur" title="meelelahutus"/>

        <?php
        if (is_array(get_post_custom_values('category'))) {
            $cat = implode(",", get_post_custom_values('category'));
            query_posts("cat=$cat&order=ASC");
        } else {
            query_posts("order=ASC");
        }
        ?>
        <map id="testmap" name="testmap">
            <area shape="rect" coords="1653,72,1839,255" href="#" alt="viikingite külast" />

        </map>


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