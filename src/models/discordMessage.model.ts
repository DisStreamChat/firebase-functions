import { Platform } from "./platform.enum";

export enum MessageType {
	CHAT = "CHAT",
	SUBSCRIPTION = "SUBSCRIPTION",
	CHEER = "CHEER",
	FOLLOW = "FOLLOW",
	AUTOMOD = "AUTOMOD",
	SUB_GIFT = "SUB_GIFT",
	HIGHLIGHTED = "HIGHLIGHTED",
	RAID = "RAID",
}

export interface Message<T = any> {
	platform: Platform;
	type: MessageType;
	id: string;
	sender: Sender;
	content: string;
	sentAt: number;
	metadata?: T;
}

export interface Sender {
	username: string;
	displayName: string;
	avatarUrl: string;
	color: string;
	id: string;
	badges: {
		[key: string]: Badge;
	};
}

export interface Badge {
	title: string;
	image: string;
}

export interface TwitchMeta {
	replyParentDisplayName?: string;
	replyParentMessageBody?: string;
	replyParentMessageId?: string;
	replyParentMessageUserId?: string;
	highlightedMessageId?: string;
}

export type TwitchMessage = Message<TwitchMeta>;
