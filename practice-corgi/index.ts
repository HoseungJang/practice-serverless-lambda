import { Router, Namespace, Route } from "vingle-corgi";
import * as Joi from "joi";

const router = new Router([
    new Namespace("/hello/:str", {
        params: {
            str: Joi.string()
        },
        children: [
            Route.GET("/", { operationId: "getFollow"}, {}, async function() {
                const str = this.params.str as string;

                return this.json({
                    message: `Hello, ${str}!`
                });
            })
        ]
    })
]);

export const handler = router.handler();