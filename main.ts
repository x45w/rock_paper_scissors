let shitou = 0
basic.forever(function on_forever() {
    
    shitou = randint(1, 3)
    if (shitou == 1) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
    }
    
    if (shitou == 2) {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . . # . .
                        . . # . .
        `)
    }
    
    if (shitou == 3) {
        basic.showLeds(`
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        `)
    }
    
})
