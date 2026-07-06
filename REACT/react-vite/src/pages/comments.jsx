import React, { useState } from "react";

const Comments = () => {
    
    // var [comment, setComment] = useState("")
    // var [name, setName] = useState("")

    var [userdata, setUserdata] = useState({
        name : "",
        comment : "",
    })
    
    var [data , setData] = useState([])

    // console.log("Name ",name);
    // console.log("Comment ",comment);

    console.log("user data ", data);  

  return (
    <div className="flex flex-col gap-4 p-5 ">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name..."
          className="py-2 pl-2 outline-none border rounded-lg"
          onChange={(e)=>{
            // console.log(e.target.value)
            // setName(e.target.value)
            // direct value
            setUserdata({...userdata ,name: e.target.value })
          }}
        //     setUserdata((prev)=>{
        //         return {...prev, name : e.target.value}
        //     })
        //   }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="comment">Comments:</label>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Enter your comment..."
          className="py-2 pl-2 outline-none border rounded-lg"
          onChange={(e)=>{            
            // console.log(e.target.value);
            // setComment(e.target.value)
            setUserdata({...userdata,comment:e.target.value})
            }}

            // setUserdata((prev)=>{
            //     return {...prev, comment : e.target.value}
            // })
            // }}

        />
      </div>

      <div>
        <button className="py-2 px-6 rounded-lg w-full text-white bg-green-600 hover:bg-green-700" onClick={()=>{
            setData((prev)=>{
                return [...prev,userdata]
            })
        }}>
          Post
        </button>
      </div>
      <div className="grid grid-cols-4 ">
        {/* <p>{JSON.stringify(data)}</p> */}
        <div className="border p-3 rounded-lg shadow-lg">
            {
  data.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.name}</p>
        <p>{item.comment}</p>
      </div>
    );
  })
}
        </div>
      </div>
    </div>
  );
};

export default Comments;