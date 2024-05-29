import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await response.json();
    return Response.json({ data, status: response.status });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" });
  }
}
