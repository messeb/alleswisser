import * as request from 'request-promise-native';

export class Translator {

    public async translate(text: string, from: string, to: string): Promise<string> {
        const baseUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
        const queryString = from + "&tl=" + to + "&dt=t&q=" + encodeURI(text);
        var options = {
            uri: baseUrl + queryString,
        };

        return new Promise<string>((resolve, reject) => {
            request.get(options)
                .then(body => {
                    const result = JSON.parse(body);
                    const translatedText = result[0][0][0];
                    resolve(translatedText);
                });
        });
    }
}
