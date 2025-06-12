import axios from "axios";
import config from "../../../../config";
import { header } from "./header";

export default async function handler(req: any, res: any) {
  const { policy_id } = req.query;

  const { API_URL } = config;
  const { method, query } = req;

  // console.log("API_URL ", API_URL); // Logs the full query object
  // console.log("Query params:", query); // Logs the full query object

  const dummyData =
    policy_id == "5000001"
      ? {
          status: {
            code: "OK00",
            message: "SUCCESS",
          },
          timestamp: 1748335819831,
          took: 79,
          data: {
            page: 0,
            size: 0,
            total: 0,
            hashNext: false,
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
                    benefits: `<div class="flex flex-row gap-[8px] items-center justify-start"><img src="/icons/circular-percent.png" alt="circular-percent" class="w-[24px]" /><div class="flex flex-col text-[12px]"><p class="font-[600]">Perlindungan Layar Handphone Pecah</p><p class="text-[#757F90] font-[400]">Maksimal Rp1.000.000</p></div></div>`,
                    claimSteps: `<div class="flex flex-row gap-[8px] items-center justify-start"><div class="flex justify-center p-[3px] items-center rounded-full w-[24px] h-[24px] custom-gradient-claim"><p class="bg-white text-[12px] font-[600] text-[#FF0025] flex justify-center items-center rounded-full w-full">1</p></div><div class="flex flex-col text-[12px] w-[80%]"><p class="font-[600]">Pilih asuransi</p><p class="text-[#757F90] font-[400]">Pilih asuransi yang ingin Anda ajukan klaim di bagian 'Asuransi Saya'</p></div></div>`,
                    termConditions:
                      "<p>Does not cover <strong>intentional damage</strong> or <em>unreported incidents</em>.</p>",
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
        }
      : {
          status: {
            code: "OK00",
            message: "SUCCESS",
          },
          timestamp: 1748335819831,
          took: 79,
          data: {
            page: 0,
            size: 0,
            total: 0,
            hashNext: false,
            contents: [
              {
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
                    benefits: `<div class="flex flex-row gap-[8px] items-center justify-start"><img src="/icons/circular-percent.png" alt="circular-percent" class="w-[24px]" /><div class="flex flex-col text-[12px]"><p class="font-[600]">Perlindungan Layar Handphone Pecah</p><p class="text-[#757F90] font-[400]">Maksimal Rp1.000.000</p></div></div>`,
                    claimSteps: `<div class="flex flex-row gap-[8px] items-center justify-start"><div class="flex justify-center p-[3px] items-center rounded-full w-[24px] h-[24px] custom-gradient-claim"><p class="bg-white text-[12px] font-[600] text-[#FF0025] flex justify-center items-center rounded-full w-full">1</p></div><div class="flex flex-col text-[12px] w-[80%]"><p class="font-[600]">Pilih asuransi</p><p class="text-[#757F90] font-[400]">Pilih asuransi yang ingin Anda ajukan klaim di bagian 'Asuransi Saya'</p></div></div>`,
                    termConditions:
                      "<p>Kesengajaan atau kelalaian berat dari pengguna, seperti menjatuhkan ponsel secara sengaja.</p>",
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
            ],
          },
        };

  if (method === "GET") {
    try {
      const response = await axios.get(`${API_URL}/policy/${query.policy_id}`, {
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
