import React from "react";
import { addData, deleteData,editedDataredux } from "./redux/Actions";
import { useDispatch, useSelector } from "react-redux";
const ShowContact = () => {
    const details = [
        {
          firstname: "Anjali",
          lastname: "Parmar",
          phone: 1234567894,
          label: "mobile",
          id:1
        },
        {
          firstname: "Ankit",
          lastname: "Parmar",
          phone: 1234567844,
          label: "mobile",
          id:2
        },
        {
          firstname: "Karan",
          lastname: "Parmar",
          phone: 9634567894,
          label: "mobile",
          id:3

        },
        {
          firstname: "payal",
          lastname: "Parmar",
          phone: 7634567894,
          label: "mobile",
          id:4
        },
      ];
    const [showModal, setShowModal] = React.useState(false);
    const [firstname,setFname]=React.useState("")
    const [lastname , setLname]=React.useState("")
    const [phone , setPhone]=React.useState("")
    const [label , setLabel]=React.useState("")
    const [id, setId]=React.useState()
    const [show, setShow]=React.useState(false)
    const [data, setData]:any=React.useState(details)
    const dispatch = useDispatch();
    const counter = useSelector((state:any) => state?.counter?.data);

  const submitForm=(e:any)=>{
    e.preventDefault()
    if(!firstname){
        alert("fill FirstName Field")
    }else if(!lastname){
       alert("fill last name field")
    }else if(!phone){
        alert("fill phone filed")
    }else if(!label){
        alert("fill label field")
    }else{
        if (show === true){

            let editedData = counter?.map((item:any)=>{
                if(id == item.id){
                  return{...item,firstname:firstname,lastname:lastname,phone:phone,label:label}
                }
                return{item}
            })
            dispatch(editedDataredux(editedData))
            setFname("")
            setLabel("")
            setLname("")
            setPhone("")
            // setData(editedData)
            setShowModal(false)
        }
       else {
        let obj:any={
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            label:label,
            id: new Date().getTime()
        }
    dispatch(addData(obj))

        // setData([...data,obj])
        setFname("")
        setLname("")
        setPhone("")
        setLabel("")
        setShowModal(false)
       }
      }
    }
    
  const delData=(elem:any)=>{
    let deleteddata = counter.filter((item:any)=>{
            return elem.id !== item.id
    })
    dispatch(deleteData(deleteddata))
    // setData(deleteddata)
  }
  const editedData=(elem:any)=>{
    setShowModal(true)
    setShow(true)
    setFname(elem.firstname)
    setLname(elem.lastname)
    setPhone(elem.phone)
    setLabel(elem.label)
    setId(elem.id)
  }
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
             
    <div>
    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Contact
      </button>
    </div>
</nav>
      
      <>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Conatct Form
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form onSubmit={submitForm} className="flex flex-col">
                       <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={firstname} onChange={(e:any)=>setFname(e.target.value)} placeholder="Enter First Name"/>
                       <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={lastname} onChange={(e:any)=>setLname(e.target.value)} placeholder="Enter Last Name" />
                 <div className="flex flex-row mt-2">
                 <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mr-4" value={phone} onChange={(e:any)=>setPhone(e.target.value)} placeholder="Enter Phone Number" />
                       <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" value={label} onChange={(e:any)=>setLabel(e.target.value)} placeholder="Enter Label" />
                 </div>
                      { !show ? <button className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Submit</button> : <button className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Edit</button> } 
                    </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              First Name{" "}
            </th>

            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Last Name
            </th>
            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Mobile
            </th>
            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Label
            </th>
            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Edit
            </th>
            <th
              scope="col"
              className="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {counter?.map((elem:any, index:any) => (
            <tr>
              <td className="px-10 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{index}</div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{elem.firstname}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{elem.lastname}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{elem.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{elem.label}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>editedData(elem)}>
                    Edit
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>delData(elem)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowContact;      
