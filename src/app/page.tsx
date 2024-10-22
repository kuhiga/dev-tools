import ToolCard from "../components/ToolCard";

export default function Home() {
  const tools = [
    {
      title: "JSON Formatter",
      description: "Format, validate and minify JSON",
      href: "/json-formatter",
      icon: "{ }",
    },
    // Add more tools here
  ];

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold mb-6">Developer Tools</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </div>
    </main>
  );
}
