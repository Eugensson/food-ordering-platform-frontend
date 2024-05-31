export const Footer = () => {
  return (
    <footer className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold text-white tracking-tight">
          MernEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex items-center gap-4">
          <span>Privacy Policy</span>
          <span>Term of Service</span>
        </span>
      </div>
    </footer>
  );
};
