<?php /* Template Name: Kaart Template */
get_header("header5"); ?>

<div class="wrapper">
    <div id="frame">
        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/top_frame.png" alt="frame"/>

        <div id="paper" class="paper">



            <div class="nav">
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
                <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                    <p><?php the_title() ?></p>
                <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_query(); ?>
            </div>

            <div id="frame_content">

<a href="http://www.viikingitekyla.ee/wordpress/?p=1569" target="_blank">Link suurele</a>

                <div id="interactive_map">
                    <div id="the_map">
                        <ol>
                            <li id="area1"><a href="#">Desc</a></li>
                            <li id="area2"><a href="#">Desc</a></li>
                            <li id="area3"><a href="#">Desc</a></li>
                            <li id="area4"><a href="#">Desc</a></li>
                        </ol>
                    </div>
                    <form id="inputs">
                        <input type="checkbox" name="vehicle" value="Bike"><p>Mängud</p><br>
                        <input type="checkbox" name="vehicle" value="Car"><p>I have a car</p>
                    </form>

                    <input type="text" id="data"/>


                </div>

            </div>


        </div>

        <img class="frame" src="<?php echo get_template_directory_uri(); ?>/img/bottom_frame.png" alt="frame"/>
    </div>
</div>

</div>
<?php get_footer("footer2"); ?>
