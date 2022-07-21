const Discord = require('discord.js');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments, MySqlConnector) => {
    const [query1] = await MySqlConnector.executeQuery(`SELECT * FROM participants INNER JOIN sports ON participants.sportId = sports.id WHERE sports.name = "Basket" and participants.classement = 1`)
    const [query2] = await MySqlConnector.executeQuery(`SELECT * FROM participants INNER JOIN sports ON participants.sportId = sports.id WHERE sports.name = "Basket" and participants.classement = 2`)
    const [query3] = await MySqlConnector.executeQuery(`SELECT * FROM participants INNER JOIN sports ON participants.sportId = sports.id WHERE sports.name = "Basket" and participants.classement = 3`)
    message.channel.send(`1er au classement : ${query1.player} de ${query1.country}`);
    message.channel.send(`2ème au classement : ${query2.player} de ${query2.country}`);
    message.channel.send(`3ème au classement : ${query3.player} de ${query3.country}`);
};

module.exports.name = 'basket';