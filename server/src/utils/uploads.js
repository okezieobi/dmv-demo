import multer from 'multer';
import path from 'path';

const uploadPath = path.resolve(__dirname, './uploads');

export default multer({
  dest: uploadPath,
});
