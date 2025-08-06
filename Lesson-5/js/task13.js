'use strict'

if (confirm('Почати тестування?')) {
    const FIELD_SIZE_N = 7
    const FIELD_SIZE_M = 7

    const RANDOM_N = 1 + Math.floor(Math.random() * FIELD_SIZE_N)
    const RANDOM_M = 1 + Math.floor(Math.random() * FIELD_SIZE_M)

    let numberShells = 10
    let isHit = false
    while (numberShells > 0) {

        const coordinateX = parseInt(prompt(`Please enter coordinate X (1-${FIELD_SIZE_N}):`, 1))
        const coordinateY = parseInt(prompt(`Please enter coordinate Y (1-${FIELD_SIZE_M}):`, 1))

        if (isFinite(coordinateX) && isFinite(coordinateY)) {
            if (coordinateX === RANDOM_N && coordinateY === RANDOM_M) {

                isHit = true
                break
            } else {

                numberShells -= 1
                alert(`You missed! You have ${numberShells} shells left.`)
            }
        }
    }

    if (isHit) {
        document.write('<h2 style="color: green;">You hit! YOU win!</h2>')
    } else {
        document.write(`<h2 style="color: red;">You missed! You lost... Ship was at (${RANDOM_N}, ${RANDOM_M})</h2>`)
    }
}