export default function ServiceSection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-16 py-16">
      {/* Kiri: Hero Text */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1a1a1a]">
          Kami bisa bantu kamu <br /> selesain projek kamu.
        </h2>
        <p className="text-gray-600 mt-4 max-w-md">
          Kami bisa bantu kamu mulai dari <b>PPT</b>, <b>desain website</b>,
          bahkan <b>website untuk usaha kamu</b> juga bisa!
        </p>
        <button className="mt-6 bg-[#272727] text-white px-5 py-2 rounded-[5px] hover:bg-[#333] transition-all">
          Hubungi sekarang
        </button>
      </div>

      {/* Kanan: Cards */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Card 1 */}
        <div className="border border-purple-200 bg-purple-50 rounded-[10px] p-4">
          <h3 className="font-semibold text-[#272727] mb-1">Website Usaha</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tampilkan profil usahamu secara profesional dengan website yang informatif dan mudah diakses. 
            Bisa langsung terhubung ke WhatsApp, Instagram, dan kontak lainnya.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-pink-200 bg-pink-50 rounded-[10px] p-4">
          <h3 className="font-semibold text-[#272727] mb-1">Desain Website</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Kami mendesain website yang sesuai dengan kebutuhanmu, fokus pada kejelasan pesan dan pengalaman pengguna yang efektif.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-orange-200 bg-orange-50 rounded-[10px] p-4">
          <h3 className="font-semibold text-[#272727] mb-1">PPT</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Presentasi menarik, desain rapi, dan sesuai tema yang kamu mau. 
            Dibuat langsung di Canva biar hasilnya maksimal dan siap tampil.
          </p>
        </div>
      </div>
    </section>
  );
}
