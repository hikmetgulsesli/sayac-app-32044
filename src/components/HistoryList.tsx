import { Plus, Minus, RotateCcw, History } from 'lucide-react';
import { HistoryEntry } from '@/types';

interface HistoryListProps {
  entries: HistoryEntry[];
}

function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function HistoryList({ entries }: HistoryListProps) {
  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <History size={48} className="text-outline-variant mb-4" />
        <p className="font-body text-on-surface-variant text-base">
          Henüz işlem yapılmadı
        </p>
        <p className="font-body text-on-surface-variant text-sm mt-1">
          Sayaçla işlem yaptığınızda geçmiş burada görünür.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${entry.type === 'increment' ? 'bg-primary/10 text-primary' : ''}
                ${entry.type === 'decrement' ? 'bg-secondary-container/30 text-secondary' : ''}
                ${entry.type === 'reset' ? 'bg-tertiary/10 text-tertiary' : ''}
              `}
            >
              {entry.type === 'increment' && <Plus size={14} />}
              {entry.type === 'decrement' && <Minus size={14} />}
              {entry.type === 'reset' && <RotateCcw size={14} />}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm text-on-surface">
                {entry.type === 'increment' ? 'Artış' : entry.type === 'decrement' ? 'Azalış' : 'Sıfırlama'}
              </span>
              <span className="text-xs text-on-surface-variant font-mono">
                {entry.previousValue} → {entry.newValue}
              </span>
            </div>
          </div>
          <span className="text-xs text-on-surface-variant font-mono">
            {formatTime(entry.timestamp)}
          </span>
        </div>
      ))}
    </div>
  );
}
