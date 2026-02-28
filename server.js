const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const urlRoutes = require("./routes/urlRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", urlRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});