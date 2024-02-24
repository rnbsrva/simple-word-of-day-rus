const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv')
dotenv.config()

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, { polling: true });

// Sample data of Russian words with explanations
const russianWords = [
    { word: 'Привет', explanation: 'Hello' },
    { word: 'Солнце', explanation: 'Sun' }, // Level 2 - Moderate
    { word: 'Радость', explanation: 'Joy' }, // Level 3 - Advanced
    { word: 'Путешествие', explanation: 'Journey' }, // Level 2 - Moderate
    { word: 'Дружба', explanation: 'Friendship' }, // Level 1 - Easy
    { word: 'Свобода', explanation: 'Freedom' }, // Level 3 - Advanced
    { word: 'Искусство', explanation: 'Art' }, // Level 3 - Advanced
    { word: 'Океан', explanation: 'Ocean' }, // Level 2 - Moderate
    { word: 'Приключение', explanation: 'Adventure' }, // Level 3 - Advanced
    { word: 'Любовь', explanation: 'Love' }, // Level 1 - Easy
    { word: 'Горизонт', explanation: 'Horizon' }, // Level 2 - Moderate
    { word: 'Творчество', explanation: 'Creativity' } // Level 3 - Advanced
];


const russianWords1 = [
    { word: 'Привет', explanation: 'Hello', sentence: 'Я сказал привет своему другу, когда встретил его на улице.' },
    { word: 'Мир', explanation: 'World', sentence: 'Этот красивый парк является настоящим уголком природного мира.' },
    { word: 'Друг', explanation: 'Friend', sentence: 'Он всегда поддерживает меня, потому что он мой лучший друг.' },
    { word: 'Солнце', explanation: 'Sun', sentence: 'Солнце светит ярко на небе, принося тепло и свет.' },
    { word: 'Луна', explanation: 'Moon', sentence: 'Луна выглядит красиво на ночном небе.' },
    { word: 'Вода', explanation: 'Water', sentence: 'Вода необходима для жизни на Земле.' },
    { word: 'Дом', explanation: 'House', sentence: 'Мой дом находится недалеко от парка.' },
    { word: 'Кошка', explanation: 'Cat', sentence: 'Моя кошка любит играть с мячиком.' },
    { word: 'Собака', explanation: 'Dog', sentence: 'Собака верный друг человека.' },
    { word: 'Цветок', explanation: 'Flower', sentence: 'Эти цветы пахнут очень приятно.' },
];


function getWordsByLevel(level) {
    switch (level) {
        case 'BEGINNER':
            return russianWords1;
        case 'MEDIUM':
            return russianWords2;
        case 'ADVANCED':
            return russianWords3;
        default:
            return [];
    }
}

const russianWords2 = [
    { word: 'Симпатия', explanation: 'Влечение, внутреннее расположение, благожелательное отношение к кому-, чему-л.', sentence: 'У меня к ней симпатия с самого первого взгляда.' },
    { word: 'Уважение', explanation: ' Почтение, почтительное отношение, основанное на признании чьих-л. заслуг, качеств, достоинств и т.п.', sentence: 'Он заслуживает нашего уважения за свою работу.' },
    { word: 'Сожаление', explanation: '1) Чувство печали, огорчения, вызванное утратой, сознанием невозможности изменить или осуществить что-л. 2) Жалость, сочувствие, сострадание к кому-л.', sentence: 'Она выразила искреннее сожаление о своем поведении.' },
    { word: 'Тревога', explanation: '1) Сильное душевное волнение, беспокойство, вызываемое какими-л. опасениями, страхом, неизвестностью. 2) Переполох, суматоха, суета. 3) Сигнал об опасности; состояние такой опасности.', sentence: 'Тревога о его безопасности не покидала ее.' },
    { word: 'Сомнение', explanation: '1) Неуверенность в истинности, возможности чего-л., отсутствие твёрдой веры в кого-, что-л. 2) Затруднение, неясность, возникающие при разрешении какого-л. вопроса.', sentence: 'У меня остались серьезные сомнения по поводу этого решения.' },
    { word: 'Решимость', explanation: 'Смелость, готовность принять и осуществить своё решение.', sentence: 'Его решимость достичь цели вдохновляла всех вокруг.' },
    { word: 'Предвзятость', explanation: '1) Свойство такого отношения к кому-, чему-л., которое не основано на фактах; пристрастность. 2) Сложившееся заранее мнение о ком-, чём-л.; предубеждённость. ', sentence: 'Его решения часто оказывались под влиянием предвзятости.' },
    { word: 'Исполнительность', explanation: 'Отсутствие старательности, точности при исполнении поручений, обязанностей.', sentence: 'Его исполнительность и пунктуальность были хорошо известны.' },
    { word: 'Сдержанность', explanation: 'Способность контролировать свои эмоции и проявлять их умеренно', sentence: 'Его сдержанность делала его непредсказуемым.' }
    // Add more words and explanations as needed
];



