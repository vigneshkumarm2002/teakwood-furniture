/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails({ open, close, product }) {
  const handleBuyNowClick = () => {
    const message = `I'm interested in purchasing the following product:\n\nProduct Name: ${product?.name}\nPrice: ${product?.price}`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "9865446061";

    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-50" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-screen sm:h-auto md:h-[400px] w-full sm:max-w-lg  md:max-w-3xl lg:max-w-4xl transform overflow-hidden sm:rounded-lg bg-white px-4 pb-4 pt-9 text-left shadow-xl transition-all md:my-8  md:p-6">
                <button
                  type="button"
                  className="absolute right-2 top-2 md:right-4 md:top-4 cursor-pointer text-gray-900 hover:text-gray-500 outline-none "
                  onClick={close}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="flex w-full h-full flex-col md:flex-row  items-start gap-x-6 gap-y-4 ">
                  <div className="w-full h-[50%] sm:h-full overflow-hidden rounded-lg bg-gray-100 ">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1683140425081-14c44089acd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-8 h-[50%] sm:h-full justify-between ">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 sm:pr-12">
                        {product?.name}
                      </h2>

                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-lg text-gray-900">{product?.price}</p>

                      <p className="text-base mt-4 text-gray-900">
                        {product?.description}
                      </p>
                    </div>

                    <a
                      onClick={handleBuyNowClick}
                      rel="noopener noreferrer"
                      className="text-center w-max cursor-pointer self-end rounded-md text-base px-3.5 py-2 font-medium text-white shadow-sm bg-[#0E6B66] flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Buy now
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
