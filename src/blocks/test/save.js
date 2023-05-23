/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, content } = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<RichText.Content tagName="span" value={content} />
		</div>
	);
}
