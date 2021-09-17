const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

async function main() {
    let word = document.getElementById('input-search-term').value
    let response = await fetch(BASE_URL + word)
    let data = await response.json()
    document.getElementById('word').innerText = data[0].word
    document.getElementById('phonetic').innerText = data[0].phonetics[0].text
    
}
