import { quote } from "./data";

const QuoteCard = () => {
  return (
    <div className="mx-auto mt-28 max-w-4xl border-l-4 border-emerald-500 pl-8">
      <p className="text-2xl font-medium leading-relaxed text-slate-900">
        “{quote.text}”
      </p>
    </div>
  );
};

export default QuoteCard;