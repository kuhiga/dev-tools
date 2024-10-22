import { Metadata } from "next";
import JsonFormatter from "../../components/tools/JsonFormatter";
import BackButton from "../../components/BackButton";

export const metadata: Metadata = {
  title: "JSON Formatter - Dev Tools",
  description: "Format, validate and minify JSON data",
};

export default function JsonFormatterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <BackButton />
      </div>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">JSON Formatter</h1>
        <p className="mt-2 text-gray-600">
          Format, validate and minify JSON data
        </p>
        <JsonFormatter />
      </div>
    </div>
  );
}
