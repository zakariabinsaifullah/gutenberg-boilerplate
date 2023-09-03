<?php 
/**
 * Plugin Main Loader File
 * 
 * @boilerplate
 */

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

 if( ! class_exists( 'Boilerplate_Blocks_Loader' ) ) {

    class Boilerplate_Blocks_Loader {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            $this->includes();
        }

        /**
         * Include all the required files
         * @return void
         */
        public function includes() {
            require_once BOILERPLATE_PATH . 'inc/classes/blocks-category.php';
            require_once BOILERPLATE_PATH . 'inc/classes/blocks-register.php';
            require_once BOILERPLATE_PATH . 'inc/classes/blocks-style.php';
        }

    }

 }

 new Boilerplate_Blocks_Loader(); // Initialize the class instance