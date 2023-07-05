import { Disclosure, RadioGroup } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
export default function ProductFilter(props: any) {
  const { selected, paket, setSelected, ecer } = props;
  function resetSelect() {
    setSelected([""]);
  }
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-brown-900 font-poppins font-medium">
          Filter
        </h2>
        <button
          onClick={resetSelect}
          className="px-2 py-1 bg-white shadow-md rounded-lg text-sm font-poppins font-normal border border-brown-100"
        >
          Reset
        </button>
      </div>
      <hr className="my-3" />
      <div className="grid gap-3">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pic-100 px-4 py-2 text-left text-sm font-medium text-brown-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-pic-500 focus-visible:ring-opacity-75">
                <span>Paket</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-pic-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-2 text-sm text-brown-500">
                <RadioGroup
                  value={selected}
                  onChange={setSelected}
                  as={"div"}
                  className="grid gap-3"
                >
                  {paket?.map((pakets: any) => {
                    return (
                      <RadioGroup.Option
                        key={pakets.code}
                        value={pakets}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-pic-300"
                              : ""
                          }
                              ${
                                checked
                                  ? "bg-pic-900 bg-opacity-75 text-white"
                                  : "bg-pic-50"
                              }
                                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-brown-900"
                                    }`}
                                  >
                                    {pakets.category}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    );
                  })}
                </RadioGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pic-100 px-4 py-2 text-left text-sm font-medium text-brown-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-pic-500 focus-visible:ring-opacity-75">
                <span>Ecer</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-pic-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-2 text-sm text-brown-500">
                <RadioGroup
                  value={selected}
                  onChange={setSelected}
                  as={"div"}
                  className="grid gap-3"
                >
                  {ecer?.map((ecers: any) => {
                    return (
                      <RadioGroup.Option
                        key={ecers.code}
                        value={ecers}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-pic-300"
                              : ""
                          }
                              ${
                                checked
                                  ? "bg-pic-900 bg-opacity-75 text-white"
                                  : "bg-pic-50"
                              }
                                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-brown-900"
                                    }`}
                                  >
                                    {ecers.category}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    );
                  })}
                </RadioGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
