//translation dictionaries
const tagalogToEnglish = {
    //greetings
    'hoy': 'hello',
    'hey' : 'hi',
    'kumusta': 'how are you',
    'kamusta': 'how are you',
    'mabuhay': 'hello',
    'mahal kita': 'i love you',
    
    //questions
    'ano ang pangalan mo': 'what is your name',
    'sino ka': 'who are you',
    'anong oras na': 'what time is it',
    'anong petsa ngayon': 'what date is it',
    'paano ang panahon': 'how is the weather',
    'sino ang friends mo': 'who is your friend',
    'sino ang kaibigan mo': 'who is your friend',
    'tulong': 'help',
    'salamat': 'thank you',
    'salamat po': 'thank you',
    'maraming salamat': 'thank you very much',
    'sabihin mo sa akin ang tungkol sa iyong sarili': 'tell me about yourself',
    'sino ang jowa mo': 'who is your girlfriend',
    
    //farewells
    'paalam': 'goodbye',
    'babye': 'bye',
    'ingat': 'goodbye',
    'kita tayo': 'see you later'
};

const englishToTagalog = {
    //greetings
    "Hello there! Nice to meet you!": "Hoy ka din hahaha natutuwa akong makilala ka!",
    "Hi there! Nice to meet you!": "Hey! natutuwa akong makilala ka!",
    "I'm doing great, thanks for asking! How are you?": "Ayos lang ako, salamat sa pagtatanong! Ikaw naman?",
    "Thanks for loving me!": "Salamat sa pagmamahal sa akin!",
    
    //questions
    "I am Greendee Roper, your friendly chatbot!": "Ako si Greendee Roper, ang inyong kaibigan na chatbot!",
    "I don't have access to weather data, but I hope it's nice where you are!": "Wala akong access sa weather data, pero sana maganda ang panahon diyan sa inyo!",
    "I can chat with you about various topics. Try asking me about the time, date, or just say hello!": "Pwede tayong mag-usap tungkol sa iba't ibang bagay. Subukan mo akong tanungin tungkol sa oras, petsa, o magkumusta lang!",
    "I have many friends! Some of them are Rhondel Colecha, Rodgie Colecha, Ruvic Varona, and many more! They are all wonderful people!": "Marami akong kaibigan! Kabilang sa kanila sina Rhondel Colecha, Rodgie Colecha, Ruvic Varona, at marami pang iba! Sila ay mga kahanga-hangang tao!",
    "My name is Greendee Roper B. Panogalon, and I recently graduated from Davao del Norte State College. I am 22 years old and currently living in Mabuhay, Carmen, Davao del Norte. I am a Full Stack Developer with experience in both front-end and back-end technologies such as React, Node.js, Express.js, and MongoDB. I also have experience using Laravel before shifting to Node.js. During my studies, I worked on several projects—both for my school and for students from other schools. Some of them commissioned me to develop their capstone systems, and I am proud to say that those systems helped them successfully graduate. One of my clients even came from my own school and has since graduated as well. During my OJT at DNSC, I worked on real-world systems, I contributed to developing a system as part of DNSC's features, and I also managed the DNSC server. Now, I am looking to join your company where I can contribute my frontend development skills and grow professionally while helping support your mission and goals.": 
        "Ang pangalan ko ay Greendee Roper B. Panogalon, at ako ay nagtapos kamakailan sa Davao del Norte State College. Ako ay 22 taong gulang at kasalukuyang nakatira sa Mabuhay, Carmen, Davao del Norte. Isa akong Full Stack Developer na may karanasan sa parehong front-end at back-end na teknolohiya gaya ng React, Node.js, Express.js, at MongoDB. Mayroon din akong karanasan sa paggamit ng Laravel bago lumipat sa Node.js. Sa aking pag-aaral, gumawa ako ng ilang proyekto—kapwa para sa aking paaralan at para sa mga mag-aaral mula sa ibang mga paaralan. Inatasan ako ng ilan sa kanila na bumuo ng kanilang mga capstone system, at ipinagmamalaki kong sabihin na ang mga sistemang iyon ay nakatulong sa kanilang matagumpay na makapagtapos. Ang isa sa mga kliyente ko ay nanggaling pa sa sarili kong paaralan at nagtapos na rin. Sa panahon ng aking OJT sa DNSC, nagtrabaho ako sa mga real-world system, nag-ambag ako sa pagbuo ng isang system bilang bahagi ng mga feature ng DNSC, at pinamahalaan ko rin ang DNSC server. Ngayon, naghahanap ako na sumali sa iyong kumpanya kung saan maaari akong mag-ambag ng aking mga kasanayan sa pagpapaunlad sa frontend at lumago nang propesyonal habang tumutulong sa pagsuporta sa iyong misyon at mga layunin.",
    "My girlfriend is Meriam Apatan Cerna, a wonderful person who supports me in everything I do!": "Ang jowa ko ay si Meriam Apatan Cerna, isang kahanga-hangang babae na sumusuporta sa akin sa lahat ng aking ginagawa!",


    //farewells
    "Goodbye! It was nice chatting with you!": "Paalam! Natuwa akong nakausap ka!",
    "You're welcome! Happy to help!": "Walang anuman! Natutuwa akong makatulong!",
    "That's interesting! Tell me more.": "Kawili-wili naman! Sabihin mo pa.",
    "I see. Can you elaborate on that?": "Ah ganon. Pwede mo bang i-explain pa?",
    "That's a good point. What else would you like to know?": "Magandang punto yan. Ano pa ang gusto mong malaman?",
    "I'm not sure about that, but I'd love to hear your thoughts!": "Hindi ako sigurado diyan, pero gusto kong marinig ang inyong mga saloobin!",
    "Interesting question! What made you think about that?": "Kawili-wiling tanong! Ano ang naging dahilan para isipin mo yan?",
    "I understand. Is there anything specific you'd like to discuss?": "Naiintindihan ko. May specific ba na gusto mong pag-usapan?"
};

