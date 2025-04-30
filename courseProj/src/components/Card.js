import React from "react";
import {FcLike,FcLikePlaceholder}  from "react-icons/fc";
import { toast } from "react-toastify";

const Card=( {course,likedCourses,setlikedCourses} )  => {
    // let course=props.course;
    // let likedCourses=props.likedCourses;
    // let setlikedCourses=props.setlikedCourses
  
const isLiked = likedCourses.includes(course.id)
    function clickHandler(params) {
        if(isLiked){
            //pehle se liked
            setlikedCourses((prev) => prev.filter((cid)=>(cid !==course.id)))
            toast.warning("liked removed")
        }
        else{
            // pehle se liked nhi hua 
            // liked course me insert karna hau
           if(likedCourses.length ===0){ 
            setlikedCourses([course.id])
           } 
           else{
            setlikedCourses((prev)=> [...prev, course.id])
           }
           toast.success("Liked Sucessfully")
        }
         
    }
return(
<div className="w-[300px] bg-bgDark  bg-opacity-80 rounded-md overflow-hidden">
        <div className='relative'>
    <img  src={course.image.url}/>
     

    <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 
    grid place-items-center">
        <button onClick={clickHandler}>
         
        {
    isLiked ? (<FcLike fontSize="1.75rem" /> ) : 
             ( <FcLikePlaceholder fontSize="1.75rem" />)
             }
        
        </button>
        </div>
    </div>

<div>
    <p className="text-white font-semibold text-lg leading-6"> {course.title}</p>
    <p className="text-white mt-2"> 
    {
        course.description.length>100 ?
        (course.description.substr(0,100)) +"..." :
        (course.description)
        
        
        }
    
    
    </p>
</div>
</div>
)
}
export default Card;