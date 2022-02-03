import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

// const x = 1;
export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__('Boilerplate hello from the editor!', 'boilerplate')}
		</p>
	);
}
