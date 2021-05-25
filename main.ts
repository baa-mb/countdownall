input.onButtonPressed(Button.A, function () {
    countDownZahl(60, 1000)
})
input.onButtonPressed(Button.B, function () {
    countDownGraph(64, 1000)
})
function countDownZahl (zeit: number, warte: number) {
    for (let Index = 0; Index <= zeit; Index++) {
        anzeige = zeit - Index
        zehner = Math.round(anzeige / 10 - 0.5)
        einer = anzeige % 10
        DLPLmatrix.schreibeText(
        nrMatrix.zentral,
        convertToText(zehner),
        0x007fff,
        false
        )
        DLPLmatrix.schreibeText(
        nrMatrix.links,
        convertToText(einer),
        0x007fff,
        false
        )
        if (anzeige < 5) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            basic.pause(warte)
        }
    }
}
function countDownGraph (pixelZahl: number, warte: number) {
    streifen = neopixel.create(DigitalPin.P1, pixelZahl, NeoPixelMode.RGB)
    streifen.clear()
    streifen.showColor(neopixel.colors(NeoPixelColors.White))
    streifen.show()
    for (let Index = 0; Index <= pixelZahl; Index++) {
        streifen.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        streifen.show()
        if (anzeige < 5) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            basic.pause(warte)
        }
    }
}
let streifen: neopixel.Strip = null
let einer = 0
let zehner = 0
let anzeige = 0
DLPLmatrix.definitionMatrix(nrMatrix.zentral, HWMatrix.m2, 1)
DLPLmatrix.definitionMatrix(nrMatrix.links, HWMatrix.m1, 2)