//enhanced Tagalog word detection - including common Tagalog words that might be mixed with English
const tagalogIndicators = [
    'ako', 'ikaw', 'siya', 'kami', 'kayo', 'sila', 'ang', 'ng', 'sa', 'ay', 'si', 'ni', 'kay', 'para',
    'ano', 'sino', 'kailan', 'saan', 'bakit', 'paano', 'ilan', 'alin',
    'kumusta', 'kamusta', 'mabuhay', 'salamat', 'paalam', 'oo', 'hindi', 'hindi po', 'opo',
    'mahal', 'gusto', 'ayaw', 'pwede', 'dapat', 'kailangan', 'maaari',
    'maganda', 'pangit', 'mabait', 'masama', 'malaki', 'maliit',
    'kaibigan', 'pamilya', 'mga', 'naman', 'din', 'rin', 'lang', 'lamang',
    'dito', 'doon', 'diyan', 'rito', 'roon', 'riyan',
    'ngayon', 'bukas', 'kahapon', 'mamaya', 'kanina'
];

//english indicators to help determine if message is primarily English
const englishIndicators = [
    'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'can', 'may', 'might',
    'who', 'what', 'when', 'where', 'why', 'how', 'which', 'whose',
    'hello', 'hi', 'bye', 'goodbye', 'thank', 'thanks', 'please', 'sorry',
    'your', 'my', 'his', 'her', 'our', 'their', 'this', 'that', 'these', 'those',
    'friends', 'friend', 'time', 'date', 'weather', 'help', 'name'
];

//function to detect if input contains Tagalog or should be responded to in Tagalog
const shouldRespondInTagalog = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    
    //check for exact phrase matches first
    const tagalogPhrases = Object.keys(tagalogToEnglish);
    for (const phrase of tagalogPhrases) {
        if (lowerMessage === phrase || lowerMessage.includes(phrase)) {
            return true;
        }
    }
    
    //check if message starts with common Tagalog question words
    const tagalogQuestionStarters = ['sino', 'ano', 'kailan', 'saan', 'bakit', 'paano', 'ilan', 'alin', 'kumusta', 'kamusta'];
    for (const starter of tagalogQuestionStarters) {
        if (lowerMessage.startsWith(starter)) {
            return true;
        }
    }
    
    //check for ñ character (common in Filipino)
    if (/[ñ]/.test(message)) {
        return true;
    }
    
    // count Tagalog and English indicators in the message
    let tagalogWordCount = 0;
    let englishWordCount = 0;
    const words = lowerMessage.split(/\s+/);
    
    for (const word of words) {
        if (tagalogIndicators.includes(word)) {
            tagalogWordCount++;
        }
        if (englishIndicators.includes(word)) {
            englishWordCount++;
        }
    }
    
    //decision logic:
    // 1. if message starts with English question words, respond in English
    const englishQuestionStarters = ['who', 'what', 'when', 'where', 'why', 'how', 'which'];
    for (const starter of englishQuestionStarters) {
        if (lowerMessage.startsWith(starter)) {
            //only respond in English if there are more English words than Tagalog
            return tagalogWordCount > englishWordCount;
        }
    }
    
    // 2. if more Tagalog words than English words, respond in Tagalog
    if (tagalogWordCount > englishWordCount) {
        return true;
    }
    
    // 3. if equal or more English words, respond in English
    return false;
};

