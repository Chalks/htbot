const nacl = require('tweetnacl');

const {BOT_TOKEN, PUBLIC_KEY} = require('./config.json');

const verify = async ({signature, timestamp, body}) => {
    try {
        const isVerified = nacl.sign.detached.verify(
            Buffer.from(timestamp + JSON.stringify(body)),
            Buffer.from(signature, 'hex'),
            Buffer.from(PUBLIC_KEY, 'hex'),
        );

        return isVerified;
    } catch (exception) {
        return false;
    }
};

exports.handler = async (event) => {
    const {
        path,
        httpMethod,
        headers,
        queryStringParameters,
        body,
    } = event;

    const h = JSON.stringify(headers);
    const qsp = JSON.stringify(queryStringParameters);

    return {
        statusCode: 200,
        body: JSON.stringify({message: `Hello: ${path} ${h} ${httpMethod}, ${qsp}, ${body}`}),
    };
};