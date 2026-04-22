import { PlusCircle, History } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';

interface DesktopNavProps {
  activeTab: 'sayac' | 'gecmis';
  onTabChange: (tab: 'sayac' | 'gecmis') => void;
  theme?: 'dark' | 'light';
  onThemeToggle?: () => void;
}

export function DesktopNav({ activeTab, onTabChange, theme = 'dark', onThemeToggle }: DesktopNavProps) {
  return (
    <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50 bg-slate-950/80 backdrop-blur-2xl">
      <div className="text-2xl font-bold text-indigo-400 tracking-tighter font-headline">SAYAÇ</div>
      <div className="flex items-center gap-3">
        <nav className="hidden md:flex gap-1" aria-label="Masaüstü navigasyon">
          <button
            onClick={() => onTabChange('sayac')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-label text-sm
              ${activeTab === 'sayac'
                ? 'bg-indigo-500/10 text-indigo-400 font-medium'
                : 'text-on-surface-variant hover:text-indigo-300 hover:bg-surface-variant/30'
              }
            `}
          >
            <PlusCircle size={18} strokeWidth={activeTab === 'sayac' ? 2.5 : 1.5} />
            Sayaç
          </button>
          <button
            onClick={() => onTabChange('gecmis')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-label text-sm
              ${activeTab === 'gecmis'
                ? 'bg-indigo-500/10 text-indigo-400 font-medium'
                : 'text-on-surface-variant hover:text-indigo-300 hover:bg-surface-variant/30'
              }
            `}
          >
            <History size={18} strokeWidth={activeTab === 'gecmis' ? 2.5 : 1.5} />
            Geçmiş
          </button>
        </nav>
        {onThemeToggle && (
          <button
            onClick={onThemeToggle}
            aria-label={theme === 'dark' ? 'Açık tema' : 'Koyu tema'}
            className="hover:bg-indigo-500/10 transition-colors p-2 rounded-full flex items-center justify-center cursor-pointer text-indigo-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </header>
  );
}