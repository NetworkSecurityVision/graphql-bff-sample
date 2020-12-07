//https://github.com/b2a3e8/apollo-server-plugin-http-headers

import cookie from "cookie";

function requestDidStart() {
    return {
        willSendResponse(requestContext) {
            const { setHeaders = [], setCookies = [] } = requestContext.context;

            if (Array.isArray(requestContext.context.setHeaders)) {
                // set headers
                setHeaders.forEach(({ key, value }) => {
                    requestContext.response.http.headers.append(key, value);
                });
            }
            if (Array.isArray(requestContext.context.setCookies)) {
                if (setCookies.length > 1) {
                    // dont allow to set multiple cookies because that wouldnt work (limitation in apollo-server)
                    throw new Error(
                        "multiple cookies in setCookies provided but because of limitations in apollo-server only one cookie can be set"
                    );
                }

                // set cookies
                setCookies.forEach(({ name, value, options }) => {
                    var cookieString = cookie.serialize(name, value, options);
                    requestContext.response.http.headers.set(
                        "Set-Cookie",
                        cookieString
                    );
                });
            }
            return requestContext;
        },
    };
}
export default {
    requestDidStart,
};
