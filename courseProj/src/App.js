import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Roller from "./components/Roller";
import Card from "./components/Card";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading,setLoading] = useState(true)
  const [category,setCategory]=useState(filterData[0].title)
  async function fetchData () {
    setLoading(true);
       try {
          const res = await fetch(apiUrl);
          const output = await res.json();
         console.log(output);
        setCourses(output.data); // Save data to state
       } 
        catch (error) {
          toast.error("Something went wrong");
       }
       setLoading(false)
      };
    // Call the function
   useEffect( () => {
    fetchData();
      }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div> 
     <Navbar />
       </div>
     <div>
     <Filter 
     filterData={filterData} 
     category ={category}
     setCategory ={setCategory}

      />
     </div>
      <div className="w-11/12 max-w-[1200px]
      max-auto flex  flex-wrap justify-center items-center min-h[50vh]" >
       {
       loading ? (<Roller/>) :(<Cards courses={courses} category={category}/>)
       }
       </div>
     
    </div>
  );
};

export default App;