const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

//Welcome & goodbye messages\\
client.on('guildMemberAdd', member => {
	const welcomeEmbed = new Discord.MessageEmbed();

	welcomeEmbed.setColor('#5cf000');
	welcomeEmbed.setTitle('Üdvözlünk!');
	welcomeEmbed.setDescription(
		member.user.username + ' Csatlakozott a szerverre!'
	);
	member.guild.channels.cache
		.find(i => i.name === '『🆕』csatlakozások')
		.send(welcomeEmbed);
});

client.on('guildMemberRemove', member => {
	const goodbyeEmbed = new Discord.MessageEmbed();

	goodbyeEmbed.setColor('#f00000');
	goodbyeEmbed.setTitle('Viszlát!');
	goodbyeEmbed.setDescription(member.user.username + ' Kilépett a szerverről!');

	member.guild.channels.cache
		.find(i => i.name === '『🆕』csatlakozások')
		.send(goodbyeEmbed);
});

client.on('guildMemberAdd', member => {
	member.send('Üdvözlünk! Jó szórakozást a Magyar Közösségi Szerveren!');
});

//UptimeRobot.com szerver
console.log('Starting KeepAlive...');
const keepAlive = require('./server');

keepAlive();

console.log('Logging in...');

client.login('YourTokenHere');
