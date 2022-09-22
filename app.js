const input = document.getElementById("row");
const area = document.getElementById("area");
input.addEventListener("input", () => {
    area.innerHTML = diamond(Number(input.value));
});

function diamond(row) {
    s = "";
    for (i = 1; i < row + 1; i++) {
        s += "\n";
        for (j = 1; j <= row - i + 1; j++) {
            s += " ";
        }
        for (j = 1; j <= 2 * i - 1; j++) {
            if (j == 1 || j == 2 * i - 1) {
                s += "$";
            } else {
                s += " ";
            }
        }
    }
    for (i = row - 1; i > 0; i--) {
        s += "\n";
        for (j = 1; j <= row - i + 1; j++) {
            s += " ";

        }
        for (j = 1; j <= 2 * i - 1; j++) {
            if (j == 1 || j == 2 * i - 1) {
                s += "$";
            } else {
                s += " ";
            }
        }
    }
    return s;
}