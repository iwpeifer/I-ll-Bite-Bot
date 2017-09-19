var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

const words = require('an-array-of-english-words');

var pluralize = require('pluralize');

var T = new Twit(config);

function chooseWord() {
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
}

function chooseQuestion(word) {
  var sentences = [
    `Ok I'll bite. What exactly is "${word}?"`,
    `Can someone tell me what this "${word}" thing is I keep hearing about?"`,
    `I have no idea what people are talking about whenever they mention "${word}."`,
    `Am I literally the only person who doesn't know what "${word}" is?`,
    `If I hear one more person say the word "${word}" I'm going to fucking scream.`,
    `heard somebody say "${word}" today and I was like wtf?? lol`,
    `Can people PLEASE stop using the word "${word}" all the damn time??`,
    `Since when did "${word}" become a word appropriate for polite conversation?`,
    `Is "${word}" some kind of code word or something?`,
    `lol wtf even is "${word}"`,
    `I'm not sure I know exactly what "${word}" is but I don't like it lol`,
    `If you're the type of person who casually says "${word}" I probably don't like you`,
    `I actually heard someone say the word "${word}" outloud today lol`,
    `Can somebody please tell me wtf "${word}" is???`,
    `is "${word}" considered a bad word yet lol`,
    `WHAT IS ${word.toUpperCase()}???`,
    `this might be a stupid question but what is "${word}" lol`,
    `so I guess "${word}" is the new "${words[Math.floor(Math.random() * words.length)]} now"`,
    `I've made a pact with myself to never use the word "${word}" lol`,
    `If you've ever said the word "${word} unironically please unfollow me"`,
    `I don't "get" ${pluralize(word)}`,
    `NOBODY👏CARES👏ABOUT👏YOUR👏DAMN👏${pluralize(word).toUpperCase()}`,
    `Ok we need to talk about ${pluralize(word)}`,
    `Under neoliberalism, workers are reduced to ${pluralize(word)}`,
    `I have no idea what it means but I love the way "${word}" sounds lol`,
    `Jesus there are so many fucking ${pluralize(word)} in Brooklyn`,
    `Imagine being the type of person who would actually buy a ${word} lol`,
    `Got drunk last night and tried telling an unreceptive stranger about my ${pluralize(word)} lol`,
    `Fuck ${pluralize(word)}`,
    `I hate people who think they sound smart tossing around the word "${word}" lol`,
    `${pluralize(word)} suck ass lol`,
    `You are a literal child if you think "${pluralize(word)}" will save you from the hell that is capitalism`
  ];
  return sentences[Math.floor(Math.random() * sentences.length)];
}

T.post('statuses/update', { status: chooseQuestion(words[Math.floor(Math.random() * words.length)]) }, function(err, data, response) {
  console.log(data)
});
