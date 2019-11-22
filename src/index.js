import express from 'express';
import consign from 'consign';

const app = express();

// Routes
consign({cwd: __dirname})
.include('libs/config.js')
.then('db.js')
.then('libs/middlewares.js')
.then('Controllers')
.then('routes')
.then('libs/boot.js')
.into(app);