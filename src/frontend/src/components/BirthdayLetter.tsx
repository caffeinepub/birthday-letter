import { Heart, Sparkles } from 'lucide-react';

export default function BirthdayLetter() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-8 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="hearts-pattern opacity-30" />
      </div>

      {/* Letter container */}
      <main className="relative z-10 w-full max-w-3xl">
        <div className="letter-paper rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 animate-scale-in">
          {/* Letter header decoration */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-romantic-red animate-pulse" />
              <Heart className="h-10 w-10 text-romantic-red fill-romantic-red animate-pulse-gentle" />
              <Sparkles className="h-8 w-8 text-romantic-red animate-pulse" />
            </div>
          </div>

          {/* Letter title */}
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-romantic-dark">
            Happy Birthday 🎂
            <br />
            <span className="text-romantic-red">My Princess 👸🏻💞</span>
          </h1>

          {/* Letter content */}
          <div className="letter-content text-lg md:text-xl leading-relaxed text-romantic-dark space-y-6">
            <p className="text-center font-medium italic">
              Subah bhi tum, shaam bhi tum,
              <br />
              Har khushi ka naam bhi tum,
              <br />
              Zindagi jo adhoori lagti thi
              <br />
              Us kahani ka anjaam bhi tum..💞🫂
            </p>

            <p className="text-center font-semibold text-romantic-red text-2xl">
              I love you
            </p>

            <p className="text-center">
              Upar waala tumko wo har khushi de jiske tum haqdaar ho
              <br />
              Or me to tumhara hu hi jaan 😚💗
            </p>
          </div>

          {/* Letter footer decoration */}
          <div className="flex justify-center mt-12 gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="h-6 w-6 text-romantic-red fill-romantic-red animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* Signature area */}
          <div className="mt-8 text-right">
            <p className="text-romantic-medium italic">Forever yours,</p>
            <p className="text-2xl font-bold text-romantic-red mt-2">Your Love 💕</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-8 py-6 text-center text-sm text-romantic-medium">
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
