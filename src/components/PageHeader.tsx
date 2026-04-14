export default function PageHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section
      className="pt-32 pb-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #DBD4FF 0%, #FFFFFF 60%)' }}
    >
      {/* Subtle blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-[400px] h-[400px] bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[300px] h-[300px] bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200/60 bg-white/80 shadow-sm mb-6">
          <span className="text-sm text-neutral-600 font-medium">{badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-neutral-500">{subtitle}</p>
      </div>
    </section>
  );
}
