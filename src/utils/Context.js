import { useContext, createContext, useState, useEffect } from "react";
import { fetchData, exercisesOptions} from "./fetchData";

const AppContext = createContext();

export const useGymContext = () => {
  return useContext(AppContext);
};

export const AppProvider = (props) => {
  const [exercises, setExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const categories = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );
      setBodyParts(["all", ...categories]);
    };

    fetchExercisesData();
  }, []);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesOfBodyPart = [];

      if (selectedBodyPart === "all") {
        exercisesOfBodyPart = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=9999",
          exercisesOptions
        );
      } else {
        exercisesOfBodyPart = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=10`,
          exercisesOptions
        );
      }
      setExercises(exercisesOfBodyPart);
      // console.log(exercises);
    };
    fetchExercisesData();
  }, [selectedBodyPart]);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=9999",
        exercisesOptions
      );
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <AppContext.Provider
      value={{
        exercises,
        setExercises,
        selectedBodyPart,
        setSelectedBodyPart,
        search,
        setSearch,
        bodyParts,
        handleSearch,
        currentPage,
        paginate
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
