const myButton = document.getElementById('demo');

const data = [
  {  "id" : 1,
    "title": "What is the past form of 'eat'?",
    "options": ["eat", "ate", "eaten", "have ate"],
    "answer": "ate"
  },
  {
    "title": "Which sentence is present continuous tense?",
    "options": [
      "I eat rice",
      "I am eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I am eating rice"
  },
  {
    "title": "Which sentence is present perfect tense?",
    "options": [
      "I eat rice",
      "I am eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I have eaten rice"
  },
  {
    "title": "Which sentence is present perfect continuous tense?",
    "options": [
      "I eat rice",
      "I am eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I have been eating rice for 1 year"
  },
  {
    "title": "Which sentence is past continuous tense?",
    "options": [
      "I eat rice",
      "I was eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I was eating rice"
  },
  {
    "title": "Which sentence is past perfect tense?",
    "options": [
      "I eat rice",
      "I was eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I have eaten rice"
  },
  {
    "title": "Which sentence is past perfect continuous tense?",
    "options": [
      "I eat rice",
      "I was eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I have been eating rice for 1 year"
  },
  {
    "title": "Which sentence is future continuous tense?",
    "options": [
      "I eat rice",
      "I will be eating rice",
      "I have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I will be eating rice"
  },
  {
    "title": "Which sentence is future perfect tense?",
    "options": [
      "I eat rice",
      "I will be eating rice",
      "I will have eaten rice",
      "I have been eating rice for 1 year"
    ],
    "answer": "I will have eaten rice"
  },
  {
    "title": "Which sentence is future perfect continuous tense?",
    "options": [
      "I eat rice",
      "I will be eating rice",
      "I will have eaten rice",
      "I will have been eating rice for 1 year"
    ],
    "answer": "I will have been eating rice for 1 year"
  }
];




function createData() {
  const loadData = document.getElementById('main-section');


  loadData.innerHTML = `${data.map(function (loadDatas) {
    console.log(loadDatas);
    return `      <div id="form-list" class="left">
    <h4>1. ${loadDatas.title}</h4>
    <form> 
    ${loadDatas.options
    .map(option => {
      console.log(option);
      return `<input type="radio" name="gender" value="male" checked>
      <label for="">${option}</label> <br>
       `
    }).join(" ") }
     
  </form>
</div> `
  })}`;


};


createData()

