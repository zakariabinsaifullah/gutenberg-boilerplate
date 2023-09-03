<?php
/**
 * Register Dynamic Styles for Blocks
 * @package Boilerplate
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Boilerplate_Dynamic_Style' ) ) {

    class Boilerplate_Dynamic_Style {
        
        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            add_filter( 'render_block', [ $this, 'dynamic_style' ], 10, 2 );
        }

        /**
         * Generate Dynamic Style
         * @return string
         */
        function dynamic_style( $block_content, $block ) {
            if ( isset( $block[ 'blockName' ] ) && str_contains( $block[ 'blockName' ], 'boilerplate/' ) ) {
                if ( isset( $block[ 'attrs' ][ 'blockStyle' ] ) ) {
                    $style = $block[ 'attrs' ][ 'blockStyle' ];
                    $handle = isset( $block[ 'attrs' ][ 'uniqueId' ] ) ? $block[ 'attrs' ][ 'uniqueId' ] : 'boilerplate-blocks';
    
                    // convert style array to string
                    if ( is_array( $style ) ) {
                        $style = implode( ' ', $style );
                    }
    
                    // minify style to remove extra space
                    $style = preg_replace( '/\s+/', ' ', $style );
                    
                    wp_register_style( $handle, false );
                    wp_enqueue_style( $handle );
                    wp_add_inline_style( $handle, $style );
    
                }
            }
            return $block_content;
        }
    }
}

new Boilerplate_Dynamic_Style(); // Initialize the class instance