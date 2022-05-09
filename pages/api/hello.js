// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import list from "./data.json";
export default function handler(req, res) {
  const limit = req.query.limit;
  const result = list.slice(0, limit);
  res.status(200).json(result);
}
