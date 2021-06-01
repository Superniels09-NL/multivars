function _set (name: string, num: number) {
    radio.sendValue(name, num)
    if (!(Names_list.indexOf(name) == -1)) {
        input_list.push(num)
        Names_list.push(name)
    }
}
radio.onReceivedValue(function (name, value) {
    input_list[Names_list.indexOf(name)] = value
    if (!(Names_list.indexOf(name) == -1)) {
        input_list.push(value)
        Names_list.push(name)
    }
})
function _get (name: string) {
    ANS = input_list[Names_list.indexOf(name)]
}
let ANS = 0
let Names_list: string[] = []
let input_list: number[] = []
radio.setGroup(22)
radio.setTransmitSerialNumber(true)
input_list = []
Names_list = []
basic.forever(function () {
    _get("1")
    _set("1", 2)
    basic.showNumber(ANS)
})
