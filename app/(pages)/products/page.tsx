import type { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Produtos — Spectre",
  description: "Soluções premium para PC, Android e iOS.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}