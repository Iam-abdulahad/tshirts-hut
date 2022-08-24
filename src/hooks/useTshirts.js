import { useEffect, useState } from "react"

const useTShirts =() =>{

       const [TShirts, setTShirts] = useState([]);
       useEffect( ()=> {
              fetch( 'tshirts.json')
              .then( res => res.json())
              .then( data => setTShirts(data))
       }, []);
       return [TShirts, setTShirts];

}

export default useTShirts;