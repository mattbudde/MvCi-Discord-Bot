const commando = require("discord.js-commando");
const bot = new commando.Client();
const config = require("./config.json");
const Snooper = require('reddit-snooper');
snooper = new Snooper(credentials);

snooper.watcher.getPostWatcher('mvci') // blank argument or 'all' looks at the entire website 
.on('post', function(post) {
    // comment is a object containing all comment data 
    console.log('post was posted by: ' + post.data.author)
    console.log(post)
})
.on('error', console.error)

bot.registry.registerDefaults();
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('news', 'News');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);