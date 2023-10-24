import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode'
import { instance } from "../Axios";
import { useNavigate } from "react-router-dom";



// Create context and context data
export const DataContext = createContext();



export const DataProvider = ({ children }) => {


    const navigate = useNavigate()

    let [apiData, setApiData] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [profile, setProfile] = useState([])


    // get authtoken from localStorage

    const [authToken, setAuthtoken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode((localStorage.getItem('authToken'))) : null)

    
    const getProfile = async () => {
        try {
          const response = await instance.get('get-data/', {
            headers: {
              Authorization: `Bearer ${authToken.access}`
            }
          }).then((res)=>{
            console.log('profile',res.data);
          })
      
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };



    // login  handler  function

    const loginHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await instance.post('api/token/', { 'username': username, 'password': password }, { headers: { 'Content-Type': 'application/json', } }).then(response => {

                if (response.status === 200) {
                    localStorage.setItem("authToken", JSON.stringify(response.data))
                    setAuthtoken(response.data)
                    setUser(jwt_decode(response.data.access))


                }
                navigate('/')
            })
        }
        catch (error) {
            setLoginError(error.response.data.detail)
        }
        setLoading(false)

    }



    // logout function

    const logout = () => {
        setAuthtoken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('/')
    }



    useEffect(() => {
        if (authToken){
            setUser(jwt_decode(authToken.access))
            getProfile()
        }
        

    }, [authToken]);
    console.log('user',user);



    // all data and mangaed states

    const contextData = {
        logout: logout,
        user: user,
        setUser:setUser,
        setAuthtoken:setAuthtoken

    };



    return (
        <DataContext.Provider value={contextData}>
            {children}
        </DataContext.Provider>)
};