const pollTitile = document.querySelector('#poll__title');
const pollAnswer = document.querySelector('#poll__answers');
const voteResult = document.createElement('div');
let voteId;

function createBtn(text, id) {
  const btn = document.createElement('button');
  btn.classList.add('poll__answer');
  btn.textContent = text;
  btn.dataset.id = id;

  btn.addEventListener('click', send);

  pollAnswer.append(btn);
}

function addResult(answer, votes, percent) {
  const result = document.createElement('div');
  result.innerHTML = `
    <span>${answer}: <b>${votes} (${percent}%)</b></span>
  `;
  voteResult.append(result);
}

fetch('https://netology-slow-rest.herokuapp.com/poll.php')
  .then(res => res.json())
  .then(({data, id}) => {
    pollTitile.textContent = data.title;
    const answers = data.answers;
    voteId = id;
    answers.forEach((answer, i) => createBtn(answer, i));
  })

async function send({target}) {
  let res = await fetch('https://netology-slow-rest.herokuapp.com/poll.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `vote=${voteId}&answer=${target.dataset.id}`
  })

  const {stat} = await res.json();
  const votesCount = stat.reduce((acc, {votes}) => acc + votes, 0);
  for (const {answer, votes} of Object.values(stat)) {
    addResult(answer, votes, (votes / votesCount * 100).toFixed(2))
  }
  pollAnswer.replaceWith(voteResult);
}