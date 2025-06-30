 const players = [
      { name: "Virat Kohli", type: "Batsman", points: 10 },
      { name: "Rohit Sharma", type: "Batsman", points: 9 },
      { name: "Hardik Pandya", type: "All-Rounder", points: 8 },
      { name: "Jasprit Bumrah", type: "Bowler", points: 9 },
      { name: "MS Dhoni", type: "Wicket Keeper", points: 10 },
      { name: "Ravindra Jadeja", type: "All-Rounder", points: 8 },
      { name: "KL Rahul", type: "Batsman", points: 8 },
      { name: "Shubman Gill", type: "Batsman", points: 7 },
      { name: "Mohammed Shami", type: "Bowler", points: 9 },
      { name: "Rishabh Pant", type: "Wicket Keeper", points: 9 },
      { name: "Yuzvendra Chahal", type: "Bowler", points: 7 },
    ];

    let selectedPlayers = [];
    let totalPoints = 0;

    const playerContainer = document.getElementById("playerContainer");
    const totalPointsDisplay = document.getElementById("totalPoints");
    const selectedCountDisplay = document.getElementById("selectedCount");

    function updateSummary() {
      totalPointsDisplay.textContent = totalPoints;
      selectedCountDisplay.textContent = selectedPlayers.length;
    }

    function addPlayer(player) {
      if (selectedPlayers.length >= 11 || totalPoints + player.points > 100) {
        alert("Team limit or points limit exceeded!");
        return;
      }
      selectedPlayers.push(player);
      totalPoints += player.points;
      updateSummary();
    }

    players.forEach(player => {
      const card = document.createElement("div");
      card.className = "player-card";
      card.innerHTML = `
        <h3>${player.name}</h3>
        <p>Type: ${player.type}</p>
        <p>Points: ${player.points}</p>
        <button>Add Player</button>
      `;
      card.querySelector("button").addEventListener("click", () => addPlayer(player));
      playerContainer.appendChild(card);
    });