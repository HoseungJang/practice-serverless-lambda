import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const hello: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.path === "/hello/world") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello, world!"
            })
        };
    } else if (event.path === "/hello") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello?"
            })
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({
                message: "Not Found"
            })
        };
    }
};

export { hello };