import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const App = () => {
  const token = useSelector(store => store.auth.token)
  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      navigate("/home")
    } else {
      navigate("/signin")
    }
  }, [token])

  return (
    <></>
  )
}

export default App;
