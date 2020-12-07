import logger from "../logger.js";

function requestDidStart() {
    let begin = new Date();
    return {
        willSendResponse() {
            let d = new Date() - begin,
                t = d + "ms";
            if (d > 10 * 1000) t = parseInt(d / 1000) + "s";
            logger.info("response in " + t);
        },
    };
}

export default {
    requestDidStart,
};