//function to translate Tagalog to English (handles mixed languages)
const translateTagalogToEnglish = (message) => {
    const lowerMessage = message.toLowerCase().trim();
    
    //check for exact phrase matches first (longest phrases first)
    const sortedPhrases = Object.entries(tagalogToEnglish).sort((a, b) => b[0].length - a[0].length);
    
    for (const [tagalog, english] of sortedPhrases) {
        if (lowerMessage === tagalog) {
            return english;
        }
    }
    
    //if no exact match, check if message contains any phrase
    for (const [tagalog, english] of sortedPhrases) {
        if (lowerMessage.includes(tagalog)) {
            return english;
        }
    }
    
    //handle mixed language patterns
    let translatedMessage = lowerMessage;
    
    //replace common Tagalog words with English equivalents
    const commonTranslations = {
        'sino': 'who',
        'ano': 'what',
        'kailan': 'when',
        'saan': 'where',
        'bakit': 'why',
        'paano': 'how',
        'ang': 'the',
        'mga': '',  // plural marker, remove
        'friends': 'friends',
        'kaibigan': 'friends',
        'kaibigan mo': 'your friends',
        'mo': 'your',
        'ko': 'my',
        'niya': 'his/her',
        'namin': 'our',
        'ninyo': 'your',
        'nila': 'their'
    };
    
    //handle specific phrases first
    if (translatedMessage.includes('kaibigan')) {
        translatedMessage = translatedMessage.replace(/kaibigan/g, 'friends');
    }
    
    for (const [tagalog, english] of Object.entries(commonTranslations)) {
        translatedMessage = translatedMessage.replace(new RegExp(`\\b${tagalog}\\b`, 'g'), english);
    }
    
    return translatedMessage.trim();
};

//function to translate English response to Tagalog
const translateResponseToTagalog = (englishResponse) => {
    //check for exact matches first (case-insensitive)
    const exactMatch = Object.keys(englishToTagalog).find(key => 
        key.toLowerCase() === englishResponse.toLowerCase()
    );
    
    if (exactMatch) {
        return englishToTagalog[exactMatch];
    }
    
    //check for partial matches for key phrases
    const lowerResponse = englishResponse.toLowerCase();
    
    if (lowerResponse.includes('greendee roper') && lowerResponse.includes('chatbot')) {
        return "Ako si Greendee Roper, ang inyong kaibigan na chatbot!";
    }
    
    //if no match found, provide a generic Tagalog response
    return "Salamat sa inyong mensahe! Patuloy tayong mag-usap!";
};

//function to get current time in Tagalog
const getCurrentTimeTagalog = () => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    return `Ang oras ngayon ay ${time}`;
};

//function to get current date in Tagalog
const getCurrentDateTagalog = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    return `Ang petsa ngayon ay ${date}`;
};

//function to get current time in English with Tagalog translation
const getCurrentTimeWithTranslation = (shouldUseTagalog) => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    if (shouldUseTagalog) {
        return `Ang oras ngayon ay ${time}`;
    } else {
        return `The current time is ${time}`;
    }
};

//function to get current date in English with Tagalog translation
const getCurrentDateWithTranslation = (shouldUseTagalog) => {
    const now = new Date();
    const date = now.toLocaleDateString();
    if (shouldUseTagalog) {
        return `Ang petsa ngayon ay ${date}`;
    } else {
        return `Today's date is ${date}`;
    }
};

