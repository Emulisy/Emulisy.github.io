//通过当前hour时间随机获得相应的quote

(function () {
    const QUOTES = [
        {
            start: 0, // 深夜：孤独与宿命
            end: 5,
            items: [
                {
                    cn: "夜晚的深度并不由黑暗决定，而由沉静决定。",
                    en: "The depth of night is determined not by darkness, but by stillness.",
                    authorCN: "佩索阿",
                    authorEN: "Fernando Pessoa"
                },
                {
                    cn: "即使走到窗前也无济于事，世界在那儿并不存在。",
                    en: "It's no use going to the window; the world isn't there.",
                    authorCN: "米兰·昆德拉",
                    authorEN: "Milan Kundera"
                },
                {
                    cn: "所有的人都孤独，但每个人都孤独得不同。",
                    en: "Everyone is lonely, but each in a different way.",
                    authorCN: "马尔克斯",
                    authorEN: "Gabriel García Márquez"
                }
            ]
        },
        {
            start: 5,
            end: 11,
            items: [
                {
                    cn: "生命在清晨显得合理。",
                    en: "Life feels reasonable in the early morning.",
                    authorCN: "勒内·夏尔",
                    authorEN: "René Char"
                },
                {
                    cn: "白昼从一件尚未命名的事物开始。",
                    en: "Daylight begins with something unnamed.",
                    authorCN: "里尔克",
                    authorEN: "Rainer Maria Rilke"
                },
                {
                    cn: "每一个清晨都是一个新的邀请，让生命变得简单。",
                    en: "Every morning is a new invitation to make life simple.",
                    authorCN: "梭罗",
                    authorEN: "Henry David Thoreau"
                }
            ]
        },
        {
            start: 11,
            end: 13,
            items: [
                {
                    cn: "时间不是流逝的河，而是我们站立其中的地方。",
                    en: "Time is not a flowing river, but the place where we stand.",
                    authorCN: "博尔赫斯",
                    authorEN: "Jorge Luis Borges"
                },
                {
                    cn: "正午使一切显露，却不保证理解。",
                    en: "Noon reveals everything, but guarantees no understanding.",
                    authorCN: "加缪",
                    authorEN: "Albert Camus"
                },
                {
                    cn: "生活不仅仅是活着，而是为了某些瞬间而存在。",
                    en: "Life is not just about living, but about existing for certain moments.",
                    authorCN: "毛姆",
                    authorEN: "Somerset Maugham"
                }
            ]
        },
        {
            start: 13,
            end: 18,
            items: [
                {
                    cn: "万物生长，并无伤痕。",
                    en: "Everything grows without scars.",
                    authorCN: "《五号屠场》",
                    authorEN: "Slaughterhouse-Five"
                },
                {
                    cn: "我为这种称之为偶然的必然向巧合致歉。",
                    en: "My apologies to coincidence for calling it a necessity.",
                    authorCN: "辛波丝卡",
                    authorEN: "Wisława Szymborska"
                },
                {
                    cn: "你应该在午后读书，那时世界正处于间歇。",
                    en: "You should read in the afternoon, when the world is at an intermission.",
                    authorCN: "弗吉尼亚·伍尔夫",
                    authorEN: "Virginia Woolf"
                }
            ]
        },
        {
            start: 18,
            end: 21,
            items: [
                {
                    cn: "夜尚未降临，一切仍在迟疑之中。",
                    en: "Night has not yet fallen; everything remains undecided.",
                    authorCN: "里尔克",
                    authorEN: "Rainer Maria Rilke"
                },
                {
                    cn: "黄昏是白昼与黑夜之间的叹息。",
                    en: "Dusk is a sigh between day and night.",
                    authorCN: "泰戈尔",
                    authorEN: "Rabindranath Tagore"
                },
                {
                    cn: "在黄昏的余晖中，我发现了一种无可辩驳的自由。",
                    en: "In the afterglow of evening, I discovered an irrefutable freedom.",
                    authorCN: "加缪",
                    authorEN: "Albert Camus"
                }
            ]
        },
        {
            start: 21,
            end: 24,
            items: [
                {
                    cn: "夜是语言停止工作的地方。",
                    en: "Night is where language stops working.",
                    authorCN: "阿多尼斯",
                    authorEN: "Adonis"
                },
                {
                    cn: "星星虽然遥远，但它们的光芒早已抵达。",
                    en: "The stars are distant, but their light has already arrived.",
                    authorCN: "马尔克斯",
                    authorEN: "Gabriel García Márquez"
                },
                {
                    cn: "满地都是六便士，他却抬头看见了月亮。",
                    en: "The ground was full of sixpences, but he looked up and saw the moon.",
                    authorCN: "毛姆",
                    authorEN: "Somerset Maugham"
                }
            ]
        }
    ];

    function getRandomQuoteByHour(hour) {
        const period = QUOTES.find(p => hour >= p.start && hour < p.end);
        if (!period) return null;
        return period.items[Math.floor(Math.random() * period.items.length)];
    }

    window.QuoteService = {
        getQuote(hour) {
            return getRandomQuoteByHour(hour);
        }
    };
})();
