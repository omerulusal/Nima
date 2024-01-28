import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://omer:DAqQ5LtARKZl2gMx@cluster0.o0ko3au.mongodb.net/nima', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('mongoDB connected!!!!!');
    } catch (err) {
        console.log(err,"Baglantı saglanamadı");
    }
};

export default db;
// Source: https://mongoosejs.com/docs/connections.html