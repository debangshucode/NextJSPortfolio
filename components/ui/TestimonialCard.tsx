interface TestimonialCardProps {
  quote: string;
  name: string;
  img: string;
  star: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  img,
  star,
  title,
}) => {
  return (
    <div
      className="bg-[#0d0d0d] text-white p-6 rounded-2xl border border-gray-700 shadow-lg w-[300px]  hover:shadow-[0_4px_20px_rgba(203,45,45,0.7)] transition-all duration-300"
      style={{
        background:
          "radial-gradient(circle, rgba(203, 45, 45, 0.2) 10%, rgba(0, 0, 0, 0.8) 90%)",
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={img}
          alt={name}
          width={40}
          height={40}
          className="rounded-full h-[40px] w-[40px]"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-yellow-400 text-sm">{star}</p>
        </div>
      </div>
      <h4 className="text-md font-bold text-red-500 mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
