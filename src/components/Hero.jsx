export default function Hero() {
  return (
    <section className="bg-[#D9F99D] min-h-[350px] flex flex-col justify-center px-6 py-10 md:px-20 md:py-20">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#4B6A07] leading-tight mb-4">
        The Ultimate Blog Platform for Your Success
      </h1>
      <p className="text-lg md:text-xl text-[#53665D] max-w-lg mb-6">
        Empower your voice, grow your audience, and share your passion with ease.
      </p>
      <button className="bg-[#4B6A07] text-white font-semibold px-6 py-3 rounded-md w-max hover:bg-[#3d5805] transition">
        Get Started
      </button>
    </section>
  );
}
