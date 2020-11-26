function ping() {
    console.log(aaa);
    return "pong2";
}

function a() {
    return 1;
}

function b() {
    return "b";
}

function data() {
    return {
        a: 1,
        b: "b",
        c: ["no", true],
        d: {
            yes: true,
            no: "No",
        },
    };
}

module.exports = {
    ping,
    data,
    // a,
    // b,
};
