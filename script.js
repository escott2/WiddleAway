// Variables ********************************

const topicTextbox = document.querySelector('.js-topic__textbox');
const topicButton = document.querySelector('.js-topic__button');
let topicTextboxValue = null;
let topicArray = [];
const topicList = document.querySelector('.js-topic__list');
let storedTopics = null;


// Event listeners ***************************

topicButton.addEventListener('click', saveTopic);


// Functions **********************************

window.addEventListener('load', handlePageLoad);

function handlePageLoad() {
    getLocalStorage();
    topicArray.push(...storedTopics);
    displaySavedTopics();
}

/** Adds topic entered by user to array */
function saveTopic(e) {
    e.preventDefault();
    topicTextboxValue = topicTextbox.value;
    topicTextbox.value = "";
    topicArray.push(topicTextboxValue);

    setLocalStorage();
    getLocalStorage();
    displaySavedTopics();
}

/** Appends saved topics to UI */
function displaySavedTopics() {
    removeAllChildNodes(topicList);

    for (let i = 0; i < storedTopics.length; i++) {
        const listItem = document.createElement('li');
        const listItemText = document.createTextNode(storedTopics[i]);
        listItem.appendChild(listItemText);
        topicList.appendChild(listItem);
    }
}

/** Removes all child nodes from parent */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//When there are topics displayed in UI,add buttons to be able to edit or manipulate topics
// function displayTopicOptions() {
//     if (topicArray.length > 0) {
//         const optionContainer = document.createElement("div");

//     }
// }


//Timer functionality


/** saves topics to local storage */
function setLocalStorage() {
    localStorage.setItem('topics', JSON.stringify(topicArray)); 
}

/** retrieves topics from local storage */
function getLocalStorage() {
    storedTopics = JSON.parse(localStorage.getItem('topics'));
}

