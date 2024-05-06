export type loginDetails = {
    email : string;
    password : string;
}

export type Register = {
    firstName: string;
    lastName : string;
    email : string;
    password : string;
}

export type loadingStatus = {
   onloading : boolean;
   complete : boolean;
}

export type Success = {
    message: string;
  };
  export type Failure = {
    errorMessage: string;
  };

  export type VerifiedUser = {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };