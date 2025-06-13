import axios from "axios";
import config from "../../../../../config";
import { NextRequest, NextResponse } from "next/server";
import { header } from "../header";

export async function GET(req: NextRequest) {
  const { API_URL } = config;
  const { searchParams } = new URL(req.url);

  try {
    const response = await axios.get(
      `${API_URL}/policy/${searchParams.get("policy_id")}`,
      {
        headers: header(),
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("API fetch error:", error.message);

    return NextResponse.json(error.message, { status: 500 });
  }
}
