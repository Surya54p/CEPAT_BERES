// import Image from "next/image";
import Btn_components from "@/app/components/primaryButton";

export default function HeroSection() {
  return (
    <div className="text-center flex flex-col gap-25  my-35">
      <div>
        <div className="text-center flex flex-col">
          <h1 className="text-[60px] font-bold">Dibikin cepat beres aja</h1>
          <span className="text-[24px] font-extralight ">
            Apalagi untuk kamu yang super sibuk,
            <br /> tapi gk mau ngorbanin nilai boleh banget dibikin cepat beres aja 😁.
          </span>
        </div>

        <div className="flex  justify-center w-full mt-4">
          <div className="flex flex-row items-center  gap-2.5">
            <Btn_components href="/" variant="primary">
              Tanya langsung
            </Btn_components>{" "}
            <Btn_components href="/" variant="secondary">
              Lihat jasa
            </Btn_components>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" grid grid-cols-3 w-fit gap-10">
          <img src="/images/gambarHero1.webp" alt="Gambar 1" className="object-cover rounded-lg" />
          <img src="/images/gambarHero2.webp" alt="Gambar 1" className="object-cover rounded-lg" />
          <img src="/images/gambarHero3.webp" alt="Gambar 1" className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}
