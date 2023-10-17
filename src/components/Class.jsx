const Class = () => {
  return (
    <div className="w-full py-32 flex flex-col gap-20">
      <div className="flex flex-col gap-2 w-[40%] px-20">
        <h2 className="font-creatoBold text-6xl uppercase tracking-wider">
          Nuestras clases
        </h2>
        <p className="font-creatoLight text-2xl">
          Amplia variedad de clases que podrás disfrutar en nuestros centros
        </p>
      </div>
      <div className="flex flex-col w-full justify-around">
        <div className="flex gap-4 py-2">
          <img
            src="https://media.istockphoto.com/id/1263905214/es/foto/espacio-de-gimnasio.jpg?s=2048x2048&w=is&k=20&c=fsMWkvT_afyr4iL7H0FMcNF-ldbbe9-D8_yPkbdC0do="
            alt="icono wod"
            className="w-full h-[200px] object-cover object-center"
          />
          <div className="flex flex-col items-start justify-center gap-5 px-5">
            <h3 className="text-4xl uppercase font-creatoBold tracking-wide">
              Wod
            </h3>
            <p className="text-xl font-creato">
              Workout of the Day, para los más exigentes
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-4 py-2">
          <img
            src="https://media.istockphoto.com/id/1001575694/es/foto/hombre-joven-de-entrenamiento-fitness-flexiones-o-tabl%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=LRCb3eohMi_daMHdJbJ11SBL73GN46ZVJ1PAd8dnqu0="
            alt="icono wod"
            className="w-full h-[200px] object-cover object-center"
          />
          <div className="flex flex-col items-end text-right justify-center gap-5 px-5">
            <h3 className="text-4xl uppercase font-creatoBold tracking-wide">
              Endurance
            </h3>
            <p className="text-xl font-creato">
              Si te gusta sudar, lo vas a pasar bien
            </p>
          </div>
        </div>

        <div className="flex gap-4 py-2">
          <img
            src="https://media.istockphoto.com/id/1166399307/es/foto/entrenamiento-cruzado-con-campanas-de-hervidor-imagen-de-bajo-%C3%A1ngulo-espacio-de-copia.jpg?s=2048x2048&w=is&k=20&c=xSVGAlj_hr5Y8NOJ9VzExz8vNXm_wMmVuhTONIpxiEw="
            alt="icono wod"
            className="w-full h-[200px] object-cover object-center"
          />
          <div className="flex flex-col items-start justify-center gap-5 px-5">
            <h3 className="text-4xl uppercase font-creatoBold tracking-wide">
              TRY45
            </h3>
            <p className="text-xl font-creato">
              Clases específicas de 45 minutos
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-4 py-2">
          <img
            src="https://media.istockphoto.com/id/494498164/es/foto/hermosa-bailarina-en-vista-a%C3%A9rea-de-seda-a%C3%A9rea-a%C3%A9rea-contortion-cintas.jpg?s=2048x2048&w=is&k=20&c=JCW0GkgCq5_lcmG9MnsFNdHU3_4pWvL_AHXhXuPsSeg="
            alt="icono wod"
            className="w-full h-[200px] object-cover object-center"
          />
          <div className="flex flex-col items-end text-right justify-center gap-5 px-5">
            <h3 className="text-4xl uppercase font-creatoBold tracking-wide">
              AERIAL
            </h3>
            <p className="text-xl font-creato">
              Clase de telas aéreas, para los más atrevidos
            </p>
          </div>
        </div>

        <div className="flex gap-4 py-2">
          <img
            src="https://media.istockphoto.com/id/1222084311/es/foto/imagen-de-barbell-en-el-gimnasio.jpg?s=2048x2048&w=is&k=20&c=kXHLejjkmU0ePIh_FU_Benz2VMke5bCe_Nn8PwOpzHQ="
            alt="icono wod"
            className="w-full h-[200px] object-cover object-bottom"
          />
          <div className="flex flex-col items-start justify-center gap-5 px-5">
            <h3 className="text-4xl uppercase font-creatoBold tracking-wide">
              OPEN BOX
            </h3>
            <p className="text-xl font-creato">
              Ven por libre y decide tú mismo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
