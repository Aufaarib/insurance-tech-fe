import { header } from "./header";

export default async function handler(req: any, res: any) {
  const { msisdn } = req.query;

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
          commercialName: "T1-Phone Screen Protection",
          productType: "Phone-Screen-Protection",
          productKey: "PSP",
          productPlanKey: "igloo_PSP30DT2_IOD",
          createdAt: "2025-05-22 19:55:47",
          updatedAt: "2025-05-22 19:55:47",
          partnerId: "igloo",
          // insuranceName: null,
          insuranceName: "Proteksi dari Kerugian Serangan Hacker",
          metadata: {
            iconUrl: "/icons/polis-category/serangan-hacker.png",
            providerIcon: "/icons/Allianz.png",
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

  if (req.method === "GET") {
    try {
      header();
      res.status(200).json(dummyData.data);
    } catch (error) {
      res.status(500).json({ message: "Failed to get data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
