import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag, gradientText }) => {
  const renderTitle = () => {
    if (!title || !gradientText) return title;

    const parts = title.split(gradientText);
    if (parts.length === 1) return title; // gradientText not found in title

    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-br from-indigo-400 via-indigo-300 to-indigo-700 bg-clip-text text-transparent">
          {gradientText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && (
        <h2 className="font-geist text-3xl tracking-tighter text-gray-100 sm:text-6xl">
          {renderTitle()}
        </h2>
      )}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
