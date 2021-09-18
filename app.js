const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

async function main() {
    try{
    let word = document.getElementById('input-search-term').value
    let response = await fetch(BASE_URL + word)
    let data = await response.json()
    
    document.getElementById('word').innerText = data[0].word
    document.getElementById('phonetic').innerText = data[0].phonetics[0].text
    let pronun_audio = 'https:' + data[0].phonetics[0].audio
    document.getElementById('myAudio').src = pronun_audio
    document.getElementById('origin').innerText = data[0].origin


    for (i=0; i<data[0].meanings.length; i++) {
        for (j=0; j<data[0].meanings[i].definitions.length; j++) {
        var meaning = document.createElement('li');
        
        meaning.innerText = data[0].meanings[i].definitions[j].definition;

        document.getElementById('meanings-list').appendChild(meaning)
        document.getElementById('meanings-list').appendChild(document.createElement('hr'))
        }
    }
    }catch(e){
        location.reload()
        document.getElementById('error-message').innerText = "Couldn't find a definition :("
    }
    
}
    


function playSound() {
    document.getElementById('myAudio').play()
}
