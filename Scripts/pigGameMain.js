document.querySelector('.btn').addEventListener('click', function () {
    var gameplayCheck = "beginning";
    localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));
    var state = "0";
    localStorage.setItem('Status', JSON.stringify(state));
});
