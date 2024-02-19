export const fetchData = async () => {
  try {
    const response = await fetch("../../db.json");
    if (!response.ok) {
      throw new Error("Failed to fetch dishes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    throw error;
  }
};

export const getAllDishes = async () => {
  try {
    const { foods } = await fetchData();
    return foods;
  } catch (error) {
    console.error("Error getting all dishes:", error);
    throw error;
  }
};
