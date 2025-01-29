// server.js
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');
const categoryRoutes = require('./src/routes/category.routes');
const productRoutes = require('./src/routes/product.routes');
const cartRoutes = require('./src/routes/cart.routes');
const orderRoutes = require('./src/routes/order.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Example "hidden" admin page route (like wp-admin) -- purely optional
app.get('/wp-admin', (req, res) => {
  // In practice, you'd serve an admin HTML page or redirect to admin front-end
  res.send('This would be the admin dashboard page (protected on the frontend).');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
