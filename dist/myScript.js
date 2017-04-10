'use strict';

var t2 = document.getElementById("outside");
t2.style.position = 'relative';
t2.style.left = '100px';

function moveRight() {
    var left = t2.style.left;
    if (left != '') left = parseInt(t2.style.left);else left = t2.style.left;
    left += 50;
    t2.style.left = left + 'px';
}

function moveLeft() {
    var left = t2.style.left;
    if (left != '') left = parseInt(t2.style.left);else left = t2.style.left;
    left -= 50;
    t2.style.left = left + 'px';
}

// Добавляет слушателя событий для таблицы
var rightMove = document.getElementById("right"),
    leftMove = document.getElementById("left");
rightMove.addEventListener("mouseover", moveRight, false);
leftMove.addEventListener("mouseover", moveLeft, false);