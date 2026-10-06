import React, { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')
  const [Text, setText] = useState('')
  const [Task, setTask] = useState([]);
 const [Msg , setMsg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...Task];

    CopyTask.push({ Title, Text });
    setTask(CopyTask);
    setText('');
    setTitle('');
    document.getElementById("titleInput").focus();

     setMsg(' Note Added Successfully!');
     setTimeout(()=>{
              setMsg('');
     },1000);
  }


  const NotesDeleted = (idx) => {
    const CopyTask = [...Task];
    CopyTask.splice(idx, 1);
    setTask(CopyTask)
     
      setMsg('Notes Remove Successfully...! ')
   setTimeout(() => {
      setMsg('');
}, 1000);
  }

  return (
    <div className='h-screen bg-black text-white'>
      
     <div className='msg text-center text-black bg-green-400  w-full font-bold animate-bounce'>{Msg}</div>

      <h1 className=' box text-3xl font-bold text-center'>Add Notes</h1>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex gap-4 justify-between p-10  ' >


        <div className='flex flex-col w-2/3'>
          <input type="text" placeholder='Enter Notes Title Here' value={Title} id='titleInput' onChange={(e) => {
            setTitle(e.target.value)
          }} className='px-5 py-2 border-2 rounded font-medium' />

          <textarea type="text" placeholder='Write Details' value={Text} onChange={(e) => { setText(e.target.value) }} className=' px-5  w-full h-32 py-2 flex items-start  flex-row border-2 rounded outline-none font-medium ' />

          <button className='text-black bg-white px-5 py-2 rounded font-bold'>Add Notes</button>
        </div>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbO0XHRmAgbr0Hjefh_ZExyTdUdDxd1_VV8lRnwhjMhw&s=10" alt="img" />
      </form>

      <div className='flex   flex-col   p-10 border-t-2 text-center '>

        <h1 className=' box text-3xl font-bold '>Recent Notes</h1>

        <div className=' box1 flex flex-wrap gap-5 h-full shrink-0 mt-2  '>



          {Task.map(function (ele, idx) {
            return <div className=" relative h-70 w-50 rounded-2xl bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBLu-YHBFLsPUCSA67Sfs-d94qDm05wEvQGLFly0-qQ&s=10')] text-black mt-1.5 flex flex-col items-start justify-start " key={idx} >

              <h2 className='heading1 absolute top-5 left-42   bg-red-600 text-white rounded-full h-6 w-6' onClick={() => { NotesDeleted(idx) }}><i className="fa-solid fa-xmark"></i></h2>
              <h2 className=' heading p-6 leading-tight text-xl font-bold '>{ele.Title}</h2>
              <p className='para text-gray-600 leading-snug'>{ele.Text}</p>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App
