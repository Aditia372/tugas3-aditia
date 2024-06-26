
function About() {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-red-100 p-8 rounded-lg shadow-md mt-48">
        <h1 className="text-4xl font-bold mb-4 text-center">Tentang Projek Daftar Mata Kuliah</h1>
        <p className="text-lg leading-relaxed">
          Projek ini merupakan bagian dari tugas ketiga dalam pelatihan aplikasi web menggunakan React JS.
          Aplikasi ini didesain untuk menampilkan daftar mata kuliah, menggabungkan fungsionalitas 
          dan estetika yang menarik.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Fitur utama aplikasi meliputi tata letak header yang dinamis dengan navigasi yang intuitif untuk menuju ke 
          halaman Home, About, dan Contact.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Aplikasi juga memanfaatkan elemen desain modern untuk memastikan pengalaman pengguna yang optimal, termasuk 
          integrasi dengan gambar latar belakang yang menarik dan tombol Lihat List yang mudah dikenali untuk 
          navigasi ke daftar lengkap mata kuliah.
        </p>
      </div>
    </div>
  );
}

export default About;
