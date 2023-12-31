const ContactPage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-6 sm:px-10 gap-12 justify-center flex flex-col items-center bg-dark text-white">
      <div className="flex flex-col gap-4 sm:max-w-[36%]">
        <h2 className="font-creatoExtrBold text-4xl sm:text-5xl uppercase tracking-wider text-white text-center sm:text-left">
          Contacto
        </h2>
        <p className="font-creatoLight tracking-wider text-sm sm:text-base">
          Tanto si tienes alguna duda como si quieres tu primera clase gratis,
          háznoslo saber!
        </p>
      </div>

      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase text-md font-bold mb-2 font-creatoExtrBold tracking-wider"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full py-3 px-4 mb-3 leading-tight border border-gray-300 bg-transparent outline-none"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase text-md font-bold mb-2 font-creatoBold tracking-wider"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full py-3 px-4 mb-3 leading-tight border border-gray-300 bg-transparent outline-none"
              id="grid-password"
              type="email"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase text-md font-bold mb-2 font-creatoBold tracking-wider"
              htmlFor="grid-password"
            >
              Mensaje
            </label>
            <textarea
              className="appearance-none block w-full py-3 px-4 mb-3 leading-tight border border-gray-300 bg-transparent outline-none"
              id="grid-password"
              type="text"
              placeholder=""
            />

            <button
              type="button"
              className="bg-white font-creatoBold text-xl w-full font-bold py-2 px-4 text-black hover:bg-gray-300 focus:bg-gray-300 transition-all  border border-white active:bg-gray-300"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
