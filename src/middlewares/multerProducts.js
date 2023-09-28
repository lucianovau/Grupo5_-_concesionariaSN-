const multer = require('multer');
const express = require('express');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, '../../public/img/productImg'));
    },
    filename: (req, file, callback) => {
        const fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, fileName);
    }
});

const upload = multer({ storage });

module.exports = upload