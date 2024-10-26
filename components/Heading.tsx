import TagLineBrainWave from "./TagLineBrainWave";


const Heading = ({ className, title, text, tag }:{ className?:string, title?:string, text?:string, tag?:string }) => {
    return (
        <div
            className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
        >
            {tag && <TagLineBrainWave className="mb-4 md:justify-center text-lg  text-secondary dark:text-primary">{tag}</TagLineBrainWave>}
            {title && <h2 className="text-[40px] leading-10 font-extrabold text-black dark:text-white">{title}</h2>}
            {text && <p className="body-2 mt-4 text-black dark:text-white">{text}</p>}
        </div>
    );
};

export default Heading;