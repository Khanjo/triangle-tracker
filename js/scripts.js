window.addEventListener("load", function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const A = document.getElementById("sideAInput").value;
        const B = document.getElementById("sideBInput").value;
        const C = document.getElementById("sideCInput").value;

        if (A === B, A === C) {
            document.querySelector("span#result").innerText = " Equilateral";
        }

        event.preventDefault();
    });
});