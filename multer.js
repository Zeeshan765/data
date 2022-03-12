const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "./uploads");
    cb(null, './public');
  },
  filename: function (req, file, cb) {
    // var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(
      null,
      file.originalname
      // new Date().ISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const upload = multer({ storage: storage });
