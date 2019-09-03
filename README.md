# Alleswisser

Service to get answers for questions in german. It uses the [WolframAlpha Short Answers API](https://products.wolframalpha.com/short-answers-api/documentation/). 

Because the [Short Answers API](https://products.wolframalpha.com/short-answers-api/documentation/) supports only englisch questions, the initial question is translated to english and the answer is translated back to german.

## Prerequisite

[WolframAlpha API](https://products.wolframalpha.com/api/): Create a free account for api access and register an app to get an  api app id.

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/messeb/alleswisser)

### Heroku

* Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and [login](https://devcenter.heroku.com/articles/heroku-cli#getting-started) via the CLI.

* Create a new app via the CLI

```
$ heroku create
```

or select an existing app

```
$ heroku git:remote -a [app name]
```

*  Set the [WolframAlpha app id](http://developer.wolframalpha.com/portal/myapps/) as Heroku environment variable

```
$ heroku config:set WOLFRAM_ALPHA_APP_ID=[app id] 
```

* Deploy it on Heroku

```
$ git push heroku master
```

### Local

* Export the [WolframAlpha app id](http://developer.wolframalpha.com/portal/myapps/) as environment variable

```
$ export WOLFRAM_ALPHA_APP_ID=[app id]
```

* Install all dependencies

```
$ npm install
```

* Run it for production

```
$ npm start
```

or for development, without separated TypeScript transpiling

```
$ npm run dev
```

## Usage 

Send a json structure with the question via post request to your Heroku app.

### Json structure

```
{
  "question": "Wie groß ist eine Giraffe?"
}
```

### Sample request

```
curl -X "POST" "https://[Heroku App ID].herokuapp.com/" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "question": "Wie groß ist eine Giraffe?"
}'
```

### Response

The response contains the question, a field if an answer exists and the answer:

```
{
  "question": "Wie groß ist eine Giraffe?",
  "has_answer": true,
  "answer": "4 bis 6 Meter"
}
```

## Hint

The service is currently not protected via an api key or some other credentials. Because the usage of the WolframAlpha api can cause additional costs, you should have a look at it.
