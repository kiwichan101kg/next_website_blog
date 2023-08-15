import React from "react";
import parse from "html-react-parser";
import Image from "next/image";
import { Element } from "html-react-parser";

const ConvertBody = ({ contentHTML }: { contentHTML: string }) => {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (!(node instanceof Element && node.attribs)) {
        return;
      }
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            src={src}
            alt={alt}
            layout="responsive"
            width={parseInt(width)}
            height={parseInt(height)}
            sizes="(min-width:768px) 768px , 100vw"
          ></Image>
        );
      }
    },
  });
  return <>{contentReact}</>;
};

export default ConvertBody;
