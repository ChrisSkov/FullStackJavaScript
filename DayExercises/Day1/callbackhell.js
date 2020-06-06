// const makeBurger = nextStep => {
//     getBeef(function (beef) {
//         cookBeef(beef, function (cookedBeef) {
//             getBuns(function (buns) {
//                 putBeefBetweenBuns(buns, beef, function (burger) {
//                     nextStep(burger)
//                 })
//             })
//         })
//     })
// }

// // Make and serve the burger
// makeBurger(function (burger) {

//     serve(burger)
// })
function getBeef() {
    const beef = console.log("got beef");
    return beef;
}
const cookBeef = async () => {
    return console.log("is cooking");
}

const putBeefBetweenBuns = async () => {
    return console.log("Burger: assemble!");
}
const getBuns = async () => {
    const buns = console.log("got buns");
    return buns;
}
const serve = async () => {
    const server = console.log("burger has been served");
    return server;
}
//async version
const makeBurger = async () => {
    const beef = await getBeef();
    const cookedBeef = await cookBeef(beef);
    const buns = await getBuns();
    const burger = await putBeefBetweenBuns(cookedBeef, buns);
    return burger;
};

// Make and serve burger
makeBurger().then(serve);