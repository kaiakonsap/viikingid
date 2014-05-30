<?php /* Template Name: test_i template */
get_header("header3"); ?>

<div class="cloud"></div>
<div class="wrapper_panorama"  style="height:200px; width:400px">
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
