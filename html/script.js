window.addEventListener('message', function(event) {
    if (event.data.action === 'updateHud') {
        document.getElementById('serverId').textContent = event.data.serverId;
        document.getElementById('cash').textContent = event.data.cash;
        document.getElementById('bank').textContent = event.data.bank;
        document.getElementById('job').textContent = event.data.job;
        document.querySelector('.hud').style.display = 'block'; // Show the HUD
    } else if (event.data.action === 'hideHud') {
        document.querySelector('.hud').style.display = 'none'; // Hide the HUD
    }
});
