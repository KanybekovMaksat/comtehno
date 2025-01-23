export function Title({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <h2 className={`text-2xl md:text-3xl font-bold text-tundora my-4 ${className || ""}`}>
        {children}
      </h2>
    );
  }
  