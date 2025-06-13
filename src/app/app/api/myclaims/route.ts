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

    return NextResponse.json(error.message, { status: 500 });
  }
}
