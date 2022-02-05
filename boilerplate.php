<?php
/**
 * Plugin Name:       Boilerplate
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boilerplate
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [boilerplate] && [BOILERPLATE] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class BOILERPLATE_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->boilerplate_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'boilerplate_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'boilerplate_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'boilerplate_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'boilerplate_external_libraries' ] );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function boilerplate_define_constants() {
		define( 'BOILERPLATE_VERSION', '1.0.0' );
		define( 'BOILERPLATE_URL', plugins_url( '', __FILE__ ) );
		define( 'BOILERPLATE_LIB_URL', BOILERPLATE_URL . '/lib/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function boilerplate_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function boilerplate_blocks_init() {
		// register single block
		$this->boilerplate_register_block( 'bootstrap' );
	}

	/**
	 * Register Block Category
	 */

	public function boilerplate_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'boilerplate',
					'title' => __( 'Boilerplate', 'boilerplate' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function boilerplate_external_libraries() {
		// enqueue JS
		wp_enqueue_script( 'boilerplate-lib', BOILERPLATE_LIB_URL . 'js/lib.js', array(), BOILERPLATE_VERSION, true );
	}

}

/**
 * Kickoff
*/

BOILERPLATE_BLOCKS_CLASS::init();