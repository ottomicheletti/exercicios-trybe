const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async() => {
  const jokeText = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
    
  const response = await fetch(API_URL, myObject);
  const object = await response.json();
  
  const { joke } = object;

  jokeText.innerHTML = `${joke}`
  
};

window.onload = () => fetchJoke();
