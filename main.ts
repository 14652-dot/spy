for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.clearScreen()
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Heart)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showString("spy")
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showString("berry")
    }
})
