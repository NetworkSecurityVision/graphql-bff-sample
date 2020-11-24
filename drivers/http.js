const got = require("got");

(async () => {
    try {
        const response = await got("http://localhost:8000");
        console.log(response.body);
    } catch (error) {
        console.log(error.response.body);
    }
})();
