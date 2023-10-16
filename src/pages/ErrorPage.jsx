const ErrorPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="w-full min-h-screen justify-center items-center flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">Ooops!</h1>
        <p>Something went wrong.</p>
        <button
          onClick={goBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
