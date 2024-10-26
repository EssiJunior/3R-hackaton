import brackets from "@/public/assets/images/svg/Brackets";

const TagLineBrainWave = ({ className, children }:{className?: string, children?: React.ReactNode}) => {
    return (
        <div className={`tagline flex items-center ${className || ""}`}>
            {brackets("left")}
            <div className="mx-3 text-secondary dark:text-primary">{children}</div>
            {brackets("right")}
        </div>
    );
};

export default TagLineBrainWave;