const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

async function main() {
    try{
    let word = document.getElementById('input-search-term').value
    let response = await fetch(BASE_URL + word)
    let data = await response.json()
    document.getElementById('error-message').innerText = ""

    document.getElementById('word').innerText = data[0].word
    document.getElementById('phonetic').innerText = data[0].phonetics[0].text
    let pronun_audio = 'https:' + data[0].phonetics[0].audio
    document.getElementById('myAudio').src = pronun_audio
    document.getElementById('origin').innerText = data[0].origin
    
    let list_element = document.getElementById('meanings-list')

    // reset list contents
    while (list_element.firstChild) {
        list_element.removeChild(list_element.lastChild);
      }

    for (i=0; i<data[0].meanings.length; i++) {
        for (j=0; j<data[0].meanings[i].definitions.length; j++) {
        var meaning = document.createElement('li');
        
        meaning.innerText = data[0].meanings[i].definitions[j].definition;

        list_element.appendChild(meaning)
        list_element.appendChild(document.createElement('hr'))
        }
    }
    }catch(e){
        document.getElementById('error-message').innerText = "Definition not Found :("
        document.getElementById('word').innerText = "";
        document.getElementById('phonetic').innerText = "";
        document.getElementById('myAudio').src = "";
        document.getElementById('origin').innerText = "";
        let parent = document.querySelector("ol");
        let child = parent.lastElementChild;  
        while (child) { 
            parent.removeChild(child); 
            child = parent.lastElementChild; 
        } 
    }
    
}
    


function playSound() {
    document.getElementById('myAudio').play()
}
