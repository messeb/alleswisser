import * as request from 'request-promise-native';

export class WolframAlpha {

    private appId: string;

    constructor(appId: string) {
        this.appId = appId;
    }

    public async ask(question: string): Promise<string> {
        const baseUrl = 'http://api.wolframalpha.com/v1/result?';
        const queryString = 'appid=' + this.appId + '&i=' + encodeURI(question);
        var options = {
            uri: baseUrl + queryString,
        };

        return new Promise<string>((resolve, reject) => {
            request.get(options)
                .then(body => {
                    resolve(body);
                })
                .catch(error => {
                    resolve("");
                });
        });
    }
}
