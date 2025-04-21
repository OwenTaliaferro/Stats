// Local data storage for player stats
const playerStats = {
    runningBack: [
      { name: "Jahmyr Gibbs", number: 26, yards: 1016, carries: 178, touchdowns: 10 },
      { name: "David Montgomery", number: 5, yards: 771, carries: 180, touchdowns: 12 },
    ],
    quarterback: [
      { name: "Jared Goff", number: 16, yards: 3265, completions: 276, touchdowns: 25 },
      { name: "Hendon Hooker", number: 2, yards: 62, completions: 6, touchdowns: 0 },
    ],
    wideReceiver: [
      { name: "Amon-Ra St. Brown", number: 14, yards: 863, receptions: 81, touchdowns: 9 },
      { name: "Jameson Williams", number: 9, yards: 710, receptions: 39, touchdowns: 4 },
      { name: "Kalif Raymond", number: 11, yards: 204, receptions: 16, touchdowns: 2 },
      { name: "Tim Patrick", number: 14, yards: 349, receptions: 27, touchdowns: 2 },
      { name: "Sam LaPorta (TE)", number: 87, yards: 445, receptions: 36, touchdowns: 5 },
    ],
  };
  
  const positionSelect = document.getElementById("positionSelect");
  const statsDisplay = document.getElementById("statsDisplay");
  
  
  function renderStats(position) {
    let htmlContent = []; // Array to hold all HTML content
  
    if (playerStats[position]) {
      htmlContent.push(renderPositionGroup(position));
    }
  
    // Insert content into the statsDisplay container
    statsDisplay.innerHTML = htmlContent.join('');
  }
  
  // Generate HTML
  function renderPositionGroup(position) {
    if (!playerStats[position]) return '';
  
    let groupContent = ["<div class='position-group'>", "<h2>" + position + "</h2>"];
  
    playerStats[position].forEach(function(player) {
      let positionDetails = [];
  
      if (position === 'runningBack') {
        positionDetails.push("<p>Rushing Yards: " + player.yards + "</p>");
        positionDetails.push("<p>Carries: " + player.carries + "</p>");
        positionDetails.push("<p>Rushing Touchdowns: " + player.touchdowns + "</p>");
  
      } else if (position === 'quarterback') {
        positionDetails.push("<p>Passing Yards: " + player.yards + "</p>");
        positionDetails.push("<p>Completions: " + player.completions + "</p>");
        positionDetails.push("<p>Passing Touchdowns: " + player.touchdowns + "</p>");
  
      } else if (position === 'wideReceiver') {
        positionDetails.push("<p>Receiving Yards: " + player.yards + "</p>");
        positionDetails.push("<p>Receptions: " + player.receptions + "</p>");
        positionDetails.push("<p>Receiving Touchdowns: " + player.touchdowns + "</p>");
      }
  
      groupContent.push(
        "<div class='player-card'>",
        "<p><strong>" + player.name + " (#" + player.number + ")</strong></p>",
        positionDetails.join(''),
        "</div>"
      );
    });
  
    groupContent.push("</div>");
    return groupContent.join('');
  }
  
  // Event listener for dropdown
  positionSelect.addEventListener('change', function(e) {
    const selectedValue = e.target.value;
    renderStats(selectedValue);
  });
  
  // Initial render - no data displayed
  statsDisplay.innerHTML = '';
  