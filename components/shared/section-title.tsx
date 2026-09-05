export type SectionTitleProps = {
  title: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
  border?: boolean;
};

const SectionTitle = ({ title, subtitle, rightElement, border = true }: SectionTitleProps) => {
  return (
    <div
      className={`flex items-center justify-between ${border ? 'border-b border-line/80 pb-6 mb-8' : ''}`}
    >
      <div>
        {subtitle && (
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-widest text-primary block mb-1">
            {subtitle}
          </span>
        )}
        <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl tracking-tight text-ink uppercase">
          {title}
        </h2>
      </div>
      {!!rightElement && rightElement}
    </div>
  );
};

export const SectionDescription = ({ content }: { content: string }) => {
  return (
    <p className="text-xs sm:text-sm text-muted max-w-md mt-3 md:mt-0 leading-relaxed font-normal text-right">
      {content}
    </p>
  );
};

export default SectionTitle;
