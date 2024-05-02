import { createContext, useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { getAll } from "../api/getRequests";
=======
import { getAll, getProd } from "../api/getRequests";
>>>>>>> ef1be114cb68ab5bfcf149758e9c62e3d1290df4

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile") || null)
  );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await getAll("car");
        setCards(res.data.getAll);
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, [currentUser]);

  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState([]);
  const [sub, setSub] = useState([]);
  const [type, setType] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setcurrentChat] = useState(null);
  const [chats, setChats] = useState([]);

  const exit = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  useEffect(() => {
    let myFunc = async () => {
      try {
        const resCar = await getAll("car");
        const resWork = await getAll("work");
        const resFashion = await getAll("fashion");
        const resCategory = await getAll("category");
        const resSub = await getAll("sub");
        const resType = await getAll("type");
        setCategory(resCategory?.data?.category);
        setSub(resSub?.data?.getAll);
        setType(resType?.data?.getAll);
        setCards([
          ...resCar?.data?.getAll,
          ...resFashion?.data?.getAll,
          ...resWork?.data?.getAll,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    myFunc();
  }, [currentUser]);

  const value = {
    currentUser,
    setCurrentUser,
<<<<<<< HEAD
    exit, category, setCategory,
    sub, setSub,
    type, setType
=======
    exit,
    cards,
    setCards,
>>>>>>> ef1be114cb68ab5bfcf149758e9c62e3d1290df4
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};
