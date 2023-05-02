export default function BrandList() {
  return (
    <section className="container mx-auto px-4 pt-10 mb-5">
      <h1>All Brand</h1>
      <div className="flex flex-wrap w-full p-2">
        <div className="w-full lg:w-1/2 p-2">
          <div className="relative group bg-pic-900 p-2 rounded-md gap-2 flex items-center justify-stretch transform ease-in duration-300 delay-200 lg:duration-300 lg:delay-100">
            <div>
              <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-full bg-brown-900 flex justify-center items-center group-hover:w-16 group-hover:h-16 group-hover:absolute transform  ease-in duration-300 delay-200 lg:duration-300 lg:delay-100 -top-2 -left-4">
                <p className="text-center text-white font-poppins font-medium text-base">
                  logo
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-5xl font-poppins group-hover:text-3xl font-semibold uppercase text-white group-hover:ml-10 group-hover:mb-3 lg:group-hover:mb-4">
                LS Skincare
              </h2>
              <article className="text-brown-800 text-base font-poppins font-normal hidden group-hover:block transform  ease-in duration-300 delay-200 lg:duration-300 lg:delay-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                eum omnis doloribus beatae eaque animi maiores perferendis!
                Minima eaque quibusdam aliquid laboriosam blanditiis corrupti
                ipsa odit deserunt unde, id consequuntur maiores ducimus, omnis
                a consequatur natus totam voluptates nostrum voluptate quasi
                magnam delectus. Repudiandae atque recusandae ipsam porro
                assumenda harum.
              </article>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <div className="relative group bg-pic-900 p-2 rounded-md gap-2 flex items-center justify-stretch transform ease-in-out duration-300 delay-100">
            <div>
              <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-full bg-brown-900 flex justify-center items-center group-hover:w-16 group-hover:h-16 group-hover:absolute transform  ease-in duration-300 delay-200 lg:duration-300 lg:delay-100 -top-2 -left-4">
                <p className="text-center text-white font-poppins font-medium text-base">
                  logo
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-5xl font-poppins group-hover:text-3xl font-semibold uppercase text-white group-hover:ml-10 group-hover:mb-3 lg:group-hover:mb-4">
                LS Skincare For Men
              </h2>
              <article className="text-brown-800 text-base font-poppins font-normal hidden group-hover:block transform  ease-in duration-300 delay-200 lg:duration-300 lg:delay-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                eum omnis doloribus beatae eaque animi maiores perferendis!
                Minima eaque quibusdam aliquid laboriosam blanditiis corrupti
                ipsa odit deserunt unde, id consequuntur maiores ducimus, omnis
                a consequatur natus totam voluptates nostrum voluptate quasi
                magnam delectus. Repudiandae atque recusandae ipsam porro
                assumenda harum.
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
