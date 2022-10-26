import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-red-600">{error.statusText || error.message}</i>
        </p>
        <Link to='/' className="px-3 py-1 bg-orange-600 rounded-md mt-5 block text-white">Back to main page</Link>
      </div>
    </div>
  );
};
