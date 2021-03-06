window.addEventListener('load', () => {
    const sounds = document.querySelectorAll ('.sound')
    const pads = document.querySelectorAll ('.pads div')
    const visual = document.querySelector ('.visual')
    const colors = ['#2aec2a', 'crimson', '#5656f5', 
    '#ecec25','#c060dc','#1dcece'
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0
            sounds[index].play()
            createBubble(index)
        })
    })

    const createBubble = index => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`
        bubble.addEventListener ('animationend', function() {
            visual.removeChild(this)
        })
    }
})