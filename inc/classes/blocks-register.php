<?php 
/**
 * Register Blocks 
 * @boilerplate
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Boilerplate_Register_Blocks' ) ) {

    class Boilerplate_Register_Blocks {

        /**
         * Constructor 
         * @return void
         */
         public function __construct() {
            add_action( 'init', [ $this, 'register_blocks' ] );
         }

        /**
        * Register Blocks
        * @return void
        */
        public function register_blocks() {
            $blocksFolder = BOILERPLATE_DIR . '/build/blocks';

            if ( is_dir( $blocksFolder ) ) {
                $contents = scandir( $blocksFolder );

                $blocks = array_filter( $contents, function( $item ) use ( $blocksFolder ) {
                    $itemPath = $blocksFolder . DIRECTORY_SEPARATOR . $item;
                    return is_dir( $itemPath ) && !in_array( $item, ['.', '..'] );
                });
            
                if( is_array( $blocks ) && ! empty( $blocks ) ) {
                    foreach ( $blocks as $block ) {
                        register_block_type( BOILERPLATE_DIR . '/build/blocks/' . $block  );
                    }
                }
            }
        }
    }
}

new Boilerplate_Register_Blocks(); // Initialize the class instance