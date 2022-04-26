import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token,setToken]=useState("");

  const handleLogin =  (email, password) => {
    //  api request to reqres.in for the token
    getData(email, password)

  
  };
  const getData =async (email, password)=>{
    try{ let res =  await fetch("https://reqres.in/api/login",{
              method:"POST",
              headers:{"content-type":"application/json"},
              body:JSON.stringify({
                  "email": `${email}`,
                  "password": `${password}`
              })
          });
          let data=  await res.json();
          console.log(data)
          // setToken(data.token)

    }catch(error){
      console.log(error)
    }
  }
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
  };
  const value={handleLogin,handleLogout,token}
  return   <AuthContext.Provider value={value}>
  {children}
</AuthContext.Provider>
  
};

export { AuthContext, AuthContextProvider };
