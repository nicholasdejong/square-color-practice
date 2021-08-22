const randomSquare = () => {
    return String.fromCharCode(Math.floor(Math.random() * 8 + 97)) + Math.floor(Math.random() * 8 + 1);
};
const colorAt = (square) => {
    file = square.charCodeAt(0);
    rank = parseInt(square[1])
    odd = n => n % 2 ? true : false;
    even = n => !odd(n);
    if ((odd(file) && even(rank)) || (even(file) && odd(rank))) {
        return 'white';
    } else return 'black';
};
let square = randomSquare();
let streak = 0
let highscore = localStorage.getItem('highscore') || 0;
highscore = parseInt(highscore)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#square').textContent = square;
    document.querySelector('#highscore').textContent = 'HighScore: ' + highscore;
});
document.querySelector('#white').onclick = () => {
    if (colorAt(square) == 'white') {
        square = randomSquare();
        document.querySelector('#square').style.color = 'lime';
        document.querySelector('#square').textContent = square;
        streak += 1;
        if (streak > highscore) highscore += 1;
        document.querySelector('#streak').textContent = 'Streak: ' + streak;
        document.querySelector('#highscore').textContent = 'HighScore: ' + highscore;
    } else {
        square = randomSquare();
        document.querySelector('#square').style.color = 'red';
        document.querySelector('#square').textContent = square;
        streak = 0;
        document.querySelector('#streak').textContent = 'Streak: ' + streak;
    }
    localStorage.setItem('highscore', highscore);
}
document.querySelector('#black').onclick = () => {
    if (colorAt(square) == 'black') {
        square = randomSquare();
        document.querySelector('#square').style.color = 'lime';
        document.querySelector('#square').textContent = square;
        streak += 1;
        if (streak > highscore) highscore += 1;
        document.querySelector('#streak').textContent = 'Streak: ' + streak;
        document.querySelector('#highscore').textContent = 'HighScore: ' + highscore;
    } else {
        square = randomSquare();
        document.querySelector('#square').style.color = 'red';
        document.querySelector('#square').textContent = square;
        streak = 0;
        document.querySelector('#streak').textContent = 'Streak: ' + streak;
    }
    localStorage.setItem('highscore', highscore);
}