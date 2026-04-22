import { Plus, Minus, RotateCcw } from 'lucide-react';

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function CounterControls({ onIncrement, onDecrement, onReset }: CounterControlsProps) {
  return (
    <>
      {/* Primary Actions */}
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={onDecrement}
          aria-label="Sayaç değerini bir azalt"
          className="glass-panel text-on-surface p-6 rounded-[1.5rem] flex items-center justify-center hover:bg-surface-variant/60 transition-colors border border-outline-variant/15 cursor-pointer"
        >
          <Minus size={28} />
        </button>
        <button
          onClick={onIncrement}
          aria-label="Sayaç değerini bir artır"
          className="gradient-btn text-on-primary py-6 px-10 rounded-[1.5rem] flex items-center justify-center font-bold text-xl glow-hover transition-all duration-300 cursor-pointer border-0"
        >
          <Plus size={24} className="mr-2" />
          Arttır
        </button>
      </div>

      {/* Secondary Action */}
      <div className="flex justify-center mt-4">
        <button
          onClick={onReset}
          aria-label="Sayaç değerini sıfırla"
          className="text-surface-tint hover:text-primary transition-colors font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-surface-variant/30 cursor-pointer border-0 bg-transparent"
        >
          <RotateCcw size={18} />
          Sıfırla
        </button>
      </div>
    </>
  );
}
