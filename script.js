function addColor() {
    const color = document.getElementById("colorPicker").value;
    const palette = document.getElementById("palette");

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    palette.appendChild(box);
}

