const persons = document.getElementById('persons');
const stships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters() {
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets/')
    ])
    .then(data => {
        persons.style.fontSize = '5em';
        stships.style.fontSize = '5em';
        planets.style.fontSize = '5em'; // Para replicar uma linha no VScode, basta usar shift+alt+direcional

        persons.innerHTML = data[0].count;
        stships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;
    })
    .catch(err => console.log('Erro:', err));
};

function getData(param) {
    return fetch(`https://swapi.dev/api/${param}`) //Antes do $ é a base url, apos o $ é onde será especificado sobre o que será a requisição.
            .then(res => res.json());
};

// Para consumir as API's será utilizado a API do fetch que disponibiliza o método global fetch
// que faz requisições HTTP

function loadPhrase() {
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');

    return fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
            .then(data => data.json())
            .then(json => {
                btn.innerHTML = 'Ver mais uma frase!';
                phrase.innerHTML = `"${json.content}"` //Colocando dessa forma, é possivel realizar operações javascript

                phrase.animate([
                    { transform: 'translateY(-70px)' },
                    { transform: 'translateY(-0px)' },
                ], {
                    duration: 500
                })
            })
            .catch(err => console.log('Erro: ', err))
};