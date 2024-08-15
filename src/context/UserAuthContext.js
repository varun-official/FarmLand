import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from "firebase/auth";
import {collection,addDoc, getDocs,doc,deleteDoc,updateDoc, getDoc, query, orderBy} from 'firebase/firestore'
import {auth,db} from "../config/firebase"

const API="http://localhost:8000/api"

const userAuthContext=createContext();


export function UserAuthContextProvider({children}){
    const[user,setUser]= useState(false);
    const[cropdata,setCrop]=useState({})
    const userCollectionRef = collection(db,"users")
    // const shortTermCollectionRef = collection(db,"Short Term Crops")
    // const longTermCollectionRef = collection(db,"Long Term Crops")
    const cropsCollectionRef = collection(db,"crops")
    const pendingcropsCollectionRef = collection(db,"pending crops")
    const cropDashboardCollectionRef=query(collection(db,"crop dashboard"),orderBy("timestamp"))
    // const ref1 = query(collection(ref, "message"), orderBy("timestamp"));
    const fertilizerDashboardCollectionRef=collection(db,"fertilizer dashboard")
    const cropsMarketCollectionRef = collection(db,"crop market")
    const fertilizerMarketCollectionRef = collection(db,"fertilizer market")
    const schemeCollectionRef= collection(db,"schemes")
    const newsCollectionRef= collection(db,"news")
    const articleCollectionRef= collection(db,"article")
    const[cropMarketData,setCropMarket]=useState({})
    

    async function signUp(inputData){
        try {
            const data = {
                name:inputData.user_name,
                email:inputData.email,
                password:inputData.password,
                phoneno:inputData.phoneNo,
                pincode:inputData.pincode,
                district:inputData.district,
                region:inputData.region,
                state:inputData.state
            }
            const res = await axios.post(`${API}/signup`,data);
            return res.data;
            } catch (error) {
                return error.code;
            }
    }
    async function logIn(email,password){
        try {
        const res = await axios.post(`${API}/signin`,{email,password});
        return res.data;    
        } catch (error) {
            return error;
        }
    }
    const logout =async()=>{
        signOut(auth).then(() => {
           setUser(false)
          }).catch((error) => {
           console.log("failure");
          });
          
        
    }
    const presentUser = async(email) =>{
    const data= await getDocs(userCollectionRef)

    data.docs.map((currentUser)=>{
        if(currentUser.data().email === email)
        {
            setUser(currentUser.data())
            getCrop()
        }
    })
    }
    
    const addUser = async(newUser) =>{
      await addDoc(userCollectionRef,newUser)
    }
    const addCrop = async(crop) =>{
        await addDoc(cropsCollectionRef,crop)
    }

    const getCrop=async()=>{
        const data= await getDocs(cropsCollectionRef)
         setCrop(data.docs)
         console.log(data.docs);
         return data

    }
    const addCropMarket = async(crop) =>{
        await addDoc(cropsMarketCollectionRef,crop)
    }

    const addFertilizerMarket = async(fertilizer) =>{
        await addDoc(fertilizerMarketCollectionRef,fertilizer)
    }

    const getCropMarket = async() =>{
        const data=await getDocs(cropsMarketCollectionRef)
        console.log(data.docs);
        return data
        // setCropMarket(data.docs)
    }
    
    const getFertilizerMarket = async() =>{
        const data=await getDocs(fertilizerMarketCollectionRef)
        console.log(data.docs);
        return data
    }

    const updateCropMarket = async(id,data) =>{
        await updateDoc(doc(db,"crop market",id),data)
    }
    const updateFertilizerMarket = async(id,data) =>{
        await updateDoc(doc(db,"fertilizer market",id),data)
    }
    const deleteCropMarket = async (id) =>{
        await deleteDoc(doc(db,"crop market",id))
    }
    const deleteFertilizerMarket = async (id) =>{
        await deleteDoc(doc(db,"fertilizer market",id))
    }

    const deletePendingcrop = async(id) =>{
        await deleteDoc(doc(db,"pending crops",id))
    }
    const addScheme = async(scheme) =>{
        await addDoc(schemeCollectionRef,scheme)
    }
    const getScheme = async() =>{
        const data=await getDocs(schemeCollectionRef)
        console.log(data.docs);
        return data
    }

    const addNews = async(news) =>{
        await addDoc(newsCollectionRef,news)
    }
    const getNews= async() =>{
        const data=await getDocs(newsCollectionRef)
        console.log(data.docs);
        return data
    }
    const addArticle = async(article) =>{
        await addDoc(articleCollectionRef,article)
    }
    const getArticle= async() =>{
        const data=await getDocs(articleCollectionRef)
        console.log(data.docs);
        return data
    }

    const makeDeal = async(id,data)=>{
        const cropInfo= await (await getDoc(doc(db,"crop market",id))).data()
        const price=cropInfo.reamining-data.quantity;
        updateCropMarket(id,{reamining:price})
        const transaction={transactionId:id,
                           cropName:cropInfo.name,
                           sellerName:data.farmerName,
                           price:cropInfo.offerPrice,
                           Quantity:data.quantity,
                           Total:data.quantity*cropInfo.offerPrice,
                           timestamp:new Date(),
                           owner:data.owner
                        }
        await addDoc(cropDashboardCollectionRef,transaction)
    }

    const buyFertilizer = async(id,data)=>{
        const fertilizerInfo= await (await getDoc(doc(db,"fertilizer market",id))).data()
        const transaction={transactionId:id,
                           cropName:fertilizerInfo.name,
                           buyerName:data.farmerName,
                           price:fertilizerInfo.offerPrice,
                           Quantity:data.quantity,
                           Total:data.quantity*fertilizerInfo.offerPrice,
                           timestamp:new Date(),
                           owner:data.owner
                        }
        await addDoc(fertilizerDashboardCollectionRef,transaction)
    }

    const getCropTransaction = async() =>{
        const data=await getDocs(cropDashboardCollectionRef)
        console.log(data.docs);
        return data
    }

    const getFertilizerTransaction = async() =>{
        const data=await getDocs(fertilizerDashboardCollectionRef)
        return data
    }
   
    // const uploadShortTermCropDetails = async(newData) =>{
    //     await addDoc(shortTermCollectionRef,newData)
    //   }
    // const uploadLongTermCropDetails = async(newData) =>{
    //     await addDoc(longTermCollectionRef,newData)
    //   }
   
    

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            presentUser(currentUser.email)
        })
        return ()=>{
            unsubscribe();
        }

    },[]);
   return <userAuthContext.Provider value={{user,setUser,signUp,logIn,addUser,addCrop,getCrop,cropdata,addCropMarket,getCropMarket,cropMarketData,updateCropMarket,deleteCropMarket,addFertilizerMarket,getFertilizerMarket,deleteFertilizerMarket,updateFertilizerMarket,makeDeal,buyFertilizer,getCropTransaction,getFertilizerTransaction,addScheme,getScheme,addArticle,getArticle,addNews,getNews,logout,deletePendingcrop}}>{children}</userAuthContext.Provider>
}


export function useUserAuth(){
    return useContext(userAuthContext)
}