//通过当前hour时间随机获得相应的quote

(function () {
    const QUOTES = [
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
                }
            ]
        }
    ];

    function getRandomQuoteByHour(hour) {
        const period = QUOTES.find(p => hour >= p.start && hour < p.end);
        if (!period) return null;
        return period.items[Math.floor(Math.random() * period.items.length)];
    }

    function getCachedQuote(hour) {
        const key = `quote-${new Date().toDateString()}-${hour}`;
        const cached = localStorage.getItem(key);
        if (cached) return JSON.parse(cached);

        const quote = getRandomQuoteByHour(hour);
        localStorage.setItem(key, JSON.stringify(quote));
        return quote;
    }

    window.QuoteService = {
        getQuote(hour) {
            return getCachedQuote(hour);
        }
    };
})();
