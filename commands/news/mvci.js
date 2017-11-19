const commando = require('discord.js-commando');

class MahvelNewsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mvci',
            group: 'news',
            memberName: 'mvci',
            description: 'Mahvel News'
        });
    }
    async run(message, args) {
        message.reply("Dead Game Bro!")
    }
}

module.exports = MahvelNewsCommand;