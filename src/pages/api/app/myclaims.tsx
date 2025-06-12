import axios from "axios";
import { header } from "./header";
import config from "../../../../config";

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
    timestamp: 1748335819831,
    took: 79,
    data: {
      page: 0,
      size: 3,
      total: 3,
      hashNext: true,
      contents: [
        {
          policyId: "5000001",
          createdAt: "2025-05-01 13:01:01",
          channelTrxId: "221216142158@221217142158@9811809SMS838210",
          partnerOrderId: "KLO025E1OO5214020001",
          activeSince: "2025-05-01 13:01:01",
          activeUntil: "2025-05-31 13:01:01",
          issuedAt: "2025-05-01 13:01:01",
          endDate: "2025-05-27 15:42:33",
          state: "Policy End",
          product: {
            id: 1,
            bid: "i00001",
            keyword: "igloo_PSP14DT1_IOD",
            commercialName: "Proteksi Pencurian & Kehilangan Handphone",
            productType: "Phone-Screen-Protection",
            productKey: "PSP",
            productPlanKey: "igloo_PSP30DT2_IOD",
            createdAt: "2025-05-22 19:55:47",
            updatedAt: "2025-05-22 19:55:47",
            partnerId: "igloo",
            insuranceName: "allianz",
            metadata: {
              iconUrl: "/icons/polis-category/pencurian-kehilangan.png",
              insuranceIcon: "/icons/Allianz.png",
              bannerUrl: "",
              benefit: "",
            },
            validityPeriod: 14,
            active: true,
          },
          claims: [
            {
              claimId: "123456",
              claimStatus: "Kedaluwarsa",
              claimDate: "2025-05-17 23:11:06",
              sla_date: null,
              pendingReason: null,
              rejectReason: null,
              policyId: "5000001",
            },
          ],
          premium: 2000,
          coiNo: "no",
          coiUrl: "https://",
          claimed: true,
        },
        {
          policyId: "5000001",
          createdAt: "2025-05-01 13:01:01",
          channelTrxId: "221216142158@221217142158@9811809SMS838210",
          partnerOrderId: "KLO025E1OO5214020001",
          activeSince: "2025-05-01 13:01:01",
          activeUntil: "2025-05-31 13:01:01",
          issuedAt: "2025-05-01 13:01:01",
          endDate: "2025-05-27 15:42:33",
          state: "Policy End",
          product: {
            id: 1,
            bid: "i00001",
            keyword: "igloo_PSP14DT1_IOD",
            commercialName: "Proteksi Pencurian & Kehilangan Handphone",
            productType: "Phone-Screen-Protection",
            productKey: "PSP",
            productPlanKey: "igloo_PSP30DT2_IOD",
            createdAt: "2025-05-22 19:55:47",
            updatedAt: "2025-05-22 19:55:47",
            partnerId: "igloo",
            insuranceName: "allianz",
            metadata: {
              iconUrl: "/icons/polis-category/pencurian-kehilangan.png",
              insuranceIcon: "/icons/Allianz.png",
              bannerUrl: "",
              benefit: "",
            },
            validityPeriod: 14,
            active: true,
          },
          claims: [
            {
              claimId: "123456",
              claimStatus: "Disetujui",
              claimDate: "2025-05-17 23:11:06",
              sla_date: null,
              pendingReason: null,
              rejectReason: null,
              policyId: "5000001",
            },
          ],
          premium: 2000,
          coiNo: "no",
          coiUrl: "https://",
          claimed: true,
        },
        {
          policyId: "5000001",
          createdAt: "2025-05-01 13:01:01",
          channelTrxId: "221216142158@221217142158@9811809SMS838210",
          partnerOrderId: "KLO025E1OO5214020001",
          activeSince: "2025-05-01 13:01:01",
          activeUntil: "2025-05-31 13:01:01",
          issuedAt: "2025-05-01 13:01:01",
          endDate: "2025-05-27 15:42:33",
          state: "Policy End",
          product: {
            id: 1,
            bid: "i00001",
            keyword: "igloo_PSP14DT1_IOD",
            commercialName: "Proteksi Pencurian & Kehilangan Handphone",
            productType: "Phone-Screen-Protection",
            productKey: "PSP",
            productPlanKey: "igloo_PSP30DT2_IOD",
            createdAt: "2025-05-22 19:55:47",
            updatedAt: "2025-05-22 19:55:47",
            partnerId: "igloo",
            insuranceName: "allianz",
            metadata: {
              iconUrl: "/icons/polis-category/pencurian-kehilangan.png",
              insuranceIcon: "/icons/Allianz.png",
              bannerUrl: "",
              benefit: "",
            },
            validityPeriod: 14,
            active: true,
          },
          claims: [
            {
              claimId: "123456",
              claimStatus: "Diproses",
              claimDate: "2025-05-17 23:11:06",
              sla_date: null,
              pendingReason: null,
              rejectReason: null,
              policyId: "5000001",
            },
          ],
          premium: 2000,
          coiNo: "no",
          coiUrl: "https://",
          claimed: true,
        },
        {
          policyId: "5000001",
          createdAt: "2025-05-01 13:01:01",
          channelTrxId: "221216142158@221217142158@9811809SMS838210",
          partnerOrderId: "KLO025E1OO5214020001",
          activeSince: "2025-05-01 13:01:01",
          activeUntil: "2025-05-31 13:01:01",
          issuedAt: "2025-05-01 13:01:01",
          endDate: "2025-05-27 15:42:33",
          state: "Policy End",
          product: {
            id: 1,
            bid: "i00001",
            keyword: "igloo_PSP14DT1_IOD",
            commercialName: "Proteksi Pencurian & Kehilangan Handphone",
            productType: "Phone-Screen-Protection",
            productKey: "PSP",
            productPlanKey: "igloo_PSP30DT2_IOD",
            createdAt: "2025-05-22 19:55:47",
            updatedAt: "2025-05-22 19:55:47",
            partnerId: "igloo",
            insuranceName: "allianz",
            metadata: {
              iconUrl: "/icons/polis-category/pencurian-kehilangan.png",
              insuranceIcon: "/icons/Allianz.png",
              bannerUrl: "",
              benefit: "",
            },
            validityPeriod: 14,
            active: true,
          },
          claims: [
            {
              claimId: "123456",
              claimStatus: "Ditolak",
              claimDate: "2025-05-17 23:11:06",
              sla_date: null,
              pendingReason: null,
              rejectReason: null,
              policyId: "5000001",
            },
          ],
          premium: 2000,
          coiNo: "no",
          coiUrl: "https://",
          claimed: true,
        },
      ],
    },
  };

  if (method === "GET") {
    try {
      const response = await axios.get(`${API_URL}/claim`, {
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
