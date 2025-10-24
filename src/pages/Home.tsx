
export default function Home() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Bell's Boxing
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Train with the best. Unleash your potential.
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-600 text-white">
              Join Now
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded text-white border-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Founded by champions, Bell's Boxing is more than just a gym. It's a community dedicated to the art of boxing, discipline, and personal growth.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-lg bg-gray-900 p-6 text-center h-full">
                <h3 className="text-2xl font-bold mb-2">Expert Coaching</h3>
                <p>Learn from seasoned professionals with years of experience in the ring.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-lg bg-gray-900 p-6 text-center h-full">
                <h3 className="text-2xl font-bold mb-2">State-of-the-Art Facility</h3>
                <p>Train in a fully equipped gym with top-tier equipment and amenities.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-lg bg-gray-900 p-6 text-center h-full">
                <h3 className="text-2xl font-bold mb-2">Strong Community</h3>
                <p>Join a supportive network of boxers who push each other to be their best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Class Schedule</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-gray-900">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Class</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Instructor</th>
                  <th className="p-3 text-left">Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-3">Boxing Fundamentals</td>
                  <td className="p-3">Mon, Wed, Fri - 6:00 PM</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">Beginner</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">Advanced Sparring</td>
                  <td className="p-3">Tue, Thu - 7:00 PM</td>
                  <td className="p-3">Jane Smith</td>
                  <td className="p-3">Advanced</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">Cardio Kickboxing</td>
                  <td className="p-3">Sat - 10:00 AM</td>
                  <td className="p-3">Mike Ross</td>
                  <td className="p-3">All Levels</td>
                </tr>
                <tr>
                  <td className="p-3">Youth Boxing</td>
                  <td className="p-3">Mon, Wed - 4:00 PM</td>
                  <td className="p-3">Sarah Lee</td>
                  <td className="p-3">Youth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Have questions? Drop us a line and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 font-semibold rounded bg-red-600 text-white hover:bg-red-700 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
