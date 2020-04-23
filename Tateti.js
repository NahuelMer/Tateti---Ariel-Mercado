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
        setMsg(input1 + " empieza");
    };
};

function restart() {
    document.getElementById("user1").value = "";
    document.getElementById("user2").value = "";
    location.reload();
}

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
            setMsg("Es el turno de " + document.getElementById("user2").value);

        } else {
            document.turn = "X";
            movesX++;
            setMsg("Es el turno de " + document.getElementById("user1").value);
        };

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
    if (document.turn == "X") {
        alert("GANO " + document.getElementById("user1").value);
    } else {
        alert("GANO " + document.getElementById("user2").value);
    }
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


    //Resumen
    var outputNJ1 = document.getElementById('nombre1');
    var outputMJ1 = document.getElementById('mov1');
    var outputSJ1 = document.getElementById('state1');

    var outputNJ2 = document.getElementById('nombre2');
    var outputMJ2 = document.getElementById('mov2');
    var outputSJ2 = document.getElementById('state2');

    var jsonNJ1 = JSON.stringify(j1.Nombre, undefined, 2);
    var jsonMJ1 = JSON.stringify(j1.Movimientos, undefined, 2);
    var jsonSJ1 = JSON.stringify(j1.Estado, undefined, 2);

    var jsonNJ2 = JSON.stringify(j2.Nombre, undefined, 2);
    var jsonMJ2 = JSON.stringify(j2.Movimientos, undefined, 2);
    var jsonSJ2 = JSON.stringify(j2.Estado, undefined, 2);

    outputNJ1.textContent = "Nombre: " + jsonNJ1;
    outputMJ1.textContent = "Movimientos: " + jsonMJ1;
    outputSJ1.textContent = "Resultado: " + jsonSJ1;

    outputNJ2.textContent = "Nombre: " + jsonNJ2;
    outputMJ2.textContent = "Movimientos: " + jsonMJ2;
    outputSJ2.textContent = "Resultado: " + jsonSJ2;

}