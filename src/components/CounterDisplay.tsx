interface CounterDisplayProps {
  value: number;
}

export function CounterDisplay({ value }: CounterDisplayProps) {
  return (
    <div className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col items-center justify-center gap-6 relative shadow-[0_20px_40px_rgba(0,0,0,0.25)] border border-outline-variant/15">
      <div className="text-surface-variant font-medium tracking-widest uppercase text-sm">Mevcut Sayı</div>
      <div
        className="font-display font-bold text-on-surface bg-clip-text text-transparent bg-gradient-to-b from-white to-surface-tint/80"
        style={{ fontSize: '96px', lineHeight: 1, letterSpacing: '-0.04em' }}
      >
        {value.toLocaleString('tr-TR')}
      </div>
    </div>
  );
}