function loadPage(){
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = localStorage.getItem('userName') ?? 'Mystery player';
}