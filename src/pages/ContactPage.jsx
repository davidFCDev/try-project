const ContactPage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-10 gap-10 justify-start flex flex-col items-center bg-dark">
      <h2 className="font-creatoBold text-5xl uppercase tracking-wider text-white">
        Contacto
      </h2>

      <form className="w-full max-w-lg shadow-sm shadow-white p-10 bg-gray-100 rounded-md">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase text-md font-bold mb-2 font-creatoExtrBold tracking-wider"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 bg-white rounded-sm"
              id="grid-first-name"
              type="text"
              placeholder="Nombre"
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
              className="appearance-none block w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 bg-white rounded-sm"
              id="grid-password"
              type="email"
              placeholder="E-mail"
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
              className="appearance-none block w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 bg-white rounded-sm"
              id="grid-password"
              type="text"
              placeholder="Cuéntanos tus dudas"
            />

            <button
              type="submit"
              className="bg-black font-creatoBold text-xl w-full font-bold py-2 px-4 text-white hover:bg-gray-600 focus:bg-gray-600 transition-all "
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
