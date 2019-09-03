import { App } from "./app";
const PORT = process.env.PORT || 3000;
const WOLFRAM_ALPHA_APP_ID = process.env.WOLFRAM_ALPHA_APP_ID;

if(!WOLFRAM_ALPHA_APP_ID) {
    console.error("No WOLFRAM_ALPHA_APP_ID provided");
    process.exit(1);
}

const app = new App(WOLFRAM_ALPHA_APP_ID);
app.app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
