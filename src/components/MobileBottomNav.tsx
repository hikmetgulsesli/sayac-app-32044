import { PlusCircle, History } from 'lucide-react';

export type TabId = 'sayac' | 'gecmis';

interface MobileBottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobil navigasyon"
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-slate-950/90 backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] rounded-t-[2rem]"
    >
      <button
        onClick={() => onTabChange('sayac')}
        aria-label="Sayaç"
        aria-current={activeTab === 'sayac' ? 'page' : undefined}
        className={`
          flex flex-col items-center justify-center rounded-2xl px-6 py-2 transition-all duration-300
          ${activeTab === 'sayac'
            ? 'text-indigo-400 bg-indigo-500/10 scale-90'
            : 'text-slate-400 hover:text-indigo-300'
          }
        `}
      >
        <PlusCircle size={24} strokeWidth={activeTab === 'sayac' ? 2.5 : 1.5} />
        <span className="text-[11px] font-medium font-body uppercase tracking-widest mt-1">Sayaç</span>
      </button>

      <button
        onClick={() => onTabChange('gecmis')}
        aria-label="Geçmiş"
        aria-current={activeTab === 'gecmis' ? 'page' : undefined}
        className={`
          flex flex-col items-center justify-center rounded-2xl px-6 py-2 transition-all
          ${activeTab === 'gecmis'
            ? 'text-indigo-400 bg-indigo-500/10 scale-90'
            : 'text-slate-400 hover:text-indigo-300'
          }
        `}
      >
        <History size={24} strokeWidth={activeTab === 'gecmis' ? 2.5 : 1.5} />
        <span className="text-[11px] font-medium font-body uppercase tracking-widest mt-1">Geçmiş</span>
      </button>
    </nav>
  );
}
