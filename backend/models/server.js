const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const user=require('./user');
const worker=require('./workers');

const app=express();
const port=3001

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Users database connected");
}).catch((err) => {
    console.error("Users database connection error:", err);
});

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new user({
        username,
        email,
        password, 
    });
    try {
        // const savedUser = await newUser.save();
        res.status(201).json({ userId: newUser._id });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ message: 'Error creating user' });
    }
});

app.post("/login", async (req, res) => {
    const { email} = req.body;
    try {
        const person = await user.findOne({ email });
        if (!person) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        console.log(person._id)
        res.status(200).json({ userId: person._id });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: 'Error logging in' });
    }
});
app.post('/worker',async(req,res)=>{
    const { userId,Steps, Calories, Distance, Weight, selectedDate } = req.body;
    console.log("Received data:", req.body);
    try {
        const newWorker = new worker({
            userId,
            Steps,
            Calories,
            Distance,
            Weight,
            selectedDate
        });
        const savedWorker = await newWorker.save();
        console.log("Saved data:", savedWorker);
        res.status(201).json(savedWorker);
    } catch (err) {
        console.log("Error saving data:", err);
        res.status(500).json({ error: "Error saving data" });
    }
})
//  app.post('/workouts',async(req, res) => {
//    const {userId}=req.body;
//    const workouts=await worker.find({userId})
//    console.log(workouts)
//    res.json(workouts);
//  })

app.get('/workouts/:userId', async (req, res) => { // Use app.get instead of app.post for GET requests
    const { userId } = req.params;
    console.log("User ID:", userId); // Log the userId to check if it's being received
    try {
        const workouts = await worker.find({ userId });
        console.log("Workouts:", workouts); // Log the workouts to verify retrieval
        res.json(workouts);
    } catch (err) {
        console.log("Error fetching workouts:", err);
        res.status(500).json({ error: "Error fetching workouts" });
    }
});
     app.listen(port,()=>{
        console.log(`port listening on port ${port}`)
     })

// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(bodyParser.json());

// const mongoURI = 'mongodb://localhost:27017/Users';

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// const UserSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// const user = mongoose.model('user', UserSchema);

// app.post('/signup', (req, res) => {
//     const { username, email, password } = req.body;

//     const newUser = new user({
//         username,
//         email,
//         password
//     });
//     newUser.save()
//         .then(() => res.status(201).json({ message: 'Signup successful' }))
//         .catch(err => res.status(500).json({ message: 'Signup failed', error: err }));
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     user.findOne({ email, password })
//         .then(user => {
//             if (user) {
//                 res.status(200).json({ message: 'Login successful' });
//             } else {
//                 res.status(401).json({ message: 'Login failed: Invalid credentials' });
//             }
//         })
//         .catch(err => res.status(500).json({ message: 'Login failed', error: err }));
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

