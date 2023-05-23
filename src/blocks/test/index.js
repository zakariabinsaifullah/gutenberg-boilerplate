import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';
import attributes from './attributes';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */
registerBlockType(metadata, {
	attributes,
	edit: Edit,
	save: Save,
});
