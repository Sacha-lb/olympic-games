const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments, MySqlConnector) => {
    const [query] = await MySqlConnector.executeQuery(`SELECT * FROM participants INNER JOIN sports ON participants.sportId = sports.id WHERE sports.name = "Football" ORDER BY participants.classement ASC LIMIT 3`)
    message.channel.send(`Votre level : ${query.name}`);
};

module.exports.name = 'football';