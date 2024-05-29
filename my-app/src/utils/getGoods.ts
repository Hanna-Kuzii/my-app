"use server";
import axios from "axios";

export async function fetchProducts() {
  try {
    const response = await axios.get("http://localhost:3000/api/goods");
    return response.data;
  } catch (error) {
    console.error("Error fetch products:", error);
  }
}
