



var putQuotes = [

    {'author': '"Mae West"', 
     'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': '"Mahatma Gandhi"', 
     'quote': '“Be the change that you wish to see in the world.”'
    },
 
    {'author': '"Oscar Wilde"', 
        'quote': '“Be yourself; everyone else is already taken.”'
       },
       {'author': '"Frank Zappa"', 
        'quote': '“So many books, so little time.”'
       },
       {'author': '"Marcus Tullius Cicero"', 
        'quote': '“A room without books is like a body without a soul.”'
       },
];


function addQuote(){
    const random = Number.parseInt(Math.random()*putQuotes.length + 1);
    document.querySelector('#demo').textContent = `${putQuotes[random].quote}`;
    document.querySelector('#dimo').textContent = `${putQuotes[random].author}`;
    
}
