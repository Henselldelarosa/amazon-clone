const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51OJqDqAzbdz6FzdbvGSN1S6hW8MRnlsQXQl056sxkeKCeWhsHgODlI2Ugq9RPOLk6tWlt6snUjkPjyvkrTSvbdFa00aIV2RA6E')

//API SET UP

//app config
const app = express()

//Middlewares
app.use(cors({origin:true}))
app.use(express.json())

//API routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

app.post('/payments/create', async(req, res) => {

  const total = req.query.total

})

//Listen command

exports.api = functions.https.onRequest(app)

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
