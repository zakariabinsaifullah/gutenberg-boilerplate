/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
	const { uniqueId, blockStyle, content, textColor } = attributes;

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: 'boilerplate-' + clientId.slice(0, 8),
			});
		}
	}, []);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

	/**
	 * Block Styles
	 */
	const deskStyles = `
		.${uniqueId} span{
			color: ${textColor};
		}
	`;
	const tabStyles = ``;
	const mobStyles = ``;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	// Set Block Styles
	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<RichText
					tagName="span"
					value={content}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
				/>
			</div>
		</Fragment>
	);
}
