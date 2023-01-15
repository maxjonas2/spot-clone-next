"use client";

import { redirect } from "next/navigation";

// This is the index
export default function RootPage() {
  redirect("/artists");
}
