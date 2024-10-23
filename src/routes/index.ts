import express, { Router } from 'express'
import path from 'path'
import users from './users'
import token from './token'

const router = Router()

router.use(express.json())
router.use(express.static(__dirname + '/../../public'))
  
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views/login.html'));
});

router.use('/users', users)
router.use('/token', token)

export default router