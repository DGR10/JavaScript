const jokeUrl = 'https://api.chucknorris.io/jokes/random';

fetch(jokeUrl).then( resp => {
    console.log(resp);
    resp.json().then(data => {
        console.log(data.id);
        console.log(data.value);
    });
});
fetch(jokeUrl)
    .then(resp => resp.json())
    .then(console.log);