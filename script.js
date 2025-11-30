function addColor() {
    const color = document.getElementById("colorPicker").value;
    const palette = document.getElementById("palette");
    palette.innerHTML = ""; // clear previous colors

    // generate 5 lighter shades
    for (let i = 0; i < 5; i++) {
        const shade = shadeColor(color, i * 15);
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = shade;
        box.title = shade;

        // copy color on click
        box.addEventListener("click", () => {
            navigator.clipboard.writeText(shade);
            alert(`Copied ${shade} to clipboard!`);
        });

        palette.appendChild(box);
    }
}

// function to make color lighter
function shadeColor(color, percent) {
    let num = parseInt(color.slice(1),16),
        r = (num >> 16) + percent,
        g = ((num >> 8) & 0x00FF) + percent,
        b = (num & 0x0000FF) + percent;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return "#" + (1 << 24 | r <<16 | g <<8 | b).toString(16).slice(1);
}
