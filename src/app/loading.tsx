export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-ink-950">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-ping rounded-full bg-accent-cyan/30" />
        <div className="absolute inset-2 animate-spin rounded-full border-2 border-accent-violet border-t-transparent" />
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet" />
      </div>
    </div>
  );
}
