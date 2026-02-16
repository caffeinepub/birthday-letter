import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BirthdayLetter from '@/components/BirthdayLetter';
import { Heart } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return <BirthdayLetter />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated hearts background */}
      <div className="absolute inset-0 z-0">
        <div className="hearts-pattern" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center max-w-2xl">
        {/* Envelope illustration */}
        <div className="envelope-container mb-8 animate-float">
          <img
            src="/assets/generated/envelope-hero.dim_1600x900.png"
            alt="Romantic envelope"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-romantic-dark animate-fade-in">
          For My Princess
          <span className="inline-block ml-2">👸🏻</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 text-romantic-medium font-medium animate-fade-in-delay">
          A special message awaits you, Mehak
        </p>

        {/* Open button */}
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-romantic transition-all duration-300 transform hover:scale-105 animate-pulse-gentle bg-romantic-red hover:bg-romantic-red-dark"
        >
          <Heart className="mr-3 h-6 w-6 fill-current" />
          Open
          <Heart className="ml-3 h-6 w-6 fill-current" />
        </Button>

        {/* Decorative hearts */}
        <div className="absolute top-10 left-10 text-romantic-light opacity-30 animate-float-slow">
          <Heart className="h-12 w-12 fill-current" />
        </div>
        <div className="absolute bottom-20 right-10 text-romantic-light opacity-30 animate-float-slower">
          <Heart className="h-16 w-16 fill-current" />
        </div>
        <div className="absolute top-1/3 right-20 text-romantic-light opacity-20 animate-float">
          <Heart className="h-8 w-8 fill-current" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-6 text-center text-sm text-romantic-medium">
        <p>
          Built with <Heart className="inline h-4 w-4 fill-romantic-red text-romantic-red" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'birthday-letter'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-romantic-red hover:text-romantic-red-dark font-medium transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1 text-xs text-romantic-medium/70">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
