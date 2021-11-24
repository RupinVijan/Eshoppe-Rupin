const mongoose=require('mongoose')
const connectDatabase = () => {
    mongoose
      .connect(process.env.mongo_uri, )
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  };

module.exports=connectDatabase;
