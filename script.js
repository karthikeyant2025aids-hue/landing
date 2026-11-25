
function changeColor(color) {

    if (color === "blue") {
        document.body.style.background =
            "linear-gradient(135deg, #60a5fa, #dbeafe)";
    }

    else if (color === "green") {
        document.body.style.background =
            "linear-gradient(135deg, #4ade80, #dcfce7)";
    }

    else if (color === "purple") {
        document.body.style.background =
            "linear-gradient(135deg, #c084fc, #f3e8ff)";
    }

    else if (color === "orange") {
        document.body.style.background =
            "linear-gradient(135deg, #fb923c, #ffedd5)";
    }

    let sections = document.querySelectorAll(".details");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(color).style.display = "block";

}
