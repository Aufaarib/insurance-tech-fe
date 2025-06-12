import axios from "axios";
import config from "../../../../config";
import { header } from "./header";

export default async function handler(req: any, res: any) {
  const { API_URL } = config;
  const { method, query } = req;

  // console.log("API_URL ", API_URL); // Logs the full query object
  // console.log("Query params:", query); // Logs the full query object

  const dummyData = {
    status: {
      code: "OK00",
      message: "SUCCESS",
    },
    timestamp: 1748238489063,
    took: 33,
    data: "http://localhost:3000/my-polis",
  };

  if (method === "GET") {
    try {
      const response = await axios.get(
        `${API_URL}/claim-link?policyId=${query.policy_id}&claimId=claim-1001`,
        {
          headers: header(),
        }
      );

      res.status(200).json(response.data);
    } catch (error: any) {
      console.error("API fetch error:", error.message);
      // res.status(200).json(dummyData.data); // or return 500 if you don't want fallback
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
