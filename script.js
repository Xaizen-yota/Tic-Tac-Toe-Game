let turn = "x";
const tds = document.getElementsByTagName("td");
for (const td of tds) {
    td.addEventListener("click", createContent);
}

function createContent() {
    this.textContent = turn;
    console.log("calling function: " + isWinner());
    if (isWinner()) {
        alert("The Winner is: " + turn);
        for (let td of tds) {
            td.textContent = "";
        }
        turn = "x";
    } else {
        turn = turn == "x" ? "o" : "x";
    }
}






function isWinner() {
    // Rows
    if (
        (tds[0].textContent === tds[1].textContent &&
            tds[1].textContent === tds[2].textContent &&
            tds[0].textContent !== "") ||
        (tds[3].textContent === tds[4].textContent &&
            tds[4].textContent === tds[5].textContent &&
            tds[3].textContent !== "") ||
        (tds[6].textContent === tds[7].textContent &&
            tds[7].textContent === tds[8].textContent &&
            tds[6].textContent !== "")
    ) {
        return tds[0].textContent;
    }

    // Columns
    for (let i = 0; i < 3; i++) {
        if (
            tds[i].textContent === tds[i + 3].textContent &&
            tds[i + 3].textContent === tds[i + 6].textContent &&
            tds[i].textContent !== ""
        ) {
            return tds[i].textContent;
        }
    }

    // Diagonals
    if (
        (tds[0].textContent === tds[4].textContent &&
            tds[4].textContent === tds[8].textContent &&
            tds[0].textContent !== "") ||
        (tds[2].textContent === tds[4].textContent &&
            tds[4].textContent === tds[6].textContent &&
            tds[2].textContent !== "")
    ) {
        return tds[4].textContent;
    }

    return null;
}
