const express = require('express');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, '../../public/img/users'));
    },
    filename: (req, file, callback) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, fileName);
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile