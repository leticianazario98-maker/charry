const questions = [
  {
    title: "Qual estilo combina mais com sua mãe?",
    options: ["Básico", "Elegante", "Moderno", "Fashion"]
  },
  {
    title: "Ela prefere roupas:",
    options: ["Confortáveis", "Clássicas", "Diferentes", "Tendência"]
  }
];

let current = 0;

const screens = document.querySelectorAll(".quiz-screen");

function showScreen(index) {
  screens.forEach(s => s.classList.remove("active"));
  screens[index].classList.add("active");
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById("questionTitle").innerText = q.title;

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => next();
    container.appendChild(div);
  });
}

function next() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("resultTitle").innerText = "Resultado pronto!";
  document.getElementById("resultDescription").innerText = "Você acertou o estilo ideal.";
  showScreen(2);
}

document.getElementById("startQuiz").onclick = () => {
  showScreen(1);
  renderQuestion();
};

document.getElementById("prevBtn").onclick = () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
};

document.getElementById("restartBtn").onclick = () => {
  current = 0;
  showScreen(0);
};
