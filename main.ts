basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.pause(500)
let Range = 255
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    Range
    )
    if (input.buttonIsPressed(Button.AB)) {
        Range = 255
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.pause(500)
            Range = Range - 15
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.pause(500)
            Range = Range + 15
        }
    }
})
