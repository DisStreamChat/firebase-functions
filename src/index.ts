import { runWith } from "firebase-functions";
import { handleDiscordMessageDeleteFunction } from "./discord/deleteMessage";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const handleDiscordMessageDelete = runWith({ timeoutSeconds: 500, secrets: ["DISCORD_TOKEN"], memory: "1GB" })
	.firestore.document("messages/{serverId}/{channelId}/{messageId}")
	.onDelete(handleDiscordMessageDeleteFunction);
