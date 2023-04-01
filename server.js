const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID= process.env.NOTION_DATABASE_ID;

const app = express();
const port = 3001;

// Inicializa el cliente de Notion
const notion = new Client({ auth: NOTION_API_KEY });

// Habilita CORS
app.use(cors());

// Ruta para obtener la lista de páginas de una base de datos
app.get('/api/pages', async (req, res) => {
    try {
        const response = await notion.databases.query({
            database_id: NOTION_DATABASE_ID,
        });
        const data = (response.results || []).map(page => {
            return {
                title: page.properties.title.title[0].plain_text,
                image: {
                    url: page.properties.image.files[0].file.url,
                }
            }
        });
        res.json(data);
    } catch (error) {
        console.error('Error fetching pages:', error);
        res.status(500).json({ error: 'Failed to fetch pages' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
