type AppPhoneProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Real simulator capture, presented inside a responsive device frame. */
export default function AppPhone({ src, alt, className = "", priority = false }: AppPhoneProps) {
  return (
    <div className={`app-phone ${className}`}>
      <img
        src={src}
        alt={alt}
        width={1206}
        height={2622}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
