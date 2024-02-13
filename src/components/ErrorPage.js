import { useRouteError } from "react-router-dom";
import React from 'react'

function ErrorPage() {

  let error =useRouteError();
  //console.log(error);

  return (
    <div className="text-center text-danger m-5 p-5">
        <h1 className="display-2">Opps!!!!</h1>
        <p className="display-5">Unexpected Error</p>
        <p className="display-5"> Error {error.status}  : {error.statusText}</p>
    </div>
  )
}

export default ErrorPage