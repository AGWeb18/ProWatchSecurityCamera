import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      className="h-6 w-5 flex-none text-blue-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="-m-1.5 p-1.5 text-2xl font-black tracking-tight text-blue-900 uppercase"
            >
              ProMount<span className="text-blue-600">.</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
            >
              Our Story
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
            >
              FAQ
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <a
              href="tel:17055302530"
              className="text-sm font-bold leading-6 text-blue-600 border border-blue-100 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition"
            >
              Call <span className="hidden sm:inline">(705) 530-2530</span>
              <span className="sm:hidden">Now</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="isolate pt-20">
        {/* Hero Section */}
        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Serving Durham Region & The Kawarthas.{" "}
                  <a href="#about" className="font-semibold text-blue-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read our story <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Smart Security. <br />
                <span className="text-blue-600">No Monthly Fees.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional camera installation for your home, business, or cottage. 
                We bridge the gap between complex technology and your peace of mind.
                <strong> Own your equipment, own your data.</strong>
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="tel:17055302530"
                  className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-blue-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  See Packages <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gray-100 ring-2 ring-white flex items-center justify-center text-xs font-bold text-gray-400">
                      ★
                    </div>
                  ))}
                </div>
                <p>Trusted by local families & businesses.</p>
              </div>
            </div>

            {/* Right Column: Visual (CSS Phone Mockup) */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative rounded-[2.5rem] bg-gray-900 p-4 shadow-2xl ring-1 ring-gray-900/10 sm:max-w-[320px] mx-auto border-[8px] border-gray-800">
                <div className="rounded-[2rem] bg-white overflow-hidden h-[600px] flex flex-col relative">
                  
                  {/* Fake Phone Status Bar */}
                  <div className="h-8 bg-gray-100 flex items-center justify-between px-6 text-[10px] font-bold text-gray-500">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>LTE</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-white p-4 border-b border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-lg text-gray-900">Home</span>
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">P</div>
                  </div>

                  {/* Camera Feed 1 */}
                  <div className="p-4 space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50 relative group">
                      <div className="aspect-video bg-gray-200 flex items-center justify-center relative overflow-hidden">
                        {/* Placeholder for camera view */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full animate-pulse"></div>
                        <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-md">Front Door • Live</div>
                      </div>
                      <div className="p-3 bg-white">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">Front Door</span>
                          <span className="text-xs text-gray-500">Motion Detected</span>
                        </div>
                      </div>
                    </div>

                    {/* Camera Feed 2 */}
                     <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50 relative">
                      <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                         <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-md">Driveway</div>
                      </div>
                       <div className="p-3 bg-white">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">Driveway</span>
                          <span className="text-xs text-gray-500">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Tab Bar */}
                  <div className="mt-auto border-t border-gray-100 p-4 flex justify-around text-gray-400">
                    <div className="flex flex-col items-center gap-1 text-blue-600">
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                       <span className="text-[10px] font-medium">Home</span>
                    </div>
                     <div className="flex flex-col items-center gap-1">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                       <span className="text-[10px] font-medium">Events</span>
                    </div>
                     <div className="flex flex-col items-center gap-1">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                       <span className="text-[10px] font-medium">Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Story Section */}
        <div
          id="about"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        >
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest">
                About ProMount Security Cameras
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Born from a family need.
              </p>
              <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                <p>
                  It started when I installed an exterior security system for my
                  95-year-old grandpa. My aunt and uncle wanted to keep an eye
                  on him, but the technology felt overwhelming.
                </p>
                <p>
                  He often worried about whether the garage door was closed at
                  night. Instead of him having to walk down to check, we
                  installed a dedicated camera so he—and the rest of the
                  family—could verify it instantly from their phones.
                </p>
                <p>
                  I realized that after my aunt, uncle, and cousins all
                  struggled to set it up, there was a massive gap. While the
                  hardware exists, the <strong>bridge</strong> between buying a
                  camera and actually having it work reliably for you and your staff/family is missing for many
                  people.
                </p>
                <p>
                  ProMount Security Cameras was built to provide that bridge. We
                  don&apos;t just &quot;install cameras&quot;—we set up your
                  peace of mind.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
              <h3 className="font-bold text-blue-900 text-xl mb-4">
                The ProMount Security Cameras Promise
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> No confusing monthly subscriptions.
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> Full ownership of your data.
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> Wired & Wire-Free Options Available.
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium">
                  <CheckIcon /> Professional app setup on all your devices.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Home & Business Packages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 font-semibold">
                Hardware, installation, and setup are ALL included. Choose between Wired or Wireless options for your property.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
              {/* Basic Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Basic Watch
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Essential protection for your property&apos;s primary entry points.
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $599
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3 text-blue-600 font-bold">
                      <CheckIcon /> Equipment Included
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 2 Outdoor HD Cameras
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Single User Access
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Mobile App Setup
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 1-Year Workmanship Warranty
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-8 block rounded-md bg-blue-50 px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-100"
                >
                  Call to Book
                </a>
              </div>

              {/* Standard Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-2 ring-blue-600 xl:p-10 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white uppercase tracking-widest">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Standard Guard
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Comprehensive coverage for most properties.
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $899
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3 text-blue-600 font-bold">
                      <CheckIcon /> Equipment Included
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 4 Outdoor HD Cameras
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 3 Users (Owner + 2 Family)
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Multi-Device App Setup
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 1-Year Workmanship Warranty
                    </li>
                    <li className="flex gap-x-3 text-blue-600 font-semibold">
                      <CheckIcon /> 24/7 Local Recording
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-8 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Call to Book
                </a>
              </div>

              {/* Premium Tier */}
              <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Premium Shield
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Maximum security for larger properties and extended
                    coverage needs.
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $1,299
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    <li className="flex gap-x-3 text-blue-600 font-bold">
                      <CheckIcon /> Equipment Included
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 6 Outdoor HD Cameras
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 6 Users (Owner + 5 Family/Staff)
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> Priority Support
                    </li>
                    <li className="flex gap-x-3">
                      <CheckIcon /> 2-Year Workmanship Warranty
                    </li>
                    <li className="flex gap-x-3 text-blue-600 font-semibold">
                      <CheckIcon /> Advanced Motion Detection Setup
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-8 block rounded-md bg-blue-50 px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-100"
                >
                  Call to Book
                </a>
              </div>
            </div>

            <p className="mt-12 text-center text-gray-500 text-sm italic">
              Need more cameras? Custom 6 and 8 camera setups available upon
              request.
            </p>
          </div>
        </div>

        {/* Service Area */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-t border-gray-100">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Proudly Serving Our Local Community
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                "Whitby",
                "Oshawa",
                "Bowmanville",
                "Port Perry",
                "Peterborough",
                "Lindsay",
                "Lakefield",
                "Fenelon Falls",
                "Coboconk",
              ].map((town) => (
                <span
                  key={town}
                  className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 border border-blue-100"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Are there monthly fees?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  No. We prefer systems that record locally or use free cloud
                  tiers. Once you pay for the install, you own the system and
                  your data.
                </p>
              </dd>
            </div>
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Do the cameras work in the winter?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  Yes. We use outdoor-rated cameras designed for Canadian winters. For high-traffic areas, we recommend our Solar-Assist add-on to keep batteries charged even in sub-zero temperatures.
                </p>
              </dd>
            </div>
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Can multiple users have access?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  Absolutely. As part of our setup, we will help you invite
                  family members or staff so everyone can keep an eye on things from
                  their own phones.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <span className="text-xl font-bold text-white tracking-tight uppercase">
                ProMount<span className="text-blue-500">.</span>
              </span>
              <p className="text-sm text-gray-400 text-center">
                &copy; {new Date().getFullYear()} ProMount Security Cameras.
                Professional Installation in Durham & Kawarthas.
              </p>{" "}
              <div className="flex flex-col items-center md:items-end">
                <a
                  href="tel:17055302530"
                  className="text-lg font-bold text-white hover:text-blue-400 transition"
                >
                  (705) 530-2530
                </a>
                <span className="text-gray-500 text-xs mt-1">
                  Call for a free quote
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
