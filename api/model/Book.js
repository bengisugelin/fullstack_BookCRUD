import mongoose from 'mongoose';
const { Schema } = mongoose;


// create Schema Object (bookSchema)
const BookSchema = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    author: { 
      type: String, 
      required: true 
    },
    pages: { 
      type: Number,
       required: true 
      },
    year: { 
      type: Number,
       required: true 
      },
    fiction: { 
      type: Boolean, 
      required: true },
  });


  export default mongoose.model("Book", BookSchema);
