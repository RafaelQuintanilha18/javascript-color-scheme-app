const colorNumbers = 5

const colors = []
const colorNames = []

for ( let i = 1; i <= colorNumbers; i++) {
  colors.push(document.getElementById(`color${i}`)),
  colorNames.push(document.getElementById(`colorName${i}`))
}

document.getElementById("btn-color").addEventListener("click", function() {
  const seedColor = document.getElementById("colorpicked").value.slice(1)
  const scheme = document.getElementById("scheme-dropdown").value
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${scheme}`)
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < colorNumbers; i++) {
        const pickColor = data.colors[i].hex.value;
        colors[i].style.background = pickColor;
        colorNames[i].innerText = pickColor;
      }
    })
})
