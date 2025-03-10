import womanbag from "../assets/womanbag.jpg";
import fashionmodelwoman from "../assets/fashionmodelwoman.jpg";
import fashionmodelman from "../assets/fashionmodelman.jpg";
import makeup from "../assets/makeup.jpg";

export default function InstagramStories() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl m-auto gap-8">
      <h1 className="font-mono font-bold text-2xl md:text-2xl dark:text-white">
        Our Instagram Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <img className="w-60 h-60 object-cover" src={womanbag} alt="" />
        <img
          className="w-60 h-60 object-cover"
          src={fashionmodelwoman}
          alt=""
        />
        <img className="w-60 h-60 object-cover" src={fashionmodelman} alt="" />
        <img className="w-60 h-60 object-cover" src={makeup} alt="" />
      </div>
    </div>
  );
}
