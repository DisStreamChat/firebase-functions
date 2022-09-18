import { Client, IntentsBitField } from "discord.js";

export async function getDiscordClient(): Promise<Client> {
	const client = new Client({
		intents: [IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMembers],
	});
	await client.login(process.env.DISCORD_TOKEN);
	await new Promise((res, rej) => {
		client.once("ready", res);
	});

	return client;
}
