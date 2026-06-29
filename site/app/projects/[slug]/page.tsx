export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "marketing-analytics" },
    { slug: "multi-agent-system" },
    { slug: "tabvault" },
  ];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <p className="text-[var(--text-muted)]">
        Project detail coming soon — <code>{slug}</code>
      </p>
    </div>
  );
}
