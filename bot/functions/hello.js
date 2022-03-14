const nacl = require('tweetnacl');
const {PUBLIC_KEY} = require('./config.json');
const CARD_DB = require('./cards.json');

const CARDS = CARD_DB[CARD_DB.latestVersion];

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

const reject = (reason) => ({
    statusCode: 401,
    body: reason,
});

const pong = () => ({
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({type: 1}),
});

const handleCommand = ({data}) => {
    const {name, options} = data;
    if (name !== 'card') return reject('Invalid command name');

    const option = options[0]; // TODO
    const cardname = option.name;
    const cardDescription = 'lel';

    return {
        statusCode: 200,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: 4,
            data: {
                tts: false,
                content: `${cardname} - ${cardDescription}`,
                embeds: [],
                allowed_mentions: {parse: []},
            },
        }),
    };
};

exports.handler = async ({headers, body}) => {
    const {'x-signature-ed25519': signature, 'x-signature-timestamp': timestamp} = headers;
    const verified = await verify({signature, timestamp, body});

    if (!verified) {
        return reject('Invalid request signature');
    }

    const jsonBody = JSON.parse(body);
    const {type} = jsonBody;

    switch (type) {
        case 1:
            return pong();
        case 2:
            return handleCommand(jsonBody);
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