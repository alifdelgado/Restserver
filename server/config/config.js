process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV|| 'dev';

let urlDB;

urlDB = (process.env.NODE_ENV === 'dev') ? 'mongodb://localhost:27017/cafe' : 'mongodb+srv://icaro:IXiaEKfx3B95TfUb@cluster0-k3x4r.mongodb.net/cafe';

process.env.URLDB = urlDB;