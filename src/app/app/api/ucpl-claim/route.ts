import axios from "axios";
import config from "../../../../../config";
import { header } from "../header";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { API_URL } = config;
  const { searchParams } = new URL(req.url);

  try {
    const response = await axios.get(
      `${API_URL}/claim-link?policyId=${searchParams.get(
        "policy_id"
      )}&claimId=claim-1001`,
      {
        headers: header(),
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("API fetch error:", error.message);

    const dummyData = {
      status: {
        code: "OK00",
        message: "SUCCESS",
      },
      timestamp: 1748238489063,
      took: 33,
      data: "http://localhost:3000/my-polis",
    };

    // return NextResponse.json(dummyData.data, { status: 200 });
    return NextResponse.json(error.message, { status: 500 });
  }
}
