export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavoriteAction = (id: string) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      mealId: id,
    },
  };
};
