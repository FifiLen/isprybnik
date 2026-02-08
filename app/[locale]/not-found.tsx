import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100 z-50">
      <div className="bg-cyan-200 md:w-1/2 h-full flex items-center justify-center">
        <Image
          src="/assets/404-illustration.svg"
          alt="404 Illustration"
          width={700}
          height={700}
          className="mx-auto"
        />
      </div>
      <div className="bg-white md:w-1/2 h-full flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-8xl font-black text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">
          OoOps! <br />
          Nie znaleziono strony
        </p>
        <p className="text-lg text-gray-500 mt-2">
          Ta strona nie istnieje lub została usunięta. <br />
          Sugerujemy powrót do strony głównej.
        </p>
        <Link href="/">
          <p className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer">
            Powrót na stronę główną
          </p>
        </Link>
      </div>
    </div>
  );
}
