const arrayOfQuotes = [
    {'author': 'Archie Griffen', 
     'quote': 'It\'s not the size of the dog in the fight, but the size of the fight in the dog.'
    },
    {'author': 'Arnold H Glasgow', 
     'quote': 'Nothing lasts forever. Not even your troubles.'
    },
    {'author': 'Albert Einstein', 
     'quote': 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle'
    },
    {'author': 'Mary Tyler Moore', 
     'quote': 'Take chances, make mistakes. That\'s how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.'
    },
    {'author': 'Margaret Woodhouse', 
     'quote': 'Being strong means rejoicing in who you are, complete with imperfections.'
    },
    {'author': 'Nora Roberts', 
     'quote': 'If you don\'t go after what you want, you\'ll never have it. If you don\'t ask, the answer is always no. If you don\'t step forward, you\'re always in the same place.'
    },
    {
        'author': 'Michael Jordan',
        'quote': 'I\'ve missed more than 9,000 shots in my career. I\'ve lost almost 300 games. Twenty-six times I\'ve been trusted to take the game-winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.'
    },
    {
        'author': 'May V Smith',
        'quote': 'The only place you find success before work is in the dictionary.'
    },
    {
        'author': 'Les Brown',
        'quote': 'You\'re going to fail your way to success, you have nothing to be ashamed of so keep your head up. It\'s much easier to come up with excuses of why you can\'t do it. If you do what is easy your life will be hard.'
    },
    {
        'author': 'George Bernard Shaw',
        'quote': 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.'
    },
    {
        'author': 'Eleanor Roosevelt',
        'quote': 'Nobody can make you feel inferior without your consent.'
    },
    {
        'author': 'Sally Field',
        'quote': 'It took me a long time not to judge myself through someone else\'s eyes.'
    },
    {
        'author': 'Allen H Neuharth',
        'quote': 'I quit being afraid when my first venture failed and the sky didn\'t fall down.'
    },
    {
        'author': 'George Weinberg',
        'quote': 'Hope never abandons you, you abandon it.'
    },
    {
        'author': 'Tony Robbins',
        'quote': 'The only thing keeping you from getting what you want is the story you keep telling yourself about why you don\'t have it. People who are willing to die to succeed will tend to succeed.'
    },
    {
        'author': 'Elisabeth Kübler-Ross',
        'quote': 'People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within.'
    },
    {
        'author': 'Bruce Barton',
        'quote': 'Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance.'
    },
    {
        'author': 'Mary Kay Ash',
        'quote': 'Aerodynamically the bumblebee shouldn\'t be able to fly, but the bumblebee doesn\'t know that so it goes on flying anyway.'
    },
    {
        'author': 'Eric Thomas',
        'quote': 'The secret is in not giving up, of all the greats they didn\'t quit. If you quit I guarantee you\'re gonna fail, but you don\'t know what\'s gunna happen if you don\'t give in.'
    },
    {
        'author': 'Will Smith',
        'quote': 'Just decide; what\'s it\'s gonna be, who you\'re gonna be and how your gonna do it, and then from that point, the universe will get out of your way.'
    }
];

// Retrive HTML element
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let button = document.querySelector('#generator');

// Set Default Quote
quote.textContent = `\"${arrayOfQuotes[2].quote}\"`;
author.textContent = `-${arrayOfQuotes[2].author}`;

// Get Random Quote and Author from Array onClick Event
button.addEventListener('click', function(e){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    quote.textContent = `\"${arrayOfQuotes[random].quote}\"`;
    author.textContent = `-${arrayOfQuotes[random].author}`;
})