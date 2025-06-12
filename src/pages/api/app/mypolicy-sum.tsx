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
    timestamp: 1748335767807,
    took: 124,
    data: {
      total: 3,
      active: 1,
      claim: 1,
      expired: 1,
      latestPolicy: {
        policyId: "1000001",
        createdAt: "2025-05-27 12:58:52",
        channelTrxId: "221216142158@221217142158@9811809SMS838718",
        partnerOrderId: "KLO00025E1LC1184780001",
        activeSince: "2025-05-27 13:01:01",
        activeUntil: "2025-06-10 13:01:01",
        issuedAt: "2025-05-27 13:01:01",
        endDate: null,
        state: "Policy Protected",
        product: {
          id: 1,
          bid: "i00001",
          keyword: "igloo_PSP14DT1_IOD",
          commercialName: "Proteksi dari Kerugian Serangan Hacker",
          productType: "Phone-Screen-Protection",
          productKey: "PSP",
          productPlanKey: "igloo_PSP30DT2_IOD",
          createdAt: "2025-05-22 19:55:47",
          updatedAt: "2025-05-22 19:55:47",
          partnerId: "igloo",
          insuranceName: "allianz",
          metadata: {
            iconUrl: "/icons/polis-category/serangan-hacker.png",
            insuranceIcon: "/icons/Allianz.png",
            bannerUrl: "",
            benefit: "",
          },
          validityPeriod: 14,
          active: true,
        },
        claims: [],
        premium: 200,
        coiNo: "string",
        coiUrl: "https://",
        claimed: false,
      },
    },
  };

  if (method === "GET") {
    try {
      const response = await axios.get(`${API_URL}/policy-summary`, {
        params: {
          size: query.size,
          page: query.page,
          filterPolicy: query.filterPolicy,
          sort: query.sort,
        },
        headers: header(),
      });

      res.status(200).json(response.data);
    } catch (error: any) {
      console.error("API fetch error:", error.message);
      res.status(200).json(dummyData.data); // or return 500 if you don't want fallback
      // res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
