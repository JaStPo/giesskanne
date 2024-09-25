input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
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
