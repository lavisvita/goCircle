let t2 = document.getElementById("outside");
    t2.style.position = 'relative';
    t2.style.left = '100px';

function moveRight() {
    let left = t2.style.left;
    if(left != '') left = parseInt(t2.style.left);
    else left = t2.style.left;
    left += 50;
    t2.style.left = left + 'px';
}

function moveLeft() {
    let left = t2.style.left;
    if(left != '') left = parseInt(t2.style.left);
    else left = t2.style.left;
    left -= 50;
    t2.style.left = left + 'px';
}

// Добавляет слушателя событий для таблицы
let rightMove = document.getElementById("right"),
    leftMove = document.getElementById("left");
rightMove.addEventListener("mouseover", moveRight, false);
leftMove.addEventListener("mouseover", moveLeft, false);