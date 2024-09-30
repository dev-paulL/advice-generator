import mobileSeparator from "./assets/pattern-divider-mobile.svg";
import diceImg from "./assets/icon-dice.svg";
import { useEffect, useState } from "react";

type AdviceData = {
  id: number;
  advice: string;
};
function App() {
  const [advice, setAdvice] = useState<AdviceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: { slip: AdviceData } = await response.json();
      setAdvice(result.slip); // Extract the 'slip' object from the response
    } catch (err) {
      setError("Failed to fetch advice");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="bg-darkBlue min-h-screen flex items-center justify-center p-4">
      <article className="relative bg-darkGrayishBlue rounded-lg p-6 text-center flex flex-col gap-8 items-center max-w-[50rem] w-4/12">
        <h1 className="text-sm font-bold tracking-[.25em] uppercase text-neonGreen">
          Advice #{advice?.id}
        </h1>

        <blockquote className="relative text-quote text-lightCyan after:content-['»'] before:content-['«']">
          {advice?.advice}
        </blockquote>

        <img src={mobileSeparator} alt="" className="w-full pb-10" />

        <button
          className="absolute cursor-pointer bottom-0 translate-y-8 rounded-full p-5 bg-neonGreen"
          onClick={fetchAdvice}
        >
          <img src={diceImg} alt="" />
        </button>
      </article>
    </main>
  );
}

export default App;
