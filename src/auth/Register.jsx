import React from 'react'
import registerForm from '../assests/register-form.png'

export default function Register() {
  return (
    <>
        <section className=" w-full min-h-screen flex md:flex-row flex-col gap-y-10 mx-auto items-center justify-center">
            <div className="w-1/2 mx-auto flex flex-col items-center gap-y-8">
                <img className="w-1/2 max-w-full h-auto" src={registerForm} 
                alt="Registrar" />
                <h2 className="text-2xl font-bold">Registrate</h2>
            </div>
            <form className="w-1/2 flex flex-col items-center">
                <fieldset className="w-full flex flex-col gap-y-8 items-center justify-center">
                    <div className="w-1/2 flex md:flex-row flex-col items-center gap-x-4 mx-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-input " type="text" id="nombre" />
                    </div>

                    <div className="w-1/2 flex md:flex-row flex-col items-center gap-x-4 mx-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                        <label htmlFor="email">Gmail</label>

                        <input className="form-input " type="email" id="email" />

                    </div>

                    <div className="w-1/2 flex md:flex-row flex-col items-center gap-x-4 mx-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        <label htmlFor="password">Contraseña</label>

                        <input className="form-input " type="password" id="password" />
                    </div>

                    <div className="w-1/2 flex md:flex-row flex-col items-center gap-x-4 mx-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <label htmlFor="confirmPassword">Confirmar contraseña</label>

                        <input className="form-input " type="password" id="confirmPassword" />
                    </div>

                </fieldset>

                <input type="submit" className="form-input md:w-1/4 mx-auto mt-8" />
            </form>

        </section>
    </>
  )
}
