import express from 'express';
import { callTwilio } from './twilio.mjs';

const app = express()

app.post("/call", async (req, res) => {

    // just import and call the function
    try {

        await callTwilio(
            `Hello I am Abdul Ahad, this is my twilio calling boyler pallete, hello world, 
        yahoo! i made a calling API, that's amazing. I am Abdul Ahad. My github is ahad-s-t-s-9-9-0-1 
        and contact number is +-9-2-3-1-3-0-0-1-9-0-8-6, Pakistan zindabad, regards! Abdul Ahad`,
            "+923130019086")

        // send a response
        res.send("call done")

    } catch (error) {

        console.log(error);
        res.status(500).send("error in calling")

    }

})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})