export default function LaunchCountdown() {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-strong border border-neutral-200/50 animate-scale-in">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-3 h-3 bg-primary-400 rounded-full animate-ping" />
        </div>
        <span className="text-neutral-900 font-semibold text-base md:text-lg">
          Coming Soon
        </span>
      </div>
      <div className="h-6 w-px bg-neutral-300" />
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zM16.81 15.12l-10.76 6.22 8.49-8.49 2.27 2.27zm3.35-3.31c.34.27.59.69.59 1.19s-.22.91-.56 1.19l-2.29 1.31-2.5-2.5 2.5-2.5 2.26 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
        </svg>
      </div>
    </div>
  );
}
