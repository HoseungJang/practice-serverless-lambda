import * as express from "express";

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
    return res.status(200).json({
        message: "Hello, World"
    });
});

app.get("/pow", (req: express.Request, res: express.Response) => {
    const num: number = Number(req.query.num);

    return res.status(200).json({
        result: num * num
    });
});

export default app;