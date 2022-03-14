const nacl = require('tweetnacl');

const {PUBLIC_KEY} = require('./config.json');

const verify = async ({signature, timestamp, body}) => {
    try {
        const isVerified = nacl.sign.detached.verify(
            Buffer.from(`${timestamp}${body}`),
            Buffer.from(signature, 'hex'),
            Buffer.from(PUBLIC_KEY, 'hex'),
        );

        return isVerified;
    } catch (exception) {
        return false;
    }
};

const pong = () => ({
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({type: 1}),
});

exports.handler = async ({headers, body}) => {
    const {'x-signature-ed25519': signature, 'x-signature-timestamp': timestamp} = headers;
    const verified = await verify({signature, timestamp, body});

    if (!verified) {
        return {
            statusCode: 401,
            body: 'invalid request signature',
        };
    }

    const {type} = JSON.parse(body);

    switch (type) {
        case 1:
            return pong();
        default:
            return {
                statusCode: 200,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    type: 4,
                    data: {
                        tts: false,
                        content: 'Congrats on sending your command.',
                        embeds: [],
                        allowed_mentions: {parse: []},
                    },
                }),
            };
    }
};