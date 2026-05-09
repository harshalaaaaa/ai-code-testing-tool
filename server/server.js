require('dotenv').config();

const express = require('express');
const cors = require('cors');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  try {
    const { code } = req.body;

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `
Analyze this code and provide:
1. Bugs
2. Suggestions
3. Test cases

Code:
${code}
              `,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Server error',
      details: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});