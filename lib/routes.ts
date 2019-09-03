import {Request, Response} from "express";
import { Translator } from './translator'
import { WolframAlpha } from './ask';

export class Routes {    

    private wolframAlphaAppId: string;

    public constructor(wolframAlphaAppId: string) {
        this.wolframAlphaAppId = wolframAlphaAppId;
    }
    
    public route(app): void {   
        
        app.route('/')
        .post(async (req: Request, res: Response) => {            
            const translator = new Translator()
            const ask = new WolframAlpha(this.wolframAlphaAppId);

            const question = req.body.question;

            const translated = await translator.translate(
                question,
                "de",
                "en"
            )

            const answer = await ask.ask(translated);

            const translatedAnswer = await translator.translate(
                answer,
                "en",
                "de"
            )

            res.json({
                question: question,
                has_answer: translatedAnswer != "" ? true : false,
                answer: translatedAnswer
            })
        })
        .get((req: Request, res: Response) => { 
            res.json({
                error: "GET requests not supported"
            });
        });
    }
}
