const rewards = [
  "💤 You earned a guilt-free nap (pajamas mandatory)!",
  "🍦 A double vanilla cone with rainbow sprinkles—no sharing required!",
  "🍿 Unlimited snacks for 24 hours (popcorn included) 🎉",
  "🛁 A royal bubble bath with rubber ducky support staff!",
  "📺 Binge-watch your favorite comfort show without judgment!",
  "🕺 A spontaneous solo dance party (you ARE the vibe)!",
  "🧁 One magical cupcake that replenishes your joy meter!",
  "🐶 Unlimited puppy videos—prescribed by the universe!",
  "☕ A cozy drink of your choice with zero interruptions."
];

const names = ["Jacob", "Victoria", "Ema", "Mubashir", "Kezia", "Shale", "Kevin", "Allison"];

function getRandomElements(array, count) {
  const copy = [...array];
  const result = [];
  while (result.length < count && copy.length > 0) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(index, 1)[0]);
  }
  return result;
}

function generateReward() {
  const rewardText = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById('reward').textContent = rewardText;

  const button = document.getElementById('rewardButton');
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight
    }
  });

  const winners = getRandomElements(names, 5);
  const assignedRewards = getRandomElements(rewards, 5);
  const winnerList = document.getElementById("winnerList");
  winnerList.innerHTML = "";

  for (let i = 0; i < winners.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${winners[i]} ➤ ${assignedRewards[i]}`;
    winnerList.appendChild(li);
  }
}

document.getElementById('rewardButton').addEventListener('click', generateReward);
