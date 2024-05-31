import hero from "../assets/hero.png";

export const Hero = () => {
  return (
    <section>
      <img
        src={hero}
        alt="Big burger, fries and catchup"
        className="w-full max-h-[600px] object-cover"
      />
    </section>
  );
};
