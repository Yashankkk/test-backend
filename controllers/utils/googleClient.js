const { google } = require('googleapis');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

exports.oauth2Client = new google.auth.OAuth2(
    "371112211861-lb7qs932qqpuf7mf759rvp9oc5spf6f4.apps.googleusercontent.com",
    "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",
    'postmessage'
);