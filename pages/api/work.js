import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const work = await db
    .collection("portfolio_web")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(work);
};
