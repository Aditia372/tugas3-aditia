/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaPencilAlt, FaTrashAlt, FaSave, FaBan } from "react-icons/fa";

export default function ListMatkul() {
  const [matkul, setMatkul] = useState([
    {
      id: 1,
      name: "Analisis dan Perancangan Perusahaan",
      dosen: "Ir. Sjamsuridal",
      sks: 3,
    },
    {
      id: 2,
      name: "Sistem Rantai Pasok",
      dosen: "Acbaharudin",
      sks: 2,
    },
    {
      id: 3,
      name: "Sistem Lingkungan Industri",
      dosen: "Sifa Abdullah",
      sks: 3,
    },
    {
      id: 4,
      name: "Pemrograman Database",
      dosen: "Atep Saefullah",
      sks: 2,
    },
    {
      id: 5,
      name: "Proses Manufaktur",
      dosen: "Muhammad Rama",
      sks: 3,
    },
    {
      id: 6,
      name: "Manajemen Proyek",
      dosen: "Ir. Sjamsuridal",
      sks: 3,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filterSKS, setFilterSKS] = useState("");
  const [sorting, setSorting] = useState("");

  const tambahMatkul = (matkulBaru) => {
    setMatkul([...matkul, matkulBaru]);
  };

  const hapusMatkul = (idMatkul) => {
    setMatkul(matkul.filter((mat) => mat.id !== idMatkul));
  };

  const [editingId, setEditingId] = useState(null);
  const [editingMatkul, setEditingMatkul] = useState({});

  const editMatkul = (idMatkul) => {
    const matkulToEdit = matkul.find((mat) => mat.id === idMatkul);
    setEditingId(idMatkul);
    setEditingMatkul({ ...matkulToEdit });
  };

  const updateMatkul = (e) => {
    e.preventDefault();
    const updatedMatkul = {
      id: editingId,
      name: editingMatkul.name,
      dosen: editingMatkul.dosen,
      sks: editingMatkul.sks,
    };
    setMatkul((prevMatkul) =>
      prevMatkul.map((mat) =>
        mat.id === updatedMatkul.id ? updatedMatkul : mat
      )
    );
    setEditingId(null);
    setEditingMatkul({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingMatkul((prevMatkul) => ({
      ...prevMatkul,
      [name]: value,
    }));
  };

  const handleFilterSKS = (e) => {
    setFilterSKS(e.target.value);
  };

  const handleSort = (type) => {
    setSorting(type);
  };

  const filteredMatkul = matkul
    .filter((mat) => mat.name.toLowerCase().includes(search.toLowerCase()))
    .filter((mat) => (filterSKS ? mat.sks === parseInt(filterSKS) : true))
    .sort((a, b) => {
      if (sorting === "name") {
        return a.name.localeCompare(b.name);
      } else if (sorting === "sks") {
        return a.sks - b.sks;
      } else {
        return 0;
      }
    });

  const DaftarMatkul = ({ matkul }) => (
    <div className="rounded-lg border border-gray-200  p-4 shadow-md">
      <ul className="space-y-2">
        {matkul.map((matkul, index) => (
          <li
            key={matkul.id}
            className={`flex items-center justify-between ${
              index % 2 === 0 ? "bg-red-800" : "bg-amber-500"
            } p-2 rounded`}
          >
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-white">{matkul.name}</span>
              <span className="text-gray-300">- {matkul.dosen}</span>
              <span className="text-gray-300">- {matkul.sks} SKS</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => editMatkul(matkul.id)}
                className="bg-transparent border-none"
              >
                <FaPencilAlt className="h-5 w-5 text-blue-950 hover:text-white" />
              </button>
              <button
                onClick={() => hapusMatkul(matkul.id)}
                className="bg-transparent border-none"
              >
                <FaTrashAlt className="h-5 w-5 text-blue-600 hover:text-white" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className="max-w-full mx-auto p-4 flex space-x-4"
      style={{ height: "600px" }}
    >
      <div className="w-1/3 bg-slate-900 shadow-md rounded p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4 text-white">
          {editingId ? "Edit Mata Kuliah" : "Tambah Mata Kuliah"}
        </h1>
        <form
          onSubmit={
            editingId
              ? updateMatkul
              : (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const matkulBaru = {
                    id: Date.now(),
                    name: formData.get("name"),
                    dosen: formData.get("dosen"),
                    sks: parseInt(formData.get("sks")),
                  };
                  tambahMatkul(matkulBaru);
                  e.target.reset();
                }
          }
          className="space-y-4 max-w-md mx-auto"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="nama" className="text-white font-bold">
              Nama Mata Kuliah:
            </label>
            <input
              type="text"
              id="nama"
              name="name"
              value={editingMatkul.name || ""}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="dosen" className="text-white font-bold">
              Dosen:
            </label>
            <input
              type="text"
              id="dosen"
              name="dosen"
              value={editingMatkul.dosen || ""}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="sks" className="text-white font-bold">
              SKS:
            </label>
            <input
              type="number"
              id="sks"
              name="sks"
              value={editingMatkul.sks || ""}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editingId ? (
              <FaSave className="inline-block mr-2" />
            ) : (
              <FaPlus className="inline-block mr-2" />
            )}
            {editingId ? "Update Mata Kuliah" : "Tambah Mata Kuliah"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setEditingMatkul({});
              }}
              className="bg-orange-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              <FaBan className="inline-block mr-2" />
              Batal
            </button>
          )}
        </form>
      </div>
      <div className="w-2/3 bg-slate-900 shadow-md rounded p-4 overflow-y-auto">
        <h1 className="text-2xl text-white font-bold mb-4">
          Daftar Mata Kuliah
        </h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Cari mata kuliah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
          <select
            value={filterSKS}
            onChange={handleFilterSKS}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Semua SKS</option>
            <option value="2">2 SKS</option>
            <option value="3">3 SKS</option>
          </select>
          <button
            onClick={() => handleSort("name")}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Urutkan Nama
          </button>
          <button
            onClick={() => handleSort("sks")}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Urutkan SKS
          </button>
        </div>
        <DaftarMatkul matkul={filteredMatkul} />
      </div>
    </div>
  );
}
