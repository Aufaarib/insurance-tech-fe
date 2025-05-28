export default async function handler(req: any, res: any) {
  const { msisdn } = req.query;

  const dummyData = {
    status: {
      code: "OK00",
      message: "SUCCESS",
    },
    timestamp: 1748238489063,
    took: 33,
    data: "https://localhost/this_is_fake_url",
  };

  if (req.method === "GET") {
    try {
      res.status(200).json(dummyData.data);
    } catch (error) {
      res.status(500).json({ message: "Failed to get data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
