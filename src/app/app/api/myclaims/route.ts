import axios from "axios";
import config from "../../../../../config";
import { header } from "../header";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { API_URL } = config;
  const { searchParams } = new URL(req.url);

  try {
    const response = await axios.get(`${API_URL}/claim`, {
      params: {
        size: searchParams.get("size"),
        page: searchParams.get("page"),
        filterPolicy: searchParams.get("filterPolicy"),
        sort: searchParams.get("sort"),
      },
      headers: header(),
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("API fetch error:", error.message);

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

    return NextResponse.json(dummyData.data, { status: 200 });
    // return NextResponse.json(error.message, { status: 500 });
  }
}
