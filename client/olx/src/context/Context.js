import { createContext, useContext, useEffect, useState } from "react";

import { getAll } from "../api/getRequests";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile") || null)
  );

  const [category, setCategory] = useState([]);
  const [cards, setCards] = useState([]);
  const [sub, setSub] = useState([]);
  const [type, setType] = useState([]);
  const [works, setWorks] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false)

  const toggleReset = () => setLoading(!loading)

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
        setWorks(resWork?.data?.getAll);
        setCards([...resCar?.data?.getAll, ...resFashion?.data?.getAll]);
      } catch (error) {
        console.log(error);
      }
    };

    myFunc();
  }, [currentUser, loading]);

  const value = {
    currentUser, setCurrentUser,
    exit, category, setCategory,
    sub, setSub, type, setType,
    toggleReset, works, exit,
    cards, setCards, onlineUsers,
    setOnlineUsers, currentChat,
    setCurrentChat, chats, setChats
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};