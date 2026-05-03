async function fetchData() {
    const input = document.getElementById('input').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const imageUrl = data.sprites.front_default;
        
        const pokemonImage = document.getElementById('pokemon-image');
        pokemonImage.src = imageUrl;
        pokemonImage.style.display = 'block';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}