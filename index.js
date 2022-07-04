const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(a) {
    return cats.push(a)
}
function destructivelyPrependCat(b) {
    return cats.unshift(b)
}
function destructivelyRemoveLastCat(c) {
    return cats.pop(c)
}
function destructivelyRemoveFirstCat(d) {
    return cats.shift(d)
}
function appendCat(e) {
    let copyCats
    copyCats = [...cats, e]
    return copyCats
}
function prependCat(f) {
    let copyCats
    copyCats = [f, ...cats]
    return copyCats
}
function removeLastCat() {
    return cats.slice(0, -1)
}
function removeFirstCat() {
    return cats.slice(1)
}