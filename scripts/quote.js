document.addEventListener("DOMContentLoaded", function () {
    let elementBefore =
        document.getElementById("site-info") ||
        document.getElementById("post-info") ||
        document.getElementById("site-title");

    if (!elementBefore) return;

    console.log("Inserting quote after:", elementBefore);

    // 创建 quote box
    const quoteBox = document.createElement("div");
    quoteBox.id = "quote-box";
    elementBefore.appendChild(quoteBox); // 插入到 site-info 末尾

    // 名言数据
    const quotes = [
        { text: "一个人知道自己为什么而活，就可以忍受任何一种生活。", source: "尼采" },
        { text: "回忆会从内侧温暖你的身体，同时从内侧剧烈切割你的身体", source: "《海边的卡夫卡》" },
        { text: "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.", source: "The Catcher in the Rye" },
        { text: "Car rien n'est gratuit dans la vie", source: "Ratatouille" },
    ];

    let shuffledQuotes = [];
    let index = 0;

    // 打乱数组的函数（Fisher–Yates 洗牌算法）
    function shuffle(array) {
        const copy = array.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function showQuote() {
        if (index === 0) {
            shuffledQuotes = shuffle(quotes);
        }

        const quote = shuffledQuotes[index];
        quoteBox.innerHTML = `"${quote.text}"<br><span style="font-size: 0.9em;">— ${quote.source}</span>`;
        quoteBox.style.opacity = 1;

        setTimeout(() => {
            quoteBox.style.opacity = 0;
        }, 8000);

        index = (index + 1) % shuffledQuotes.length;
    }

    showQuote();
    setInterval(showQuote, 10000);
});