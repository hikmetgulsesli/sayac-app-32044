import { useState, useEffect } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { CounterDisplay } from '@/components/CounterDisplay';
import { CounterControls } from '@/components/CounterControls';
import { HistoryList } from '@/components/HistoryList';
import { DesktopNav } from '@/components/DesktopNav';
import { MobileBottomNav, TabId } from '@/components/MobileBottomNav';
import { loadTheme, saveTheme } from '@/utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('sayac');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { count, history, increment, decrement, reset } = useCounter();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const loaded = loadTheme();
    setTheme(loaded);
  }, []);

  const handleThemeToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    saveTheme(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body antialiased">
      <DesktopNav activeTab={activeTab} onTabChange={setActiveTab} theme={theme} onThemeToggle={handleThemeToggle} />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 md:py-20 relative overflow-hidden pb-28 md:pb-10">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" aria-hidden>
          <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        </div>

        <div className="z-10 w-full max-w-lg flex flex-col gap-10">
          {activeTab === 'sayac' && (
            <>
              <CounterDisplay value={count} />
              <CounterControls
                onIncrement={increment}
                onDecrement={decrement}
                onReset={reset}
              />
            </>
          )}
          {activeTab === 'gecmis' && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15">
              <h2 className="font-headline font-bold text-lg mb-6 flex items-center gap-2 text-on-surface">
                Son Hareketler
              </h2>
              <HistoryList entries={history} />
            </div>
          )}
        </div>
      </main>

      <MobileBottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}