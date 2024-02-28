const path = require('path');
const router = require('express').Router();

const sendFileResponse = (res, filePath) => {
  res.sendFile(path.join(__dirname, filePath));
};

router.get('/notes', (req, res) => {
  sendFileResponse(res, '../public/notes.html');
});

router.get('*', (req, res) => {
  sendFileResponse(res, '../public/index.html');
});

module.exports = router;