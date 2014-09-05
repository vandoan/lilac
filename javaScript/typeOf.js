var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages


for(var property in languages) {
    if( typeof languages[property] === "string") {
        console.log(languages[property]); 
    }
}