const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const inputData = req.body.data;
        if (!inputData) {
            return res.status(400).json({ is_success: false, error: "Invalid JSON input" });
        }

        const numbers = inputData.filter(x => !isNaN(x));
        const alphabets = inputData.filter(x => /^[A-Za-z]$/.test(x));
        const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id: "john_doe_17091999",  // Replace with your actual details
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers: numbers,  // Keep as an array
            alphabets: alphabets,  // Keep as an array
            highest_alphabet: highestAlphabet  // Keep as an array
        });
        
    } catch (err) {
        res.status(500).json({ is_success: false, error: err.message });
    }
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
