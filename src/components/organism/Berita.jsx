import { useState } from "react";

export default function Berita() {
  const [isClicked, setIsClicked] = useState(false);

  const handleDownloadClick = (e) => {
    // Prevent default link behavior
    e.preventDefault();
    // Trigger animation
    setIsClicked(true);
    const button = e.currentTarget.querySelector("a");
    console.log(button.href, "<<<<<", button.download);
    // Remove animation after it ends
    setIsClicked(button.href);
    button.classList.add("transform", "scale-110");
    setTimeout(() => {
      setIsClicked(null);
      button.classList.remove("transform", "scale-110");
    }, 300); // Animation duration in ms

    downloadFile(button.href, button.download);
  };

  const downloadFile = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-24 pb-36 bg-white overflow-hidden">
      <div className="container p-5 mx-auto ">
        <h2 className="mb-4 text-5xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-tight font-serif italic">
          Laporan
        </h2>
        <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
          Sebagai organisasi yang menjujung transparansi dan akuntabilitas,
          ZakatLoop melaporkan kegiatan-kegiatan yang dilakukan beserta
          penggunaan dananya melalui laporan tahunan yang rutin diterbitkan.
        </p>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap -mx-4 gap-2 justify-center items-center">
          <div className="w-2/3 lg:w-1/3 mb-12 lg:mb-0 bg-gray-200 shadow-xl rounded-xl">
            <img
              className="block w-full h-64 mb-6 object-cover rounded-t-xl"
              src="/images/Laporan_Tahunan_2023.png"
              alt="Laporan Tahun 2023 Image"
            />
            <div className="max-w-sm mx-auto">
              <span className="text-xs md:text-sm text-white font-semibold bg-green-500 py-1 px-3 rounded-full inline">
                2023<br></br>
              </span>

              <h3 className="font-heading font-medium text-lg mt-2 mb-4 hover:text-blue-600 hover:cursor-pointer">
                Laporan Tahunan (2023)
              </h3>
              <p className="leading-7 mb-4">
                Program:<br></br> - Student Fellowship - Batch 2 <br></br> -
                Accelerate Tech Fellowship
              </p>
              <div onClick={handleDownloadClick}>
                <a
                  href="/documents/Laporan_Tahunan_2023.pdf"
                  download="Laporan Kegiatan Zakatloop 2023.pdf"
                  target="_blank"
                  className={`w-full mb-8 block bg-green-700 text-center cursor-pointer px-3 py-1 rounded-lg text-white transition-transform duration-300 ${
                    isClicked === "/documents/Laporan_Tahunan_2023.pdf"
                      ? "transform scale-110"
                      : ""
                  }`}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/3 lg:w-1/3 mb-12 lg:mb-0 bg-gray-200 shadow-xl rounded-xl">
            <img
              className="block w-full h-64 mb-6 object-cover rounded-t-xl"
              src="/images/Laporan_Tahunan_2022.png"
              alt=""
            />
            <div className="max-w-sm mx-auto">
              <span className="text-xs md:text-sm text-white font-semibold bg-green-500 py-1 px-3 rounded-full inline">
                2022<br></br>
              </span>

              <h3 className="font-heading font-medium text-lg mt-2 mb-4 hover:text-blue-600 hover:cursor-pointer">
                Laporan Tahunan (2022)
              </h3>
              <p className="leading-7 mb-4">
                Program:<br></br>- Student Fellowship - Batch 1 <br></br>-
                Student Fellowship - Batch 2 <br></br>
              </p>
              <div onClick={handleDownloadClick}>
                <a
                  href="/documents/Laporan_Tahunan_2022.pdf"
                  download="Laporan Kegiatan Zakatloop 2022.pdf"
                  target="_blank"
                  className={`w-full mb-8 block bg-green-700 text-center cursor-pointer px-3 py-1 rounded-lg text-white transition-transform duration-300 ${
                    isClicked === "/documents/Laporan_Tahunan_2022.pdf"
                      ? "transform scale-110"
                      : ""
                  }`}
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="w-2/3 lg:w-1/3 mb-12 lg:mb-0 bg-gray-200 shadow-xl rounded-xl">
            <img
              className="block w-full h-64 mb-6 object-cover rounded-t-xl"
              src="/images/Laporan_Periode_1.png"
              alt=""
            />
            <div className="max-w-sm mx-auto">
              <span className="text-xs md:text-sm text-white font-semibold bg-green-500 py-1 px-3 rounded-full inline">
                2021 - 2022<br></br>
              </span>

              <h3 className="font-heading font-medium text-lg mt-2 mb-4 hover:text-blue-600 hover:cursor-pointer">
                Laporan Kegiatan Periode 1 (Sep 2021 - Juni 2022)
              </h3>
              <p className="leading-7 mb-4">
                Program:<br></br>- Entrepreneur in Residence<br></br>- Student
                Fellowship - Batch 1<br></br>
              </p>
              <div onClick={handleDownloadClick}>
                <a
                  href="/documents/Laporan_Periode_1.pdf"
                  download="Laporan Kegiatan Zakatloop 2021.pdf"
                  target="_blank"
                  className={`w-full mb-8 block bg-green-700 text-center cursor-pointer px-3 py-1 rounded-lg text-white transition-transform duration-300 ${
                    isClicked === "/documents/Laporan_Periode_1.pdf"
                      ? "transform scale-110"
                      : ""
                  }`}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
