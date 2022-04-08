input.onButtonPressed(Button.A, function () {
    kampas += -1
    led.stopAnimation()
    magicbit.Servo(magicbit.Servos.S1, kampas)
})
input.onButtonPressed(Button.AB, function () {
    magicbit.Servospeed(magicbit.Servos.S1, 0, 180, 5)
    magicbit.Servospeed(magicbit.Servos.S1, 180, 0, 5)
})
input.onButtonPressed(Button.B, function () {
    kampas += 1
    led.stopAnimation()
    magicbit.Servo(magicbit.Servos.S1, kampas)
})
let kampas = 0
kampas = 90
magicbit.Servo(magicbit.Servos.S1, kampas)
basic.forever(function () {
    basic.showNumber(kampas)
})
