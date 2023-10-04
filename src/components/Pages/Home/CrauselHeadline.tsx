import { usePageData } from "@/store/page";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function CrauselHeadline() {
  const { imageHead, headlineImage } = usePageData();
  const [show, setShow] = useState(true);
  useEffect(() => {
    headlineImage().then(() => setShow(false));
    imageHead;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Carousel>
      {imageHead?.map((image: any, index) => {
        return (
          <div
            key={index}
            className="relative flex items-center h-full max-h-[450px] w-full max-w-[768px] justify-center overflow-hidden rounded-lg shadow-md bg-gradient-to-tr from-pic-200 via-brown-100 to-pic-50"
          >
            {show && (
              <AiOutlineLoading3Quarters className="w-8 h-8 text-pic-900 animate-spin" />
            )}
            {!show && (
              <Image
                height={1280}
                width={1280}
                src={image.image}
                alt={image.alt}
                className="object-cover h-full max-h-[450px] w-full max-w-[768px] md:object-contain"
              />
            )}
          </div>
        );
      })}
    </Carousel>
  );
}
