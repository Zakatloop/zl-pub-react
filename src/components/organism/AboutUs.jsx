const AboutUs = () => {
  const descriptions = [
    'ZakatLoop adalah organisasi non-profit yang berdedikasi untuk memberdayakan dan meningkatkan taraf hidup para penerima zakat dari kalangan anak muda melalui mekanisme penyaluran zakat produktif dalam bentuk program pendidikan dan pelatihan.',
    'Tujuan kami adalah mentransformasikan Mustahik (penerima zakat menjadi Muzakki (pembayar zakat).',
    'ZakatLoop telah memiliki lisensi Unit Pengumpul Zakat (UPZ) di bawah ZakatHub yang diawasi oleh Baznas dan Kitabisa.',
  ];

  return (
    <div className="w-full flex justify-center items-center px-6 lg:px-20 py-10 md:mt-48 2xl:mt-0">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-left mb-10">Tentang Kami</h1>

        <div className="w-full flex flex-col lg:flex-row gap-12">
          {/* image */}
          <div className="w-full lg:w-6/12 flex justify-center items-center">
            <img
              src="images/zl-banner.png"
              alt="ZakatLoop Banner"
              className=" object-fit aspect-video w-full md:w-3/4 lg:w-full rounded-2xl"
            />
          </div>

          {/* information */}
          <div className="w-full lg:w-6/12">
            <p className="text-3xl font-bold mb-8">ZakatLoop</p>

            <div className="flex flex-col gap-4">
              {descriptions.map((desc, i) => {
                return (
                  <p key={i} className=" tracking-wide">
                    {desc}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
