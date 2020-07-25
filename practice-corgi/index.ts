import { Router, Namespace, Route } from "vingle-corgi";
import * as Joi from "joi";

const router = new Router([
    new Namespace("/hello/:str", {
        params: {
            str: Joi.string()
        },
        exceptionHandler: async function(error) {
            return this.json({
                error: error.message
            }, 500);
        },
        children: [
            Route.GET("/", { operationId: "getFollow"}, {}, async function() {
                const str = this.params.str as string;

                if (str === "error") {
                    throw new Error("Hello, Error!");
                }

                return this.json({
                    message: `Hello, ${str}!`
                });
            })
        ]
    })
]);

export const handler = router.handler();