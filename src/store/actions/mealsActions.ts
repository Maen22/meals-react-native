export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavoriteAction = (id: string) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      mealId: id,
    },
  };
};

export const setFiltersAction = (filterSetting: any) => {
  return {
    type: SET_FILTERS,
    payload: {
      filters: filterSetting,
    },
  };
};
