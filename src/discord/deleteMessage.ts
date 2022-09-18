import { EventContext } from "firebase-functions/v1";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";

import { getDiscordClient } from "../utils/discordClient";

export async function handleDiscordMessageDeleteFunction(snapshot: QueryDocumentSnapshot, context: EventContext): Promise<void> {
	const client = await getDiscordClient();
	const { serverId, channelId, messageId } = context.params;
	const connectGuild = client.guilds.resolve(serverId);
	const guildChannels = connectGuild.channels;
	const liveChatChannel: any = guildChannels.resolve(channelId);
	const messageManager = liveChatChannel.messages;

	const messageToDelete = await messageManager.fetch(messageId);

	messageToDelete.delete();
}
