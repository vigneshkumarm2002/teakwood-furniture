


export default function Hero() {
  return (
    <main className="bg-[#0E6B66] ">
      <div className="mx-auto   max-w-7xl pb-14  sm:pb-32 pt-[140px]  lg:pt-[170px]">
        <div className="mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="pr-6 lg:pr-0 lg:pl-8 pl-6 mx-auto    w-full lg:max-w-2xl lg:shrink-0 xl:max-w-[600px] text-center lg:text-left flex flex-col items-center  lg:items-start">
            <h1
              style={{ lineHeight: 1.2 }}
              className="text-4xl font-bold text-white sm:text-[54px] font_poppins"
            >
              <span>
              Explore bespoke furniture magic at Teek Woods.
              </span>
            </h1>

            <p className="mt-6 text-xl leading-8 text-white ">
            Transform your living space with the timeless elegance of Teek Woods furniture, where craftsmanship meets sophistication to create an ambiance of unparalleled beauty and comfort.
            </p>
            <div className="mt-10 flex items-center gap-x-6 w-[fit-content] ">
              <a
                href="tel:09876543210"
                target="blank"
                className="min-w-[150px] text-center rounded-md gradient px-3.5 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#A91CDB] "
              >
                Call now
              </a>
            </div>
          </div>
          <div className="w-[100%] px-6 md:px-16 lg:px-0 mt-14 sm:mt-24 lg:mt-[0px] flex flex-col gap-2 sm:gap-4  justify-center items-center lg:items-start">
            {/* <img
              priority
              src={StoneModal.src}
              className=" h-[300px] sm:h-[400px] w-auto lg:h-auto lg:w-full object-cover lg:max-w-none rounded-md "
              width={800}
              height={800}
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
