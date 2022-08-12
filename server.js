const express = require("express");
const cors = require("cors");

const app = express();

const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/", AppRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
=======
app.get('/', (req, res) => res.json({ message: 'thriftR Server Live' }))
app.use('/', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
>>>>>>> 820c9b654e73f8be345bd13a6860161035a46687
