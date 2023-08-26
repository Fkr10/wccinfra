export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">Contact Us</h1>
          </div>
          <div className="mx-auto text-center pb-12 ">
            <h2 className="h2">Initiate Your Construction Journey with Wcc Infra</h2>
          </div>
          <div className="mx-auto text-center pb-12 ">
            <p className="text-xl text-gray-800 mb-8">Have a project in mind? Questions about our services? Looking for a construction partner that aligns with your vision? Our team is eager to hear from you. Whether it's a large-scale project or a small inquiry, we're committed to providing prompt and comprehensive assistance.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-950 text-sm font-medium mb-1" htmlFor="yourname">Your Name</label>
                  <input id="yourname" type="text" className="form-input w-full text-gray-800" placeholder="" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-950 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="you@yourcompany.com" required/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-950 text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="text" className="form-input w-full text-gray-800" placeholder="+91 987 654 3210"/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-950 text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <textarea id="message" className="form-input w-full text-gray-800" placeholder="" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-zinc-800 hover:bg-purple-700 w-full">Contact Us</button>
                </div>
              </div>
            </form>
            <div className="text-gray-800 text-center mt-6">
              Don’t you have an account? <Link href="/signup" className="text-sky-700 hover:text-gray-900 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
