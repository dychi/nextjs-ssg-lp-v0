import { useState } from "react";
import Head from "next/head";
import { PlayIcon } from "@heroicons/react/24/solid";
import FeatureSection from "../components/FeatureSection";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-blue-600 min-h-screen text-white">
      <Head>
        <title>スバラシイ - 革新的な空気清浄機</title>
        <meta
          name="description"
          content="スバラシイ - 革新的な空気清浄機。あなたの生活を変える、驚きの空気清浄テクノロジー。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg')" }}
        >
          <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="writing-vertical-rl text-right">
              <h1 className="text-6xl font-bold mb-4 transform duration-300 ">
                驚く。
              </h1>
              <p className="text-2xl mb-8">愛用者代表 有名人</p>
              <a
                href="#"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition inline-block"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white text-blue-600 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">MOVIE</h2>
            <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={toggleVideo}
                    className="bg-blue-600 text-white rounded-full p-4 hover:bg-blue-700 transition duration-300"
                  >
                    <PlayIcon className="h-12 w-12" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="features" className="py-12">
          <div className="container mx-auto px-4">
            <FeatureSection
              id="1"
              title="軽い"
              description="シリーズ最軽量の220グラム"
              subDescription="ドクターエアガンシリーズにおいて"
              imageSrc="/placeholder.svg"
              imageAlt="軽量デモンストレーション"
            />
            <FeatureSection
              id="2"
              title="パワフル"
              description="最大約3,000回/分の衝撃性振動"
              subDescription="ブラシレスモーター搭載"
              imageSrc="/placeholder.svg"
              imageAlt="パワフルデモンストレーション"
              isReversed
            />
            <FeatureSection
              id="3"
              title="コンパクト"
              description="シリーズ最小のポケットサイズ"
              subDescription=""
              imageSrc="/placeholder.svg"
              imageAlt="コンパクトデモンストレーション"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
