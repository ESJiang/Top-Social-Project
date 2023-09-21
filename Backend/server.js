const express = require("express"),
    cors = require("cors"),
    compression = require("compression"),
    router = require("./routes/index"),
    app = express(),
    errorHandler = require("./middleware/errorMiddleware"),
    PORT = process.env.PORT || 8000;

app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);
app.listen(PORT, "0.0.0.0", () => console.log(`server is running on port ${PORT}`));
