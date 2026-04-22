import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Açık tema' : 'Koyu tema'}
      className="hover:bg-indigo-500/10 transition-colors p-2 rounded-full flex items-center justify-center cursor-pointer text-indigo-400"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
