
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Layouts/Navbar"
import Note from "./modules/Notes/Note"
import Login from './modules/Auth/Login'
// import Registrasi from "./pages/Registrasi"
import { Register } from "./modules/Config/api"
import { useAuth } from "./modules/Auth/Auth"
// import { setTokens } from "./token"

function App() {
    // panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    // const [token, setToken] = useState(null);

    // const handleLogin = (tokens) => {
    //     setToken(tokens)
    // }

    // const handleLogout = () => {
    //     setToken(null)
    //     localStorage.removeItem('token');
    // }

    // useEffect(() => {
    //     const tokens = getToken()
    //     setToken(tokens);
    // }, [])

    return (
        <BrowserRouter>
            <Routes>

           
                <Route element={<Navbar />}>
                    {isLoggedin ? (
                        //halaman Note akan terbuka ketika isLoggedin true
                        //
                        <>
                            <Route path={"/Note"} element={<Note />} />
                            <Route path={"/Login"} element={<Navigate to={"/Note"} />} />
                        </>
                    ) : (
                        <>
                            <Route path={"*"} element={<Navigate to={"/Login"} />} />
                            <Route path={"/Registrasi"} element={<Register />} />
                            <Route path={"/Login"} element={<Login />} />
                        </>
                    )}

{/* 
                    <Route element={<Navbar token={token} onLogout={handleLogout} />}>
                        {isLoggedin ? (
                            <>
                                <Route path={"/Note"} element={<Note />} />
                                <Route path={"/Login"} element={<Navigate to={"/Notes"} />} />
                            </>

                        ) : (
                            <>
                                <Route path={"/Registrasi"} element={<Register />} />
                                <Route path={"/Login"} element={<Login onLogin={handleLogin} />} />
                            </>
                        )} */}





                    </Route>
                    {/*                 
                {token !== null ? 
                //jika benar maka akan jalan yang ini
                    <Route>
                        <Route path={"/Note"} element={<Note />} /> 
                        <Route path="*" element={<Navigate to={"/Note"}/>}/>
                    </Route>
                    
                //jika salah maka akan  jalan yang ini
                : <Route path={"/Note"} element={<h1 className=" text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                {
                    token !== null ? null : 
                   <Route>
                     <Route path={"/Registrasi"} element={<Registrasi />} />
                     <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
                   </Route>
                }
                </Route>
                <Route path="*" element={<Navigate to={"/Login"}/>}/> */}

            </Routes>

        </BrowserRouter>

    )
}

export default App


//======================================
// import { useEffect, useState } from "react"
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import Navbar from './Navbar'
// import Note from './Note'
// import Login from './Pages/Login'
// import Registrasi from './Pages/Registrasi'
// import { getToken } from "./api"

// //perubahan


// function App() {
//     //panggil nilai isLoggedin dari context
//     const { isLoggedin } = useAuth()
//     const [token, setToken] = useState(null);

//     const handleLogin = (tokens) => {
//         setToken(tokens)
//     }

//     const handleLogout = () => {
//         setToken(null)
//         localStorage.removeItem('token');
//     }

//     useEffect(() => {
//         const tokens = getToken()
//         setToken(tokens);
//     }, [])



//     // const [token,setToken] = useState(null)

//     // const handleLogin = (token) => {
//     //     setToken(token)
//     // }

//     // useEffect(()=>{
//     //     const token = getToken()
//     //     setToken(token)
//     // },[]) mmmmm
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route element={<Navbar token={token} onLogout={handleLogout} />}>
//                         {token !== null ?
//                             <Route>
//                                 <Route path={"/Note"} element={<Note />} />
//                                 <Route path="*" element={<Navigate to={"/Note"} />} />
//                             </Route>
//                             : <Route path={"/Note"} element={<h1 className="text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
//                         {
//                             token !== null ? null :
//                                 <Route>
//                                     <Route path={"/Register"} element={<Registrasi />} />
//                                     <Route path={"/Login"} element={<Login onLogin={handleLogin} />} />
//                                 </Route>
//                         }
//                     </Route>
//                     <Route path="*" element={<Navigate to={"/Login"} />} />
//                 </Routes>
//             </BrowserRouter>

//         </>
//     )
// }



// export default App

