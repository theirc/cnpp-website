import Link from 'next/link'

const HeroHeader = () => (
  <>
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to the IRC's</span>{' '}
                <span className="block text-sbaBlue xl:inline">
                  Community Navigator Pilot Program
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                The International Rescue Committee's (IRC) CNPP is designed to
                help diverse small business owners access the programs and
                supports they need to re-build and grow thriving businesses as
                part of America’s economic recovery.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/contact">
                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-sbaYellow px-8 py-3 text-base font-medium text-sbaBlue hover:text-white hover:bg-sbaGray md:py-4 md:px-10 md:text-lg">
                      Get connected
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://i.ibb.co/GP5bJYR/Optimized-20180502-Seattle-AOberstadt-06.jpg"
          alt=""
        />
      </div>
    </div>
  </>
)

export default HeroHeader
