import twilio from 'twilio'; // install from npm and import
import 'dotenv/config'

// twilio acount sid & authToken
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// make a client with twilio acount sid & authToken
const client = twilio(accountSid, authToken);

// just made a function for sent message
export const callTwilio = async (messageToSay, reciever) => {
    try {
        const call = await client.calls.create({
            twiml: `<Response><Say>${messageToSay}</Say></Response>`, // message to say on call
            from: process.env.TWILIO_PHONE_NUMBER, // from who
            to: reciever //to who
        });
        console.log(call.sid);
    } catch (error) {
        console.error(`Error in calling: ${error.message}`);
    }
};
