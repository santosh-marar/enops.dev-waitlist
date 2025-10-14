interface FeatureProps {
  number: string;
  title: string;
  desc: string;
  tag: string;
}

function FeatureCard({ number, title, desc, tag }: FeatureProps) {
  return (
    <div className="relative group bg-[oklch(0.15_0_0)] border border-[oklch(0.22_0_0)] rounded-2xl p-6 transition-all duration-300 overflow-hidden hover:border-emerald-400/60 hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]">
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]" />

      <h3 className="text-purple-400 text-sm font-semibold mb-2">{number}</h3>
      <h2 className="text-gray-300 text-lg font-bold mb-2 tracking-tight">
        {title.replace("_", " ")}
      </h2>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{desc}</p>

      <p className="text-xs text-transparent bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text font-medium">
        {tag}
      </p>
    </div>
  );
}

// Parent layout
export function Features() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch max-w-4xl mx-auto">
      <FeatureCard
        number="01"
        title="AI_GENERATION"
        desc="Describe your schema in plain English. Get production-ready SQL in seconds."
        tag="prompt → schema"
      />
      <FeatureCard
        number="02"
        title="VISUAL_EDITOR"
        desc="Interactive ER diagrams. Drag, drop, and connect tables visually."
        tag="visual → code"
      />
      <FeatureCard
        number="03"
        title="EXPORT_READY"
        desc="Export to SQL, Prisma, Drizzle, TypeORM. Copy and deploy instantly."
        tag="schema → deploy"
      />
    </div>
  );
}

