'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Random Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The flag of Switzerland consists of a red flag with a white cross (a bold, equilateral cross) in the centre. It is one of only two square sovereign-state flags, the other being the flag of Vatican City.",
    "Abraham Lincoln grew up in a log cabin in rural Kentucky and went on to become the 16th President of the United States. On January 1, 1863, he issued the Emancipation Proclamation abolishing slavery. He was assassinated on April 15, 1865.",
    "Basketball, volleyball and racquetball are all Y M C A inventions. The Auburn Y M C A's History Committee unearthed these stories about the creation of these sports. Basketball was invented at the Y M C A in Springfield, Mass. in 1891 by Dr. James Naismith, a clergyman, educator and physician.",
    "On Mars, the Sun appears about half the size as it does on Earth.",
    "Apollo 8, the second human spaceflight mission in the United States Apollo space program, was launched on December 21, 1968, and became the first manned spacecraft to leave Earth orbit, reach the Earth's Moon, orbit it and return safely to Earth.",
    "The first city to reach a population of 1 million people was Rome, Italy in 133 B.C. London, England reached the mark in 1810 and New York City, USA made it in 1875. Today, there are over 300 cities in the world that boast a population in excess of 1 million.",
    "Human cells have 23 pairs of chromosomes (22 pairs of autosomes and one pair of sex chromosomes), giving a total of 46 per cell. In addition to these, human cells have many hundreds of copies of the mitochondrial genome.",
    "The Sun contains 99.86% of the mass in the Solar System.",
    "Greece is a country located in Southern Europe, its mainland located at the southern end of the Balkan Peninsula. Greece is surrounded on the north by Bulgaria, the Republic of Macedonia and Albania; to the west by the Ionian Sea; to the south by the Mediterranean Sea and to the east by the Aegean Sea and Turkey.",
    "The French and Indian War was the North American conflict that was part of a larger imperial conflict between Great Britain and France known as the Seven Years' War. The French and Indian War began in 1754 and ended with the Treaty of Paris in 1763.",
    "Most octopuses can eject a thick, blackish ink in a large cloud to aid in escaping from predators. The main coloring agent of the ink is melanin, which is the same chemical that gives humans their hair and skin color.",
    "Sleepless in Seattle is a 1993 American romantic comedy film directed and co-written by Nora Ephron. Based on a story by Jeff Arch, it stars Tom Hanks as Sam Baldwin and Meg Ryan as Annie Reed.",
    "Bubble tea, also known as pearl milk tea or boba milk tea, is a Taiwanese tea-based drink invented in Taichung, Taiwan, during the 1980s."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your random fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a random fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};