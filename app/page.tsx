import Link from "next/link";
import Image from "next/image";

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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ProMount Security Cameras</span>
              <Image
                src="/ProMountSecurityCameraLogo.png"
                alt="ProMount Security Cameras"
                width={200}
                height={80}
                className="h-16 w-auto"
                priority
              />
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
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                See Your Property{" "}
                <span className="text-blue-600 text-nowrap">Clearly</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Professional security camera installation for homes, businesses
                & cottages.
              </p>
              <p className="mt-2 text-sm sm:text-base text-blue-600 font-semibold">
                Serving Durham Region & the Kawarthas
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-3.5 text-base font-bold text-white shadow-lg hover:bg-blue-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center"
                >
                  Choose Your Package
                </a>
                <a
                  href="#pricing"
                  className="w-full sm:w-auto rounded-full bg-gray-100 px-6 sm:px-8 py-3 sm:py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-200 transition text-center"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="bg-blue-50 border-t border-b border-blue-100 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Trusted By Our Customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-6 mb-4">
                  &quot;Had this installed for my aging parents for their
                  security. The service was excellent and took the time to
                  answer all my questions. Thank you for a job well done.&quot;
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Google Review
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div
          id="about"
          className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28"
        >
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div>
              <h2 className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">
                Why Choose ProMount
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Built on experience. Focused on your peace of mind.
              </p>
              <div className="mt-6 space-y-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
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
                  camera and actually having it work reliably for you and your
                  staff/family is missing for many people.
                </p>
                <p>
                  ProMount Security Cameras was built to provide that bridge. We
                  don&apos;t just &quot;install cameras&quot;—we set up your
                  peace of mind.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h3 className="font-bold text-blue-900 text-lg sm:text-xl mb-4">
                The ProMount Promise
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-x-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckIcon /> No monthly subscriptions
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckIcon /> You own your data
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckIcon /> Wired & wireless options
                </li>
                <li className="flex gap-x-3 text-gray-700 font-medium text-sm sm:text-base">
                  <CheckIcon /> Multi-device app setup
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-gray-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Hardware, installation, and setup included. All packages are
                fully installed.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
              {/* Basic Tier */}
              <div className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-gray-200 shadow-sm">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold leading-7 text-gray-900">
                    Basic Watch
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-5 text-gray-600">
                    Essential protection for entry points.
                  </p>
                  <p className="mt-4 flex items-baseline gap-x-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                      $599
                    </span>
                    <span className="text-xs sm:text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-6 space-y-2 text-xs sm:text-sm leading-5 text-gray-600"
                  >
                    <li className="flex gap-x-2 text-blue-600 font-bold">
                      <CheckIcon /> Equipment Included
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 2 HD Cameras
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> Single User
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> App Setup
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 1-Year Warranty
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-6 block rounded-md bg-blue-50 px-3 py-2 text-center text-xs sm:text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-100"
                >
                  Call to Book
                </a>
              </div>

              {/* Standard Tier */}
              <div className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 ring-2 ring-blue-600 shadow-xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-widest">
                  Popular
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold leading-7 text-gray-900">
                    Standard Guard
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-5 text-gray-600">
                    Coverage for most properties.
                  </p>
                  <p className="mt-4 flex items-baseline gap-x-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                      $899
                    </span>
                    <span className="text-xs sm:text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-6 space-y-2 text-xs sm:text-sm leading-5 text-gray-600"
                  >
                    <li className="flex gap-x-2 text-blue-600 font-bold">
                      <CheckIcon /> Equipment Included
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 4 HD Cameras
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 3 Users
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> Multi-Device Setup
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 1-Year Warranty
                    </li>
                    <li className="flex gap-x-2 text-blue-600 font-semibold">
                      <CheckIcon /> 24/7 Recording
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-6 block rounded-md bg-blue-600 px-3 py-2 text-center text-xs sm:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Call to Book
                </a>
              </div>

              {/* Premium Tier */}
              <div className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-gray-200 shadow-sm">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold leading-7 text-gray-900">
                    Premium Shield
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-5 text-gray-600">
                    Maximum security for larger properties.
                  </p>
                  <p className="mt-4 flex items-baseline gap-x-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                      $1,299
                    </span>
                    <span className="text-xs sm:text-sm font-semibold leading-6 text-gray-600">
                      CAD
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-6 space-y-2 text-xs sm:text-sm leading-5 text-gray-600"
                  >
                    <li className="flex gap-x-2 text-blue-600 font-bold">
                      <CheckIcon /> Equipment Included
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 6 HD Cameras
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 6 Users
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> Priority Support
                    </li>
                    <li className="flex gap-x-2">
                      <CheckIcon /> 2-Year Warranty
                    </li>
                    <li className="flex gap-x-2 text-blue-600 font-semibold">
                      <CheckIcon /> Advanced Detection
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:17055302530"
                  className="mt-6 block rounded-md bg-blue-50 px-3 py-2 text-center text-xs sm:text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-100"
                >
                  Call to Book
                </a>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-500 text-xs sm:text-sm">
              Custom setups available. Call for details.
            </p>
          </div>
        </div>

        {/* Service Area */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Serving Our Local Community
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
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
                  className="rounded-full bg-blue-50 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-blue-700 border border-blue-100"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-xl sm:text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Common Questions
          </h2>
          <dl className="mt-8 space-y-6 divide-y divide-gray-900/10">
            <div className="pt-6 sm:grid sm:grid-cols-12 sm:gap-8">
              <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900 sm:col-span-5">
                Are there monthly fees?
              </dt>
              <dd className="mt-3 sm:col-span-7 sm:mt-0">
                <p className="text-sm sm:text-base leading-6 text-gray-600">
                  No. You own the system and your data. No subscriptions
                  required.
                </p>
              </dd>
            </div>
            <div className="pt-6 sm:grid sm:grid-cols-12 sm:gap-8">
              <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900 sm:col-span-5">
                Do cameras work in winter?
              </dt>
              <dd className="mt-3 sm:col-span-7 sm:mt-0">
                <p className="text-sm sm:text-base leading-6 text-gray-600">
                  Yes. We use Canadian-rated outdoor cameras. Solar-assist
                  add-ons available for extreme conditions.
                </p>
              </dd>
            </div>
            <div className="pt-6 sm:grid sm:grid-cols-12 sm:gap-8">
              <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900 sm:col-span-5">
                Can multiple users have access?
              </dt>
              <dd className="mt-3 sm:col-span-7 sm:mt-0">
                <p className="text-sm sm:text-base leading-6 text-gray-600">
                  Absolutely. We set up family and staff access during
                  installation.
                </p>
              </dd>
            </div>
            <div className="pt-6 sm:grid sm:grid-cols-12 sm:gap-8">
              <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900 sm:col-span-5">
                How long does installation take?
              </dt>
              <dd className="mt-3 sm:col-span-7 sm:mt-0">
                <p className="text-sm sm:text-base leading-6 text-gray-600">
                  Most installations take 2-4 hours. We&apos;ll confirm timing
                  during your free quote call.
                </p>
              </dd>
            </div>
            <div className="pt-6 sm:grid sm:grid-cols-12 sm:gap-8">
              <dt className="text-sm sm:text-base font-semibold leading-7 text-gray-900 sm:col-span-5">
                What&apos;s included in installation?
              </dt>
              <dd className="mt-3 sm:col-span-7 sm:mt-0">
                <p className="text-sm sm:text-base leading-6 text-gray-600">
                  Equipment, professional installation, app setup on all
                  devices, and a 1-2 year warranty.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Protect Your Property?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100">
              Choose your package and call to book your installation.
            </p>
            <a
              href="#pricing"
              className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-base font-bold text-blue-600 hover:bg-gray-100 transition"
            >
              View Packages
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <span className="text-lg font-bold text-white tracking-tight uppercase">
                ProMount<span className="text-blue-500">.</span>
              </span>
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                &copy; {new Date().getFullYear()} ProMount Security Cameras.
              </p>
              <a
                href="tel:17055302530"
                className="text-base font-bold text-white hover:text-blue-400 transition"
              >
                (705) 530-2530
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-lg">
        <a
          href="#pricing"
          className="block w-full px-6 py-3 text-center bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
        >
          Book Now
        </a>
      </div>

      {/* Padding for sticky mobile CTA */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}
