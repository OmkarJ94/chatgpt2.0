const express = require("express")
const app = express()
const { Configuration, OpenAIApi } = require('openai');

const router = express.Router()
const configuration = new Configuration({
    organization: "org-7uKO9Wy8gaI13eFpxTKsUJ7z",
    apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration)
router.post("/getresponse", async (req, res) => {
    try {
        const { message } = req.body
        console.log(message)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: .5
        })
  
        res.status(200).json({ message: response.data.choices[0].text })
    } catch (error) {
        console.log(error)
            res.status(500).json({ message: "something went wrong" })
    }
})

module.exports = router