import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";

const Finance = () => {
  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col">
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 tracking-[-0.2rem] flex gap-2 items-center">
            <GiTwoCoins />
            Dofinansowanie
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tighter mt-3">
            Uzyskaj dofinansowanie z&nbsp;Bazy Usług Rozwojowych
          </h2>
          <p className="text-base md:text-lg text-zinc-300 mt-4">
            Niniejszym informujemy, że&nbsp;pojawiła się możliwość skorzystania
            z&nbsp;dofinansowania studiów podyplomowych, kursów,
            szkoleń&nbsp;z&nbsp;Bazy Usług Rozwojowych. Dofinansowanie może
            wynosić 80-100% kosztu usług edukacyjnych. <br />
            <br />
            Zapraszamy wszystkich zainteresowanych
            do&nbsp;kontaktu&nbsp;z&nbsp;nami w&nbsp;celu uzyskania informacji,
            gdzie należy złożyć wniosek&nbsp;.
          </p>
          <div className=" flex items-center gap-5">
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              516 826 025
              <FaPhone className="text-xl" />
            </button>
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              502 162 365
              <FaPhone className="text-xl" />
            </button>
          </div>
          <a
            href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144"
            target="_blank"
            aria-label="poznaj naszą ofertę Bazy Usług Rozwojowych"
          >
            <button className="bg-blue-700 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              Poznaj naszą ofertę BUR
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </a>
        </div>

        {/* Image Column */}
        <div className="bg-gray-50 flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col">
          <h4 className="text-2xl md:text-3xl font-semibold text-[#9E5AE2] tracking-[-0.2rem] flex gap-2 items-center">
            <BsInfoCircleFill />
            Informacja
          </h4>
          <h2 className="text-3xl md:text-5xl text-zinc-800 font-semibold tracking-tighter mt-3">
            Nieoprocentowane pożyczki
          </h2>
          <p className="text-base md:text-lg text-zinc-600 mt-4">
            Ministerstwo Rozwoju uruchomiło nieoprocentowane pożyczki
            na&nbsp;kształcenie obejmujące m.in.&nbsp;studia podyplomowe, kursy,
            szkolenia. W&nbsp;ramach Programu Operacyjnego Wiedza Edukacja
            Rozwój możesz otrzymać nawet do&nbsp;50&nbsp;000&nbsp;zł&nbsp;pomocy
            zwrotnej bez żadnych dodatkowych kosztów. <br />
            <br />
            Co&nbsp;ważne, istnieje możliwość umorzenia 20–25% przyznanej kwoty.
            <br />
            <br />
            Zachęcamy do&nbsp;zapoznania się&nbsp;z&nbsp;informacjami odnośnie
            nieoprocentowanych pożyczek. Więcej informacji znajdą Państwo
            na&nbsp;stronie www.inwestujwrozwoj.pl
          </p>
          <Link
            href="https://inwestujwrozwoj.pl/"
            target="_blank"
            aria-label="dowiedz się więcej&nbsp;o&nbsp;nieoprocentowanych pożyczkach"
          >
            <button className="bg-[#9E5AE2] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              inwestujwrozwoj.pl
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Finance;
