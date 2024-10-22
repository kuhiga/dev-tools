"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="flex items-center text-gray-600 hover:text-gray-900">
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back to Tools
    </Link>
  );
}
