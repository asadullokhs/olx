import { createContext, useContext, useEffect, useState } from "react";
import { getAll, getProd } from "../api/getRequests";

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

  const exit = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    setCurrentUser,
    exit,
    cards,
    setCards,
  };

  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};
