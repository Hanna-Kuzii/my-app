"use server";
import axios from "axios";

export async function fetchProductById(id: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/goods/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetch products:", error);
  }
}
