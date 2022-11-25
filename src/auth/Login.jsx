import welcomeForm from '../assests/welcome-form.png'

export default function Login() {
  return (
    <>
       <section className="min-h-screen grid place-content-center gap-x-4">
          <div className="container px-6 py-10 mx-auto">
              <div className="lg:flex lg:items-center lg:-mx-10">
                  <div className="lg:w-1/2 lg:mx-10">
                      <h2 className="text-center font-bold text-gray-800 capitalize text-2xl">Login</h2>

                      <form className="w-full mt-12 flex flex-col items-center gap-y-8 gap-x-4" method="post">
                          <fieldset className="-mx-2 md:items-center md:flex">
                              <div className="flex-1 px-2">
                                  <label className="block mb-2 text-sm text-gray-600">Gmail</label>
                                  <input type="email" placeholder="josefideldelpino@gmail.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>

                              <div className="flex-1 px-2 mt-4 md:mt-0">
                                  <label className="block mb-2 text-sm text-gray-600">Password</label>
                                  <input type="password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
                          </fieldset>

                          <button className="w-1/3 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                              Entrar
                          </button>
                      </form>
                  </div>

                  <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                      <img className="hidden object-cover mx-auto md:block shrink-0 w-96 h-96" src={welcomeForm} alt="" />
                  </div>
              </div>
          </div>
</section> 
    </>
  )
}
