import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";

export class App {

    public app: express.Application;
    public routes: Routes;

    constructor(wolframAlphaAppId: string) {
        this.app = express();
        this.config();

        this.routes = new Routes(wolframAlphaAppId);
        this.routes.route(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}
