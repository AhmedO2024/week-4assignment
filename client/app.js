const playerReview = document.getElementById("player_review");
const reviewsDiv = document.getElementById("reviews");

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(playerReview);
  const body = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/player_review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    const result = await response.json();
    console.log("Review submitted successfully:", result);
    displayReview(body);
    playerReview.reset();
  } else {
    console.error("Error Review was not submitted:", response.statusText);
  }
}

function displayReview({ team, player, review }) {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  reviewElement.innerHTML = `
    <p><strong>Team:</strong> ${team}</p>
    <p><strong>Player:</strong> ${player}</p>
    <p><strong>Review:</strong> ${review}</p>
  `;

  reviewsDiv.appendChild(reviewElement);
}

playerReview.addEventListener("submit", handleSubmit);
