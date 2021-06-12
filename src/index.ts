import App from "./server/app";
import connect from "./server/database";

const app = new App();

app.start();
connect();
