'use client';

export function AmbientBg() {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Top right orb */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse opacity-60" />

        {/* Bottom left orb */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse opacity-40" />

        {/* Center subtle orb */}
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl opacity-30"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-30px); }
        }
      `}</style>
    </>
  );
}
