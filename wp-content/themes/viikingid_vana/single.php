<?php

$post = $wp_query->post;

if ( in_category('2') ) {

include(TEMPLATEPATH . '/single-activities.php'); } 

elseif ( in_category('4') ) {

include(TEMPLATEPATH . '/single-gallery.php'); } 


else {

include(TEMPLATEPATH . '/single-default.php');

}

?>