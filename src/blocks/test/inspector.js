/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, BaseControl, ColorPalette } = wp.components;

const Inspector = ({ attributes, setAttributes }) => {
	const { content, textColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__('Test Block Settings', 'boilerplate')}>
				<TextControl
					label={__('Content')}
					value={content}
					onChange={(v) => setAttributes({ content: v })}
				/>
				<BaseControl label={__('Color', 'boilerplate')} id="color">
					<ColorPalette
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						]}
						value={textColor}
						onChange={(v) => setAttributes({ textColor: v })}
					/>
				</BaseControl>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
