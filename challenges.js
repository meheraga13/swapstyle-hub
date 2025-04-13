document.addEventListener('DOMContentLoaded', function() {
    // Select all participate buttons
    const participateButtons = document.querySelectorAll('button[id^="participate-btn"]');

    // Function to handle button click
    function joinChallenge(event) {
        const buttonId = event.target.id;
        const challengeNumber = buttonId.split('-').pop(); // Extract challenge number from button ID
        alert(`You have joined Challenge ${challengeNumber}!`);
    }

    // Attach event listeners to each button
    participateButtons.forEach(button => {
        button.addEventListener('click', joinChallenge);
    });
});
let profileMenu = document.getElementById("profileMenu");

        function toggleMenu(){
            profileMenu.classList.toggle("active");

        }
