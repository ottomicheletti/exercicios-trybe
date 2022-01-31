const getCrypto = async() => {
  const ulEl = document.querySelector('ul');

  try {
    const arrayCrypto = await (await fetch(`https://api.coincap.io/v2/assets`)).json();
    const {data} = arrayCrypto;
    
    data.forEach((element, index) => {
      if(index < 10) {
        const li = document.createElement('li');
        li.textContent = `${element.name} (${element.symbol}): US$ ${parseFloat(element.priceUsd).toFixed(2)}`;
        ulEl.appendChild(li);
      };
    });  
  } catch (error) {
    alert('Erro ao conectar API. Tente novamente dentro de alguns segundos!'); 
  }  
};

getCrypto();