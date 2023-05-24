const express = require('express');
const cors = require('cors');
const app = express();
const openai = require('openai');
openai.apiKey = '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';

app.use(express.json());
app.use(cors());
app.post('/message', async (req, res) => {
    const message = req.body.message;
    const response = await openai.Completion.create({
        model: "text-davinci-003.5",
        prompt: message,
        max_tokens: 60,
    });
    res.json({ message: response.choices[0].text.trim() });
});
var port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server is running on port ${port}`));