export const getBotResponse = (userMessage) => {
    const shouldUseTagalog = shouldRespondInTagalog(userMessage);
    
    //if input contains Tagalog, translate to English first
    let processedMessage = shouldUseTagalog ? 
        translateTagalogToEnglish(userMessage) : 
        userMessage.toLowerCase();
    
    let response = "";
    
    //handle special Tagalog-specific time and date requests
    if (shouldUseTagalog) {
        if (userMessage.toLowerCase().includes('anong oras') || userMessage.toLowerCase().includes('oras na')) {
            return getCurrentTimeTagalog();
        } else if (userMessage.toLowerCase().includes('anong petsa') || userMessage.toLowerCase().includes('petsa ngayon')) {
            return getCurrentDateTagalog();
        }
    }
    
    //-------process the message with existing logic -----

    //greetings and common phrases
    if (processedMessage.includes('hello')) {
        response = "Hello there! Nice to meet you!";
    } else if (processedMessage.includes('hi')) {
        response = "Hi there! Nice to meet you!";
    } else if (processedMessage.includes('how are you')) {
        response = "I'm doing great, thanks for asking! How are you?";
    } else if (processedMessage.includes('i love you')) {
        response = "Thanks for loving me!";
    }

    //questions about the bot
    else if (processedMessage.includes('what is your name') || processedMessage.includes('who are you')) {
        response = "I am Greendee Roper, your friendly chatbot!";
    } else if (processedMessage.includes('time')) {
        response = getCurrentTimeWithTranslation(shouldUseTagalog);
        return response; //return directly since translation is handled
    } else if (processedMessage.includes('date')) {
        response = getCurrentDateWithTranslation(shouldUseTagalog);
        return response; //return directly since translation is handled
    } else if (processedMessage.includes('weather')) {
        response = "I don't have access to weather data, but I hope it's nice where you are!";
    } else if (processedMessage.includes('help')) {
        response = "I can chat with you about various topics. Try asking me about the time, date, or just say hello!";
    } else if ((processedMessage.includes('who') && processedMessage.includes('girlfriend')) || 
        (processedMessage.includes('who') && processedMessage.includes('jowa'))) {
        response = "My girlfriend is Meriam Apatan Cerna, a wonderful person who supports me in everything I do!";
    }  else if (processedMessage.includes('who') && (processedMessage.includes('friend') || processedMessage.includes('friends'))) {
        response = "I have many friends! Some of them are Rhondel Colecha, Rodgie Colecha, Ruvic Varona, and many more! They are all wonderful people!";
    } else if (processedMessage.includes('tell me about yourself')) {
        response = "My name is Greendee Roper B. Panogalon, and I recently graduated from Davao del Norte State College. I am 22 years old and currently living in Mabuhay, Carmen, Davao del Norte. I am a Full Stack Developer with experience in both front-end and back-end technologies such as React, Node.js, Express.js, and MongoDB. I also have experience using Laravel before shifting to Node.js. During my studies, I worked on several projects—both for my school and for students from other schools. Some of them commissioned me to develop their capstone systems, and I am proud to say that those systems helped them successfully graduate. One of my clients even came from my own school and has since graduated as well. During my OJT at DNSC, I worked on real-world systems, I contributed to developing a system as part of DNSC's features, and I also managed the DNSC server. Now, I am looking to join your company where I can contribute my frontend development skills and grow professionally while helping support your mission and goals."
    } 


    // farewells and gratitude
    else if (processedMessage.includes('bye') || processedMessage.includes('goodbye')) {
        response = "Goodbye! It was nice chatting with you!";
    } else if (processedMessage.includes('thank')) {
        response = "You're welcome! Happy to help!";
    } else {
        const responses = [
            "That's interesting! Tell me more.",
            "I see. Can you elaborate on that?",
            "That's a good point. What else would you like to know?",
            "I'm not sure about that, but I'd love to hear your thoughts!",
            "Interesting question! What made you think about that?",
            "I understand. Is there anything specific you'd like to discuss?"
        ];
        response = responses[Math.floor(Math.random() * responses.length)];
    }
    
    // DEBUG: Console log to help debug
    console.log('Original message:', userMessage);
    console.log('Should use Tagalog:', shouldUseTagalog);
    console.log('Processed message:', processedMessage);
    console.log('English response:', response);
    
    //if the original input should be responded to in Tagalog, translate the response
    if (shouldUseTagalog) {
        const tagalogResponse = translateResponseToTagalog(response);
        console.log('Tagalog response:', tagalogResponse);
        return tagalogResponse;
    }
    
    return response;
};