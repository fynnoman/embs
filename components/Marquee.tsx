type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className = "" }: Props) {
  const duplicated = [...items, ...items];
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 whitespace-nowrap"
          >
            <span className="font-display text-[clamp(2.4rem,7vw,7.5rem)] font-light italic tracking-tightest text-walnut-deep/85">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-ochre" />
          </span>
        ))}
      </div>
    </div>
  );
}
