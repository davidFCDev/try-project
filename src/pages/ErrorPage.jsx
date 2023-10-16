import Button from "../components/Button";

const ErrorPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="w-full min-h-screen justify-center items-center flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">Ooops!</h1>
        <p>Something went wrong.</p>
        <Button onClick={goBack} text={"Go back"} />
      </div>
    </div>
  );
};

export default ErrorPage;
