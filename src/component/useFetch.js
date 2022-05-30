import React from 'react'
import { useEffect, useState } from 'react';

//end point url 
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, SetisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if(!res.ok){
                throw Error('could not fetch the resources ')
              }
              return res.json();
            })
            .then((data) => {
              // console.log(data)
              setData(data);
              SetisPending(false);
              setError(null);
            })
            .catch(err => {
              SetisPending(false);
              setError(err.message);  
            })
            ;
        }, 1000);
      }, [url]);

      return {data, error, isPending}

      //when url changes, function compiled...
    
      // useEffect(() => {
      //   setTimeout(() => {
      //     fetch("http://localhost:8001/doctorList")
      //       .then((res) => {
      //         return res.json();
      //       })
      //       .then((data) => {
      //         // console.log(data)
      //         setDoctorList(data);
      //         SetisPending(false);
      //       });
      //   }, 1000);
      // }, []);

     
}

export default useFetch