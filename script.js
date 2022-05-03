// Variables ********************************

const topicTextbox = document.querySelector('.js-topic__textbox');
const topicButton = document.querySelector('.js-topic__button');
let topicTextboxValue = null;
const topicArray = [];
const topicList = document.querySelector('.js-topic__list');


// Event listeners ***************************

topicButton.addEventListener('click', saveTopic);


// Functions **********************************

/** Adds topic entered by user to array */
function saveTopic(e) {
    e.preventDefault();
    topicTextboxValue = topicTextbox.value;
    topicTextbox.value = "";
    topicArray.push(topicTextboxValue);

    displaySavedTopics();
    setLocalStorage();
    getLocalStorage();

}

/** Appends saved topics to UI */
function displaySavedTopics() {
    removeAllChildNodes(topicList);

    for (let i = 0; i < topicArray.length; i++) {
        const listItem = document.createElement('li');
        const listItemText = document.createTextNode(topicArray[i]);
        listItem.appendChild(listItemText);
        topicList.appendChild(listItem);
        console.log("test");
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


//Save to localStorage
function setLocalStorage() {
    localStorage.setItem('topics', JSON.stringify(topicArray)); 
}

function getLocalStorage() {
    const storedTopics = JSON.parse(localStorage.getItem('topics'));
    console.log(storedTopics);
}

