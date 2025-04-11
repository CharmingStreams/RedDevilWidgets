var channelNameExample;

window.addEventListener('onWidgetLoad', function (obj) {
    channelNameExample = obj.detail.channel.username;
});

window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.event.listener === 'widget-button' && obj.detail.event.field === 'simulate') {
        setTimeout(() => {
        let broadcasterEmulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688895263266,
                        "tags": {
                            "badge-info": "subscriber/14",
                            "badges": "broadcaster/1",
                            "color": "#FF69B4",
                            "display-name": channelNameExample,
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "54b1903a4-1130-4c46-820b-f589b7102c4b",
                            "mod": "0",
                            "returning-chatter": "0",
                            "room-id": "1465175108",
                            "subscriber": "1",
                            "tmi-sent-ts": "1688895262653",
                            "turbo": "0",
                            "user-id": "1461575108",
                            "user-type": ""
                        },
                        "nick": channelNameExample,
                        "userId": "146575108",
                        "displayName": channelNameExample,
                        "displayColor": "#FF69B4",
                        "badges": [
                            {
                                "type": "broadcaster",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                "description": "Broadcaster"
                            }
                        ],
                        "channel": channelNameExample,
                        "text": "This is a broadcaster message!",
                        "isAction": false,
                        "emotes": [],
                        "msgId": "54b1903a4-1130-4c46-820b-f589b7102c4b"
                    },
                    "renderedText": "This is a broadcaster message!"
                }
            }
        });
        window.dispatchEvent(broadcasterEmulated);
    }, 2000);

        setTimeout(() => {
        let moderatorEmulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688897515520,
                        "tags": {
                            "badge-info": "",
                            "badges": "moderator/1",
                            "color": "#1E90FF",
                            "display-name": "Moderator",
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "3114588ea-eb54-4047-bdd9-7d2f6e3bbd68",
                            "mod": "1",
                            "returning-chatter": "0",
                            "room-id": "1146575108",
                            "subscriber": "0",
                            "tmi-sent-ts": "1688897514912",
                            "turbo": "0",
                            "user-id": "882005875",
                            "user-type": "mod"
                        },
                        "nick": "Moderator",
                        "userId": "8182005875",
                        "displayName": "Moderator",
                        "displayColor": "#1E90FF",
                        "badges": [
                            {
                                "type": "moderator",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                "description": "Moderator"
                            }
                        ],
                        "channel": channelNameExample,
                        "text": "",
                        "isAction": false,
                        "emotes": [ ],
                        "msgId": "3145881ea-eb54-4047-bdd9-7d2f6e3bbd68"
                    },
                    "renderedText": `This is a Moderator message <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2dfbbbbf66f4a75b0f53db841523e6c/static/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2dfbbbbf66f4a75b0f53db841523e6c/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2dfbbbbf66f4a75b0f53db841523e6c/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2dfbbbbf66f4a75b0f53db841523e6c/static/dark/3.0 4x" title="ModLove" class="emote">`
                }
            }
        });
        window.dispatchEvent(moderatorEmulated);
    }, 5000);
        setTimeout(() => {
        let vipemulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688897999996,
                        "tags": {
                            "badge-info": "",
                            "badges": "vip/1",
                            "color": "#1E90FF",
                            "display-name": "Vip",
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "f64d186b5-dd6a-4a10-8924-916c89c499bb",
                            "mod": "0",
                            "returning-chatter": "0",
                            "room-id": "1461575108",
                            "subscriber": "0",
                            "tmi-sent-ts": "1688897999440",
                            "turbo": "0",
                            "user-id": "8820015875",
                            "user-type": "",
                            "vip": "1"
                        },
                        "nick": "Vip",
                        "userId": "8820015875",
                        "displayName": "Vip",
                        "displayColor": "#1E90FF",
                        "badges": [
                            {
                                "type": "vip",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                "description": "VIP"
                            }
                        ],
                        "channel": channelNameExample,
                        "text": "",
                        "isAction": false,
                        "emotes": [],
                        "msgId": "f64d86b5-dd6a-4a10-8924-916c89c499bb"
                    },
                    "renderedText": `This is a Vip Message <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a829c76ca15f49a2bf71e1270f83fe83/static/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a829c76ca15f49a2bf71e1270f83fe83/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a829c76ca15f49a2bf71e1270f83fe83/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a829c76ca15f49a2bf71e1270f83fe83/static/dark/3.0 4x" title="AmbessaLove" class="emote"><img src="https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/3.0 4x" title="GlitchCat" class="emote">`
                }
            }
        });
        window.dispatchEvent(vipemulated);
    }, 6000);
        setTimeout(() => {
        let subemulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688898287282,
                        "tags": {
                            "badge-info": "subscriber/14",
                            "badges": " subscriber/0",
                            "color": "#FF69B4",
                            "display-name": "Susbcriber",
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "22c6934d7-53fd-4d9f-bde4-dfa9507cda30",
                            "mod": "0",
                            "returning-chatter": "0",
                            "room-id": "1465275108",
                            "subscriber": "1",
                            "tmi-sent-ts": "1688898286742",
                            "turbo": "0",
                            "user-id": "1465745108",
                            "user-type": ""
                        },
                        "nick": "Subscriber",
                        "userId": "1461575108",
                        "displayName": "Subscriber",
                        "displayColor": "#FF69B4",
                        "badges": [
                            {
                                "type": "subscriber",
                                "version": "0",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                "description": "Subscriber"
                            }
                        ],
                        "channel": channelNameExample,
                        "text": "Subscriber message!",
                        "isAction": false,
                        "emotes": [],
                        "msgId": "22c694d27-53fd-4d9f-bde4-dfa9507cda30"
                    },
                    "renderedText": "This is a Subscriber message!"
                }
            }
        });
        window.dispatchEvent(subemulated);
    }, 4000);
        setTimeout(() => {
        let Regemulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688896811497,
                        "tags": {
                            "badge-info": "",
                            "badges": "",
                            "color": "#1E90FF",
                            "display-name": "Username",
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "59032d3a2-6408-463b-9ffd-66bb89f2a280",
                            "mod": "0",
                            "returning-chatter": "0",
                            "room-id": "1446575108",
                            "subscriber": "0",
                            "tmi-sent-ts": "16848896810916",
                            "turbo": "0",
                            "user-id": "8852005875",
                            "user-type": ""
                        },
                        "nick": "Username",
                        "userId": "8820052875",
                        "displayName": "Username",
                        "displayColor": "#1E90FF",
                        "badges": [],
                        "channel": channelNameExample,
                        "text": "A message from a regular viewer",
                        "isAction": false,
                        "emotes": [],
                        "msgId": "5903d3a22-6408-463b-9ffd-66bb89f2a280"
                    },
                    "renderedText": "This is my new customizable chat widget, i hope your all love it as much as i do!"
                }
            }
        });
        window.dispatchEvent(Regemulated);
    }, 1000);
        setTimeout(() => {
        let emoteemulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688898729378,
                        "tags": {
                            "badge-info": "subscriber/14",
                            "badges": "broadcaster/1,subscriber/0",
                            "color": "#FF69B4",
                            "display-name": channelNameExample,
                            "emote-only": "1",
                            "emotes": "emotesv2_e6fd8cf6274a41ce92e744e2472440c4:0-9",
                            "first-msg": "0",
                            "flags": "",
                            "id": "328c2bd12-5ece-454a-8788-352e7da38ce2",
                            "mod": "0",
                            "returning-chatter": "0",
                            "room-id": "1456575108",
                            "subscriber": "1",
                            "tmi-sent-ts": "1688898728820",
                            "turbo": "0",
                            "user-id": "1465775108",
                            "user-type": ""
                        },
                        "nick": channelNameExample,
                        "userId": "1465475108",
                        "displayName": channelNameExample,
                        "displayColor": "#FF69B4",
                        "badges": [
                            {
                                "type": "broadcaster",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                "description": "Broadcaster"
                            },
                            {
                                "type": "subscriber",
                                "version": "0",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                "description": "Subscriber"
                            }
                        ],
                        "channel": channelNameExample,
                        "text": "sarueiFire",
                        "isAction": false,
                        "emotes": [],
                        "msgId": "328c2bd1-5e4ce-454a-8788-352e7da38ce2"
                    },
                    "renderedText": "<img src=\"https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/1.0\" srcset=\"https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/304486301/static/dark/3.0 4x\" title=\"GlitchCat\" class=\"emote\"><img src=\"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c1f4899e65cf4f53b2fd98e15733973a/animated/dark/1.0\" srcset=\"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c1f4899e65cf4f53b2fd98e15733973a/animated/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c1f4899e65cf4f53b2fd98e15733973a/animated/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c1f4899e65cf4f53b2fd98e15733973a/animated/dark/3.0 4x\" title=\"GoldPLZ\" class=\"emote\"><img src=\"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/1.0\" srcset=\"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/3.0 4x\" title=\"PopNemo\" class=\"emote\"><img src=\"https://static-cdn.jtvnw.net/emoticons/v2/58765/static/dark/1.0\" srcset=\"https://static-cdn.jtvnw.net/emoticons/v2/58765/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/58765/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/58765/static/dark/3.0 4x\" title=\"NotLikeThis\" class=\"emote\"><img src=\"https://cdn.frankerfacez.com/emote/25927/1\" srcset=\"https://cdn.frankerfacez.com/emote/25927/1 1x, https://cdn.frankerfacez.com/emote/25927/2 2x, https://cdn.frankerfacez.com/emote/25927/4 4x\" title=\"CatBag\" class=\"emote\"><img src=\"https://cdn.frankerfacez.com/emote/25927/1\" srcset=\"https://cdn.frankerfacez.com/emote/25927/1 1x, https://cdn.frankerfacez.com/emote/25927/2 2x, https://cdn.frankerfacez.com/emote/25927/4 4x\" title=\"CatBag\" class=\"emote\"><img src=\"https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/1x.webp\" srcset=\"https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/1x.webp 1x, https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/2x.webp 2x, https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/4x.webp 4x\" title=\"BibleThump\" class=\"emote\"><img src=\"https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/1x.webp\" srcset=\"https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/1x.webp 1x, https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/2x.webp 2x, https://cdn.7tv.app/emote/01J8NMZ2HG0005G1FWF2H9Y615/4x.webp 4x\" title=\"BibleThump\" class=\"emote\">"
                }
            }
        });
        window.dispatchEvent(emoteemulated);
    }, 8000);
        setTimeout(() => {
        let topemulated = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": 1688797999996,
                        "tags": {
                            "badge-info": "",
                            "badges": "vip/1",
                            "color": "#1E90FF",
                            "display-name": "Top Donator",
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "f64d864b5-dd6a-4a10-8924-916c89c399bb",
                            "mod": "0",
                            "returning-chatter": "0",
                            "room-id": "1446575108",
                            "subscriber": "0",
                            "tmi-sent-ts": "1688897999440",
                            "turbo": "0",
                            "user-id": "8842005875",
                            "user-type": "",
                            "vip": "1"
                        },
                        "nick": "Top Donator",
                        "userId": "8825005875",
                        "displayName": "Top Donator",
                        "displayColor": "#1E90FF",
                        "badges": [
                            {
                                "type": "vip",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                "description": "VIP"
                            }
                        ],
                        "channel": channelNameExample,
                        "text": "Super cool VIP POGGERS",
                        "isAction": false,
                        "emotes": [],
                        "msgId": "f64d866b5-dd6a-4a10-8924-916c89c499bb"
                    },
                    "renderedText": `"I'm a Top donator to this Channel woohoo!!!! <img src="https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/3.0 4x" title="DatSheffy" class="emote"><img src="https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/111700/static/dark/3.0 4x" title="DatSheffy" class="emote">"`
                }
            }
        });
        window.dispatchEvent(topemulated);
    }, 7000);
    
    setTimeout(() => {
        let followeremulated = new CustomEvent("onEventReceived", {
            detail: {
                listener: "follower-latest",
                event: {
                avatar: "https://cdn.streamelements.com/assets/dashboard/my-overlays/overlay-default-preview-2.jpg",
                displayName: "Rennie",
                name: "rennie",
                originalEventName: "follower-latest",
                providerId: "55048564",
                sessionTop: false,
                type: "follower",
                _id: "67f8ed642c52895c1f42ae07"
                } // Correctly closes the event object here
            } // Correctly closes the detail object here
        });
        window.dispatchEvent(followeremulated);
    }, 9000);
    setTimeout(() => {
        let subemulated = new CustomEvent("onEventReceived", {
            detail: {
                listener: "subscriber-latest",
                event: {
                    amount: 23,
                    avatar: "https://cdn.streamelements.com/assets/dashboard/my-overlays/overlay-default-preview-2.jpg",
                    displayName: "Clare",
                    name: "clare",
                    originalEventName: "subscriber-latest",
                    providerId: "55048564",
                    sessionTop: false,
                    type: "subscriber",
                    _id: "67f8ecec5c4a5904210828eb"
                } // Correctly closes the event object here
            } // Correctly closes the detail object here
        });
        window.dispatchEvent(subemulated);
    }, 3000);
    } 

});
