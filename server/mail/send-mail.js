const dotenv = require('dotenv')
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
dotenv.config()

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async ({ name, email, subject, message }) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GOOGLE_USER, 
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: `site <${email}>`,
            to: process.env.GOOGLE_USER, 
            subject: subject,
            text: `Hola ${name} con correo electrónico <${email}> te manda el siguiente mensaje:
                   ${message}`, 
        };

        const result = await transporter.sendMail(mailOptions);
        return result;

    } catch (error) {
        console.error(error);
        throw new Error('Error sending email');
    }
}

module.exports = { sendMail }