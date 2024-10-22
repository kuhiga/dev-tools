"use client";
import { useState } from "react";
import { Copy, Check, Code, Minimize } from "lucide-react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJSON = () => {
    try {
      if (!input.trim()) {
        setError("Please enter JSON to format");
        setOutput("");
        return;
      }
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setOutput("");
    }
  };

  const minifyJSON = () => {
    try {
      if (!input.trim()) {
        setError("Please enter JSON to minify");
        setOutput("");
        return;
      }
      const minified = JSON.stringify(JSON.parse(input));
      setOutput(minified);
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setOutput("");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy to clipboard");
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
    } catch (err) {
      setError("Failed to paste from clipboard");
    }
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-900">
              Input JSON
            </label>
            <button
              onClick={handlePaste}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Paste from clipboard
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-[500px] p-4 font-mono text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            placeholder="Paste your JSON here..."
          />
        </div>

        {/* Output Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-900">
              Formatted JSON
            </label>
            {output && (
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                {copied ? (
                  <Check className="w-4 h-4 mr-1" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copied ? "Copied!" : "Copy to clipboard"}
              </button>
            )}
          </div>
          <pre className="w-full h-[500px] p-4 font-mono text-base text-gray-900 bg-white border border-gray-300 rounded-lg overflow-auto shadow-sm">
            {output}
          </pre>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={formatJSON}
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm">
          <Code className="w-4 h-4 mr-2" />
          Format
        </button>
        <button
          onClick={minifyJSON}
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-sm">
          <Minimize className="w-4 h-4 mr-2" />
          Minify
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mt-4 text-sm font-medium text-red-600">{error}</div>
      )}
    </div>
  );
}
