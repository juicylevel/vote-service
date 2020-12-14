import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

admin.initializeApp(functions.config().firebase);
// const db = admin.firestore();

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(cors());

export const webApi = functions.https.onRequest(main);

app.get('/test', (request: any, response: any) => {
    response.send({ data: 'test' });
});