import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
router.get('/users', (req, res) => {
    res.json([{ id: '1', name: 'John Doe' }]);
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    // Handle users creation logic here
    res.send({ message: 'User created successfully' });
});

export default router;