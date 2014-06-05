<?php /* Template Name: test_i template */
get_header("header1"); ?>
<script type="text/javascript">
    // Author: Edvin Eshagh
    function show360Simple( divContainerId, imageUrl )
    {
        show360( divContainerId, imageUrl , 2000, 200 , 1);
    }

    function show360( divContainerId
        , imageUrl
        , imageWidthInPixels
        , moveIntervalInMS
        , moveSteps )
    {
        var o = document.getElementById( divContainerId );
        o.style.backgroundImage = 'url'+'(' + imageUrl + ')';
        o.style.position = "relative";
        o.innerHTML = '<div style="width:20%; height:100%;position:absolute;"'
            +   ' onmouseover="show360Direction(\'' + divContainerId + '\',-2);"></div>'
            + '<div style="width:20%; height:100%;position:absolute;left:20%"'
            +   ' onmouseover="show360Direction(\'' + divContainerId + '\',-1);"></div>'
            + '<div style="width:40%; height:100%;position:absolute;left:40%;"'
            +   ' onmouseover="show360Direction(\'' + divContainerId + '\',0);"></div>'
            + '<div style="width:20%; height:100%;position:absolute;left:60%;"'
            +   ' onmouseover="show360Direction(\'' + divContainerId + '\',1);"></div>'
            + '<div style="width:20%; height:100%;position:absolute;right:0px;"'
            +   ' onmouseover="show360Direction(\'' + divContainerId + '\',2);"></div>';
        show360Direction( divContainerId, 1 );
        setTimeout( "move360( '" + divContainerId  + "', " + moveSteps + ", 0, "
            + imageWidthInPixels + ", " + moveIntervalInMS +" );", moveIntervalInMS );
    } // show360()

    function show360Direction( divContainerId, iDirection ) {
        eval( "show360_" + divContainerId + " = " + iDirection ) ;
    }

    function move360( divContainerId
        , iDirectionStep
        , deltaX
        , imageWidth
        , refreshInterval )
    {
        //if( deltaX > imageWidth || deltaX<0) {iDirectionStep *= -1;}
        deltaX += eval( "show360_" + divContainerId ) * iDirectionStep;
        var o = document.getElementById( divContainerId );
        o.style.backgroundPosition = deltaX + "px 0px";
        var evalFunc = "move360( '" + divContainerId + "'"
            + ", " + iDirectionStep
            + ", " + deltaX
            + ", " + imageWidth
            + ", " + refreshInterval
            + ");";
        setTimeout( evalFunc, refreshInterval );
    } // move360()
</script>
<div class="cloud"></div>


<div id="owl_back">
    <div id="myhome" style="height:500px; width:auto"></div>

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
<div>
    <script type="text/javascript">show360Simple( "myhome", "background.png");</script>
</div>
<?php get_footer("footer1"); ?>
