import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", (request, response) => response.json("It's working"));

app.get("/player_review", async function (request, response) {
  const result = await db.query("SELECT * FROM player_review");
  const player_review = result.rows;
  response.json(player_review);
});

app.post("/player_review", async (request, response) => {
  const { team, player, review } = request.body;
  const result = await db.query(
    "INSERT INTO player_review (team, player, review) VALUES ($1, $2, $3)",
    [team, player, review]
  );
  response.json(result);
});

app.listen(8080, () => console.log("App is running on PORT 8080"));
