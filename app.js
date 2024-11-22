const messageList = document.querySelector(".chat-box");
const input = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".chat-input button");
const date = new Date();

const responses = {
    Greeting: [
        "Hello there!",
        "Hi! How can I help you today?"
    ],
    Farewell: [
        "Good bye!",
        "Bye! Have a great day!"
    ],
    Default: [
        "I'm afraid I don't have an answer for that. Can you try asking something else?",

    ],
    Joke: [
        "Why did the tomato turn red? Because it saw the salad dressing",
        "How do you organize a space party? You Planet",
        "Why don't scientists trust atoms?Because they make up everything",
        "Why did the coffee file police report? It got mugged",
        "Why did the scarecrow win an award?Because he was outstanding in his field",
        "What do you call a fake noodle? An inpaste.",
        "Why did the math book look sad? Because it had too many problems?",
        "What do you call a boomerang that doesn't come back? A stick.",
        "What did one wall say to the other well? I'll meet you at the corner",
        "Why do yo seagulls fly over the sea? Because if they flew over the bay,they'd be baegels"
    ],
    Morning: [
        "Good Morning"
    ],
    Night: [
        "Good Night! Have A Sweet Dream..."
    ],
    Time: [
        `Time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    ]
};

sendBtn.addEventListener("click", () => {
    if (input.value !== '') {
        const msg = document.createElement("div");
        msg.classList.add("chat-message", "user-message");
        msg.innerHTML = `
        <div class="chat-message-text">${input.value}</div>
        `;
        messageList.appendChild(msg);

        input.addEventListener("keyup", (e) => {

            if (e.key === "Enter") {
                sendBtn.click();
            }
        });

        const inputText = input.value.toLowerCase();
        let intent = "Default";
        if (inputText.includes("hello") || inputText.includes("hi")) {
            intent = "Greeting";
        } else if (inputText.includes("bye") || inputText.includes("goodbye")) {
            intent = "Farewell"
        } else if (inputText.includes("jokes") || inputText.includes("joke")) {
            intent = "Joke"
        } else if (inputText.includes("morning") || inputText.includes("good morning") || inputText.includes("mornee")) {
            intent = "Morning"
        } else if (inputText.includes("night") || inputText.includes("good night")) {
            intent = "Night"
        } else if (inputText.includes("time") || inputText.includes("hour") || inputText.includes("minute") || inputText.includes("second")) {
            intent = "Time"
        }

        input.value = "";

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses[intent].length);
            const responseText = responses[intent][randomIndex];
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot-message");
            botMessage.innerHTML = `
            <div class="chat-message-text">${responseText}</div>
            `;
            messageList.appendChild(botMessage);
            messageList.scrollTop = messageList.scrollHeight;
        }, 1000)
    }
})