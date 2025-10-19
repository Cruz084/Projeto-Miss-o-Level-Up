let xp = 0;
function addXP(valor) {
xp = Math.min(100, xp + valor);
document.getElementById('xp').style.width = xp + '%';
}