import Layout from "@/components/Layout/layout";
import Breadcrumb from "@/components/Widget/breadcrumb";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";
import Head from "next/head";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title> LS Skincare - Profile </title>
      </Head>
      <Breadcrumb title="Profile" navigate="profile" />
      <section className="container mx-auto my-5">
        <div className="grid grid-cols-12 gap-6 pb-3">
          <div className="col-span-12 lg:col-span-4">
            <div className="p-5 bg-pic-50 rounded-lg shadow-md flex flex-col justify-center items-center">
              <div className="w-full mb-3 flex flex-col justify-center items-center">
                <div className="w-44 h-44 mb-3 rounded-full bg-pic-900"></div>
                <h1 className="text-xl font-poppins font-semibold text-brown-900 uppercase text-center">
                  Mahfudin Nawawi
                </h1>
              </div>
              <div className="w-full border-t-2 border-brown-700">
                <h1 className="text-xl font-poppins font-semibold my-5 text-brown-900 uppercase">
                  Profile Data
                </h1>
                <div className="grid gap-3">
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Whatsapp
                      </h3>
                    </div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-7">
                      <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                        value
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Facebook
                      </h3>
                    </div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-7">
                      <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                        value
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Instagram
                      </h3>
                    </div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-7">
                      <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                        value
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Tiktok
                      </h3>
                    </div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-7">
                      <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                        value
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-4">
                      <h3 className="text-start text-lg text-brown-800 font-medium flex justify-start font-poppins items-center">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Website
                      </h3>
                    </div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-7">
                      <h3 className="text-start text-lg text-brown-700 font-poppins font-normal">
                        value
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="p-5 bg-pic-50 rounded-lg shadow-md flex flex-col justify-center items-center"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
