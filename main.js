// Milestone 0
const teamMembers = [
  {
    nome: "Pietro Fiori",
    ruolo: "Sviluppatore",
    foto: "https://picsum.photos/200/300",
  },
  {
    nome: "Michela Raffaelli",
    ruolo: "Garden Designer",
    foto: "https://picsum.photos/200/300",
  },
  {
    nome: "Rachele Barros",
    ruolo: "Psicologa",
    foto: "https://picsum.photos/200/300",
  },
];

// Milestone 1
//correzione con forEach
teamMembers.forEach((member) => {
  console.log("Nome: " + member.nome);
  console.log("Ruolo: " + member.ruolo);
  console.log("Foto: " + member.foto);
});

// Milestone 2

const teamContainer = document.getElementById("team-container");

teamMembers.forEach((member) => {
  const memberInfo = document.createElement("div");
  memberInfo.innerHTML = `
    <p>Nome: ${member.nome}</p>
    <p>Ruolo: ${member.ruolo}</p>
    <img src="https://picsum.photos/200/300" alt="Foto">
  `;
  teamContainer.appendChild(memberInfo);
});
