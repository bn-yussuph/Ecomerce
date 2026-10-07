import multer from "multer";
import { v4 } from "uuid";

const createMulterUploader = (folderName) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `uploads/${folderName}`)
        },
        filename: function (req, file, cb) {
            cb(null, v4() + "-" + file.originalname)
        }
    });

    function fileFilter(req, file, cb){
        if(file.mimetype.startsWith("image/")){
            cb(null, true);
        } else {
            cb(new Error("File type not supported!!!"), false);
        }
    }

    const upload = multer({ storage: storage, fileFilter: fileFilter }); 

    return upload;
}

//For Single upload
export const uploadSingleFile = (fieldName, folderName) => {
  return createMulterUploader(folderName).single(fieldName);
};

//For Multiple fields upload
export const uploadMultipleFiles = (arrayOfFields, folderName) => {
  return createMulterUploader(folderName).fields(arrayOfFields);
};
