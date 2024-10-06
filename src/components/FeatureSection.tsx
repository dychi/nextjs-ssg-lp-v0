import React, { useEffect, useRef } from "react";
import Image from "next/image";
// GSAP のインポート
import { gsap } from "gsap";

// ScrollTrigger のインポート
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  title: string;
  description: string;
  subDescription: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  id: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  subDescription,
  imageSrc,
  imageAlt,
  isReversed = false,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const slideWidth = 100;

  // レイアウト作成後の動作
  useEffect(() => {
    if (ref.current) {
      // スクロールして要素が表示されるとフェードイン表示する
      console.log(ref.current?.id);
      gsap.from(ref.current, {
        opacity: 0,
        x: isReversed ? -slideWidth : slideWidth,
      });
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          // once: true,
          markers: true, // マーカーを表示
        },
        opacity: 1,
        x: 0,
        duration: 0.5,
      });
    } else {
      console.log("ref is null");
    }
  }, [ref, isReversed]);

  return (
    <div className="bg-white text-blue-600 rounded-lg overflow-hidden mb-8 relative">
      <div
        className={`flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div
          id={`fadeInBox${id}`}
          className="w-full md:w-1/2 p-8 z-10"
          ref={ref}
        >
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="mb-4">{description}</p>
          <p>{subDescription}</p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </div>
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={isReversed ? "100,0 100,100 0,100" : "0,0 100,0 100,100"}
          fill="#0068B7"
          className="opacity-20"
        />
      </svg>
    </div>
  );
};

export default FeatureSection;
