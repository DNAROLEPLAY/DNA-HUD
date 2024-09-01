window.addEventListener('message', function(event) {
    if (event.data.action === 'showHud') {
        document.querySelector('.hud').style.display = 'block'; // Show the HUD
    }
    if (event.data.action === 'updateHud') {
        console.log('Received HUD Update:', event.data); // Log the received data
        document.getElementById('serverId').textContent = event.data.serverId;
        document.getElementById('cash').textContent = event.data.cash;
        document.getElementById('bank').textContent = event.data.bank;
        document.getElementById('job').textContent = event.data.job;

        if (event.data.gameTime) {
            document.getElementById('gameTime').textContent = event.data.gameTime;

            // Change the time icon based on in-game time
            let timeHour = parseInt(event.data.gameTime.split(':')[0]);
            if (timeHour >= 19 || timeHour < 6) { // Night time
                document.getElementById('timeIcon').src = 'moon.png';
            } else { // Day time
                document.getElementById('timeIcon').src = 'sun.png';
            }
        } else {
            document.getElementById('timeIcon').src = 'sun.png';
        }

        document.querySelector('.hud').style.display = 'block'; // Show the HUD
    } else if (event.data.action === 'hideHud') {
        document.querySelector('.hud').style.display = 'none'; // Hide the HUD
    }
});
