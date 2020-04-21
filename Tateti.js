function start() {
    var input1 = document.getElementById("user1").value;
    var input2 = document.getElementById("user2").value;


    if (input1 == "" || input2 == "") {
        alert("Debe ingresar un nombre para ambos jugadores");
        return;

    } else {
        drawAux = false;
        movesX = 0;
        movesO = 0;
        turnCounter = 0;
        endAux = false;
        document.turn = "X";
        setMsg(document.turn + " empieza");
    };
};

function setMsg(msg) {
    document.getElementById("msg").innerText = msg;
};

function nextMove(cell) {
    if (endAux == false) {
        if (cell.innerText == "") {
            turnCounter++;
            cell.innerText = document.turn;
            nextTurn();
        } else {
            setMsg("Celda ocupada");
        }
    } else {
        return;
    };
};

function nextTurn() {
    verify()
    if (endAux == false) {
        if (document.turn == "X") {
            document.turn = "O";
            movesO++;

        } else {
            document.turn = "X";
            movesX++;
        };
        setMsg("Es el turno de " + document.turn);
    } else {
        return;
    }


};

function verify() {

    if (document.getElementById("0").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("8").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("2").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("6").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("0").innerText == document.turn && document.getElementById("1").innerText == document.turn && document.getElementById("2").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("3").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("5").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("6").innerText == document.turn && document.getElementById("7").innerText == document.turn && document.getElementById("8").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("0").innerText == document.turn && document.getElementById("3").innerText == document.turn && document.getElementById("6").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("1").innerText == document.turn && document.getElementById("4").innerText == document.turn && document.getElementById("7").innerText == document.turn) {
        endGame();
        return;
    };

    if (document.getElementById("2").innerText == document.turn && document.getElementById("5").innerText == document.turn && document.getElementById("8").innerText == document.turn) {
        endGame();
        return;
    };

    if (turnCounter == 9) {
        gameDraw();
        return;
    }
};

function gameDraw() {
    setMsg("Partida terminada");
    alert("Empate! Nadie gana");
    drawAux = true;
    endAux = true;
    resumen();
}

function endGame() {
    setMsg("Partida terminada");
    alert("GANO " + document.turn);
    endAux = true;
    resumen();
}

function resumen() {

    var input1 = document.getElementById("user1").value;
    var input2 = document.getElementById("user2").value;

    var j1 = {
        "Nombre": input1,
        "Movimientos": movesX,
        "Estado": ""
    }

    var j2 = {
        "Nombre": input2,
        "Movimientos": movesO,
        "Estado": ""
    }

    if (drawAux == true) {
        j1.Estado = "Empatado"
        j2.Estado = "Empatado"
    } else {
        if (document.turn == "X") {
            j1.Estado = "Ganador"
            j2.Estado = "Perdedor"
        } else {
            j1.Estado = "Perdedor"
            j2.Estado = "Ganador"
        }
    }

    var output1 = document.getElementById('resumen1');
    var output2 = document.getElementById('resumen2');
    var json1 = JSON.stringify(j1);
    var json2 = JSON.stringify(j2);
    output1.innerHTML = json1;
    output2.innerHTML = json2;


    /*var output1 = document.getElementById('resumen1');
    var output2 = document.getElementById('resumen2');
    output1.innerHTML = [j1.name, j1.moves, j1.state];
    output2.innerHTML = [j2.name, j2.moves, j2.state];*/
}