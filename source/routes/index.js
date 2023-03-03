import { Router } from 'express';

const router = Router()


router.get('/', (req, res) => res.render('index', { title: 'My resume'}))

router.get('/about', (req, res) => res.render('about', { title: 'About me'}))

router.get('/contact', (req, res) => res.render('contact', { title: 'Contact me'}))

router.get('/example', (req, res) => res.render('example', { title: 'Projects'}))


export default router