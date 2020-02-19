module.exports.serverless = async event => {
    return {
        statusCode: 200,
	header: {
        	content-type: 'application/json'
	},
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };
};
