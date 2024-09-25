input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 300) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
        pins.analogWritePin(AnalogPin.C16, 0)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
        pins.analogWritePin(AnalogPin.C16, 1023)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 300) {
        basic.showLeds(`
            . # # . .
            # # . . .
            # # . . .
            # # . . .
            . # # . .
            `)
        pins.analogWritePin(AnalogPin.C12, 1023)
    } else {
        pins.analogWritePin(AnalogPin.C12, 5)
    }
})
