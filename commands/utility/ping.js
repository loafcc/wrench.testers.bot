const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [
            new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Pong!')
                .setDescription(`Ping is ${interaction.client.ws.ping}ms`)
                .setTimestamp()
        ]});
	},
};