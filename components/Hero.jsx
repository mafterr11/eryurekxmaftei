import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="acasa"
      className="h-screen bg-hero relative bg-center bg-no-repeat bg-cover"
    >
      <div className="absolute inset-0 bg-black/35 z-0" />
      <div className="flex items-center flex-col justify-center h-full relative">
        <div className="mb-20">
          <h1 className="font-alexBrush tracking-widest font-thin mb-3">
            Deniz & Alexandru
          </h1>
          <h4 className="text-center">30 Mai 2026 - Bucuresti</h4>
        </div>
        <div className="absolute w-44 h-44 bottom-18">
          <Image
            src="/assets/our_wedding.gif"
            fill
            alt="Our wedding text"
            unoptimized={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
