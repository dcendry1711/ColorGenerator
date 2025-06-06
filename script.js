const selectedColor = document.getElementById('selected-color')
const selectedMode = document.getElementById('selected-mode')
const schemeColors = document.getElementById('color-scheme')
const form = document.getElementById('color-form')

document.addEventListener('submit',function(e){
    e.preventDefault()
    const pickedColor = (selectedColor.value).slice(1,7)
    const modeOption = selectedMode.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${modeOption.toLowerCase()}&count=6`)
        .then(res => res.json())
        .then(data =>{ 
            const colorArr = data.colors
            schemeColors.innerHTML = ''
            renderColors(colorArr)
        })     
})

function renderColors(arr){
    arr.forEach(function(color){
        schemeColors.innerHTML += `
            <div class="scheme-pallete">
                <p>${color.hex.value}</p>
                <div class="color-box" style="background:${color.hex.value}">
                </div>
            </div>
        `  
    })
}



