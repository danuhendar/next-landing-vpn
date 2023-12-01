import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const links = ["13700116789659","7181382168","7090016717"];
const copylink_rek_bca = (e) => {
    navigator.clipboard.writeText(links[0])
}
const copylink_rek_bsi = (e) => {
  navigator.clipboard.writeText(links[1])
}
const copylink_rek_muamalat = (e) => {
  navigator.clipboard.writeText(links[2])
}


const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
   
  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-3 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            
            <div className=" flex w-full">
              <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
                <div class="px-6 py-6">
                  <div class="font-bold text-xl mb-2">BCA</div>
                  <Image
                      src="/assets/Logo-Bank-BCA-1.png"
                      width={440}
                      height={250}
                      alt="Picture of the author"
                    />
                  <p class="text-gray-700 text-base text-center">
                    No. Rekening : 
                  </p>
                  <p class="text-gray-700 text-base text-center">
                  <strong className="font-medium">13700116789659</strong>
                  </p>
                  <p class="text-gray-700 text-base text-center">
                    Atas Nama : 
                  </p>
                  <p class="text-gray-700 text-base text-center">
                  <strong className="font-medium">PT. HALAWA BINTANG UTAMA</strong>
                  </p>
                </div>
                <div class="px-6 py-4 text-center">
                 
                <ButtonPrimary data={links[0]}>Salin No. Rekening</ButtonPrimary>
                </div>
              </div>
            </div>

            <div className=" flex w-full">
              <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
                <div class="px-6 py-6">
                  <div class="font-bold text-xl mb-2">BSI</div>
                  <Image
                      src="/assets/bsi.jpeg"
                      width={440}
                      height={250}
                      alt="Picture of the author"
                    />
                  <p class="text-gray-700 text-base text-center">
                    No. Rekening : 
                  </p>
                  <p class="text-gray-700 text-base text-center">
                  <strong className="font-medium">7181382168</strong>
                  </p>
                  <p class="text-gray-700 text-base text-center">
                    Atas Nama : 
                  </p>
                  <p class="text-gray-700 text-base text-center">
                  <strong className="font-medium">PT. HALAWA BINTANG UTAMA</strong>
                  </p>
                </div>
                <div class="px-6 py-4 text-center">
                <ButtonPrimary data={links[1]}>Salin No. Rekening</ButtonPrimary>
                </div>
              </div>
            </div>

            <div className=" flex w-full">
              <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
                <div class="px-6 py-6">
                  <div class="font-bold text-xl mb-2">MUAMALAT</div>
                  <Image
                      src="/assets/Bank-Muamalat.png"
                      width={440}
                      height={250}
                      alt="Picture of the author"
                    />
                  <p class="text-gray-700 text-base text-center">
                    No. Rekening : 
                  </p>
                  <p class="text-gray-700 text-base text-center">
                  <strong className="font-medium">7090016717</strong>
                  </p>
                  <p class="text-gray-700 text-base text-center">
                    Atas Nama : 
                  </p>
                  <p class="text-gray-700 text-base text-center">
                  <strong className="font-medium">PT. HALAWA BINTANG UTAMA</strong>
                  </p>
                </div>
                <div class="px-6 py-4 text-center">
                <ButtonPrimary data={links[2]}>Salin No. Rekening</ButtonPrimary>
                </div>
              </div>
            </div>

           
            
            {/* <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div> */}
          </motion.div>
      </ScrollAnimationWrapper>
      {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div> */}
    </div>
  );
};

export default Hero;
