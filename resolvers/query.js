function ping() {
    return "pong2";
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

export default {
    ping,
    data,
};
