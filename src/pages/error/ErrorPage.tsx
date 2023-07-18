import { useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="">
      <h1 className="">Oops!</h1>
      <p className="">Sorry, an unexpected error has occurred.</p>
      <p className="">
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
