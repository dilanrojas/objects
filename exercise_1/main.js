var scores = {
  dilan: 0,
  jeremy: 0,
  manfred: 0,
  sonia: 0,
}

function decreaseScore(user) {
  if (scores[user] == 0) return;
  scores[user]--;
  document.getElementById(`${user}-score`).textContent = scores[user];
  console.log(scores[user]);
}

function increaseScore(user) {
  scores[user]++;
  document.getElementById(`${user}-score`).textContent = scores[user];
  console.log(scores[user]);
}
