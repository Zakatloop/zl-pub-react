const OurValues = () => {
  const values = [
    {
      title: 'Dampak yang berkelanjutan',
      icon: 'svg/value-01.svg',
      description:
        'ZakatLoop percaya pada kekuatan Zakat, Infaq, dan Sodaqoh dalam menciptakan dampak melalui penyaluran produktif, seperti untuk pendidikan & pengembangan karir.',
    },
    {
      title: 'Membangun komunitas dan kekeluargaan',
      icon: 'svg/value-02.svg',
      description:
        'ZakatLoop membangun hubungan antara para Muzakki dan penerima manfaat melalui kolaborasi pada program-program yang dijalankan.',
    },
    {
      title: 'Profesional dan transparan',
      icon: 'svg/value-03.svg',
      description:
        'Menjunjung tinggi standar transparansi dengan memberikan pembaruan secara berkala serta komprehensif mengenai program dan pengelolaan dana kami kepada publik.',
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-teal-500/0 px-6 md:px-20 py-10">
      <div className="w-full flex flex-col gap-8 justify-center items-center h-3/4">
        <h1 className="text-5xl font-bold text-center text-green-900">
          Our Values
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-start gap-4 border border-teal-500 rounded-xl bg-teal-500/20 backdrop-blur-md p-8 lg:p-10 shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={value.icon}
                    alt={'Image Value' + i}
                    className="w-20 h-20 rounded-xl"
                  />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>

                <p className="tracking-wider">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