const russianWords3 = [
    { word: 'Жалоба', explanation: 'Выражение неудовольствия, сетование по поводу неприятностей, боли и т.п.', sentence: 'Я подал жалобу на качество услуг.' },
    { word: 'Независимость', explanation: 'Состояние не зависимости, свободы', sentence: 'Страна обрела независимость после длительной борьбы.' },
    { word: 'Обязанность', explanation: '1) То, что входит в круг действий, поступков, обязательных для выполнения 2) Необходимые действия, которые требуется совершать при исполнении какой-л. работы. ', sentence: 'Моя обязанность - заботиться о семье.' },
    { word: 'Признание', explanation: 'Официальное подтверждение чего-либо или Общественное уважение, положительная оценка', sentence: 'Его достижения получили признание со стороны экспертов.' },
    { word: 'Потребность', explanation: 'Надобность, нужда в чём-л., требующая удовлетворения.', sentence: 'Удовлетворение потребностей населения - важная задача государства.' },
    { word: 'Справедливость', explanation: 'Беспристрастное, справедливое отношение к кому-либо, чему-либо. ', sentence: 'Справедливость должна быть доступна для всех граждан.' },
    { word: 'Благосостояние', explanation: 'Обеспеченность необходимыми материальными и духовными благами; достаток.', sentence: 'Правительство стремится к повышению благосостояния граждан.' },
    { word: 'Абсурд', explanation: 'ПТо, что противоречит здравому смыслу; нелепость, бессмыслица.', sentence: 'Эти действия выглядят как полный абсурд.' },
    { word: 'Недопустимость', explanation: 'Состояние того, что не может быть допущено', sentence: 'В нашей политике нет места недопустимости коррупции.' },
    { word: 'Преступление', explanation: ' Противозаконное, общественно опасное действие (или бездействие), нарушающее общественный правопорядок и подлежащее уголовной ответственности.', sentence: 'Преступление карается законом.' }
    // Add more words and explanations as needed
];
// Store user states for testing
const userStates = {};

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я буду присылать тебе новые слова на русском с их объяснениями.', {
        reply_markup: {
            keyboard: [['📝 Take a Test']],
            resize_keyboard: true
        }
    });
});

// Handle new word request
bot.onText(/\/newword/, (msg) => {
    const chatId = msg.chat.id;
    const randomIndex = Math.floor(Math.random() * russianWords.length);
    const wordObj = russianWords[randomIndex];
    bot.sendMessage(chatId, `Слово: ${wordObj.word}\nЗначение: ${wordObj.explanation}`);
});


const userLevels = {};

// Handle test request
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.trim();
    if (messageText === '📝 Take a Test') {
        const state = userStates[chatId] || {};
        if (!state.testing) {
            state.testing = true;
            state.currentWordIndex = 0;
            state.correctAnswers = 0; // Initialize correct answers counter
            bot.sendMessage(chatId, `Начинаем тест. Как перевести слово "${russianWords[state.currentWordIndex].word}"?`);
        } else {
            bot.sendMessage(chatId, 'Тест уже идет.');
        }
        userStates[chatId] = state;
    } else if (userStates[chatId]?.testing) {
        const state = userStates[chatId];
        const currentWord = russianWords[state.currentWordIndex];
        if (messageText.toLowerCase() === currentWord.explanation.toLowerCase()) {
            bot.sendMessage(chatId, 'Правильно!');
            state.correctAnswers++; // Increment correct answers counter
        } else {
            bot.sendMessage(chatId, `Неправильно. Правильный ответ: ${currentWord.explanation}`);
        }
        state.currentWordIndex++;
        if (state.currentWordIndex < russianWords.length) {
            bot.sendMessage(chatId, `Следующее слово: ${russianWords[state.currentWordIndex].word}`);
        } else { 
            let level = '';
        if (state.correctAnswers >= 0 && state.correctAnswers <= 4) {
            level = 'BEGINNER';
        } else if (state.correctAnswers >= 5 && state.correctAnswers <= 8) {
            level = 'MEDIUM';
        } else if (state.correctAnswers >= 9 && state.correctAnswers <= 12) {
            level = 'ADVANCED';
        }
        userLevels[chatId] = level;
        bot.sendMessage(chatId, `Тест завершен. Ваш уровень: ${level}.`, {
            reply_markup: {
                keyboard: [['🔍 New Word']],
                resize_keyboard: true
            }
        });
        state.testing = false;
        }
        userStates[chatId] = state;
        scheduleDailyWord(chatId, level); 
    }
});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.trim();
    if (messageText === '🔍 New Word') {
        const level = userLevels[chatId];
        const words = getWordsByLevel(level);
        if (words.length > 0) {
            const randomIndex = Math.floor(Math.random() * words.length);
            const wordObj = words[randomIndex];
            bot.sendMessage(chatId, `Слово: ${wordObj.word}\nЗначение: ${wordObj.explanation}\nИспользование в предложении: ${wordObj.sentence}`);
        } else {
            bot.sendMessage(chatId, 'К сожалению, не удалось найти слова для вашего уровня.');
        }
    }
});


function scheduleDailyWord(chatId, level) {
    schedule.scheduleJob({ hour: 0, minute: 0, second: 30 }, function() {
        const words = getWordsByLevel(level);
        if (words.length > 0) {
            const randomIndex = Math.floor(Math.random() * words.length);
            const wordObj = words[randomIndex];
            bot.sendMessage(chatId, `Word of the day: ${wordObj.word}\nMeaning: ${wordObj.explanation}\nUsage in a sentence: ${wordObj.sentence}`);
        } else {
            bot.sendMessage(chatId, 'Sorry, could not find words for your level.');
        }
    });
}

bot.onText(/\/stop/, (msg) => {
    const chatId = msg.chat.id;
    const job = scheduledJobs[chatId];
    if (job) {
        job.cancel();
        bot.sendMessage(chatId, 'Daily word reminders stopped.');
    }
});