import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRedirect(){
    const token = localStorage.getItem("token");
    const go = useNavigate()
    useEffect(() => {
        if(token == null){
          go('/login')
        }
      })
}

export default useRedirect