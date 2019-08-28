const Lambda = require('aws-sdk/clients/lambda');

module.exports.handler = (event, context, callback) => {

    const lambda = new Lambda({ endpoint: process.env.INVOKE_ENDPOINT });

    const params = {
        FunctionName: process.env.INVOKE_FUNCTION,
        InvocationType: 'RequestResponse',
        Payload: 'Hello'
    };

    lambda.invoke(params, (error, response) => {
        callback(error, response && { statusCode: 200, body: response.Payload });
    });

};
