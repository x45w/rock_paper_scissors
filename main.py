shitou = 0

def on_forever():
    global shitou
    shitou = randint(1, 3)
    if shitou == 1:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    if shitou == 2:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
    if shitou == 3:
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
basic.forever(on_forever)
