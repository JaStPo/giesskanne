input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.analogReadPin(AnalogPin.P1) > 300) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
        pins.digitalWritePin(DigitalPin.C16, 0)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
        pins.digitalWritePin(DigitalPin.C16, 1)
    }
})
