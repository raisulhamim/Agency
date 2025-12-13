import { useEffect, useState } from "react";

const Countsuccess = ({ text, retext }) => {
  const target = parseFloat(text);   // 200+ হলে 200 parse করবে
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const speed = Math.abs(Math.floor(duration / target));

    const interval = setInterval(() => {
      start += 1;

      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(start);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div>
      <h1 className="text-lg md:text-[50px] font-['Inter'] text-[#151515] font-bold">
        {text.includes("+") ? `${count}+` : count}
      </h1>

      <p className="text-sm md:text-xl font-['Inter'] font-medium text-[#737373] py-3">
        {retext}
      </p>
    </div>
  );
};

export default Countsuccess;


