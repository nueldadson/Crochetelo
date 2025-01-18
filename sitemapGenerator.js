import path from 'path';
import { SitemapGenerator } from 'react-router-sitemap-generator';
import { routes } from './src/routes.js'; // Ensure the file extension is included

const generateSitemap = () => {
  const baseUrl = 'http://Crochetelo.com'; // Replace with your actual domain

  // Generate sitemap by passing your route paths
  new SitemapGenerator(baseUrl, routes.map(route => route.path))
    .toFile(path.resolve(__dirname, './public/sitemap.xml')) // Specify output location
    .then(() => {
      console.log('Sitemap generated successfully!');
    })
    .catch((err) => {
      console.error('Error generating sitemap:', err);
    });
};

// Run the sitemap generation
generateSitemap();
