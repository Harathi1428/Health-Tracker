const mongoose=require('mongoose');

const WorkerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Steps: { type: String, required: true },
  Calories: { type: String, required: true },
  Distance: { type: String, required: true },
  Weight: { type: String, required: true },
  selectedDate: {type:String,required:true}

        });
module.exports=mongoose.model('worker',WorkerSchema);