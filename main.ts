input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.C16))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.C16) > 300) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
        pins.analogWritePin(AnalogPin.C12, 0)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
        pins.analogWritePin(AnalogPin.C12, 1023)
    }
})
