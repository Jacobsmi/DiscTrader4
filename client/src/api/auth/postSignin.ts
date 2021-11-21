const postSignin = async () =>{
  const res = await fetch("http://localhost:5000/signin",{
    method: "POST",
  })
  const resJSON = await res.json();

  if (resJSON.status === "success"){
    return true;
  }else{
    return false;
  }
}

export default postSignin;