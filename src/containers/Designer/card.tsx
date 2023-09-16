import { useState, useEffect } from "react";

export const Card = ({
  title,
}: {
  title: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className={`absolute top-0 z-0 left-0 h-full w-0 bg-green-2 transition-all duration-500 ease-in-out ${
          loaded ? "w-full" : ""
        }`}
      ></div>
      <div className="relative p-4 z-10">
        <h2 className="text-xl font-medium text-blue-2 font-medium mb-2">{title}</h2>
      </div>
    </div>
  );
};
