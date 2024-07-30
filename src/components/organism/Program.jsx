export default function Program(ourPrograms) {
  return (
    <div className="bg-green-400">
      <section className="relative pt-24 pb-36 overflow-hidden">
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src="flaro-assets/images/contact/gradient.svg"
          alt=""
        />
        <div className="relative z-10 container px-4 mx-auto">
          <p className="mb-5 text-3xl md:text-6xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none animate-bounce text-white">
            Program Kami
          </p>
          <p className="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto text-white">
            Selama 2021 - 2024, ZakatLoop telah menjalankan 3 program utama.
            Sasaran penerima manfaat dari program-program kami yaitu anak muda
            (18 - 25 tahun) dari golongan penerima zakat (asnaf zakat).
          </p>

          <div className="flex flex-wrap -m-3">
            <div className="w-full lg:w-1/3 p-3 transform lg:scale-90 lg:hover:scale-95 duration-500 hover:cursor-pointer">
              {" "}
              {/* Card Kiri */}
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl transition ease-in-out duration-300">
                <div className="mb-6 relative mx-auto w-24 h-24 border border-blueGray-200 rounded-full">
                  <img
                    src="/images/2_EIR.svg"
                    alt="Logo Program Entrepreneur in Residence"
                    className="mx-auto object-fit rounded-full"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Entrepreneur in Residence
                </h3>
                <p className="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                  Program bantuan kewirausahaan untuk memberdayakan entrepreneur
                  muda. Bantuan yang diberikan berupa alat produksi dan
                  pelatihan pengelolaan bisnis. Durasi program: dua bulan.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-3 transform lg:scale-110 lg:hover:scale-125 duration-500 hover:cursor-pointer">
              {" "}
              {/* Card Tengah */}
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl transition ease-in-out duration-300">
                <div className="mb-6 relative mx-auto w-24 h-24 border border-blueGray-200 rounded-full">
                  <img
                    src="/images/1_Student_Fellowship.svg"
                    alt="Logo Program Student Fellowship"
                    className="mx-auto object-fit rounded-full"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Student Fellowship
                </h3>
                <p className="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                  Program bantuan finansial (UKT & tunjangan kehidupan) serta
                  pengembangan karir komprehensif bagi mahasiswa tingkat akhir
                  (tahun ke-3 dan ke-4). Durasi program: satu tahun.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-3 transform lg:scale-90 lg:hover:scale-95 duration-500 hover:cursor-pointer">
              {" "}
              {/* Card Kanan */}
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl transition ease-in-out duration-300">
                <div className="mb-6 relative mx-auto w-24 h-24 border border-blueGray-200 rounded-full">
                  <img
                    src="/images/3_Tech Fellowship.svg"
                    alt="Logo Program Tech Fellowship"
                    className="mx-auto object-fit rounded-full"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Accelerate Tech Fellowship
                </h3>
                <p className="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                  Program pengembangan talenta digital siap kerja melalui
                  Bootcamp Full Stack JavaScript (Hacktiv8) dan bimbingan
                  pengembangan karir. Durasi program: 4 bulan pembelajaran, 6
                  bulan job preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
