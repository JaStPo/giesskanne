input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
    }
})
