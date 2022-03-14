// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

const {APPLICATION_ID, DEV_GUILD_ID, BOT_TOKEN} = require('./functions/config.json');
const cardDb = require('./functions/cards.json');

const url = `https://discord.com/api/v8/applications/${APPLICATION_ID}/guilds/${DEV_GUILD_ID}/commands`;

const cards = cardDb[cardDb.latestVersion];
const choices = cards.map(({name, value}) => ({name, value}));

const setCommands = async () => {
    axios.post(url, {
        name: 'card',
        type: 1,
        description: 'Display Card',
        options: [{
            name: 'card',
            description: 'Card to display',
            type: 3,
            required: true,
            choices,
        }],
    }, {
        headers: {
            'Authorization': `Bot ${BOT_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });
};

setCommands();