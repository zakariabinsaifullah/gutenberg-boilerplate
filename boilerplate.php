<?php
/**
 * Plugin Name:       Boilerplate
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boilerplate
 *
 * @package           create-block
 */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers all blocks for the plugin.
 */

 if ( ! function_exists( 'boilerplate_blocks_init' ) ) {

	// blocks initialization
	function boilerplate_blocks_init() {
		register_block_type( __DIR__ . '/build' );
	}
	add_action( 'init', 'boilerplate_blocks_init' );
 }
