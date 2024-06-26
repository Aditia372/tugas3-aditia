// import Header from "../components/Header";

import { Link } from "react-router-dom";
export function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center mt-0 bg-no-repeat bg-center"
      style={{ backgroundImage: "url('foto.png')" }}
    >
      <div className="text-yellow-400 ml-11 max-w-xl">
        <h1 className="text-6xl font-semibold leading-normal">
          Daftar Mata Kuliah
          <br /> Teknik Industri
        </h1>
        <p className="text-white ml-2 text-xl">
          Ini adalah Tugas ke tiga membuat project sederhana menggunakan React
          Js
        </p>
      </div>
      <div className="mt-10 ml-12">
        <Link
          className="bg-yellow-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-yellow-300"
          to="/list-matkul"
        >
          Lihat List
        </Link>
      </div>
    </div>
  );
}
