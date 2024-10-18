import express from 'express';
import path from 'path';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;

// Define the directory where HLS files are located
const hlsDirectory = path.join(__dirname, '../public');
app.use(cors())


// Serve the appropriate HTML file based on the slug
app.get('/public/:slug', (req, res) => {
    const { slug } = req.params;

    // Assuming your HTML files are named like "slug.html"
    const filePath = path.join(__dirname, '../public', `${slug}`);

    // Send the HTML file if it exists, otherwise send a 404
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).send('File not found');
        }
    });
});


app.listen(PORT, () => {
    console.log(`File server is running at http://localhost:${PORT}`);
});
