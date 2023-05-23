const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	content: {
		type: 'string',
		default: 'Hello World!',
	},
	textColor: {
		type: 'string',
		default: '#000000',
	},
};

export default attributes;
