import * as actionTypes from "../actions/actionTypes";

export const initialState = {
         items: [
           {
             id: 1,
             name: "Batmobile",
             price: "15",
             image:
               "https://firebasestorage.googleapis.com/v0/b/react-crud-app-a6ded.appspot.com/o/images%2Fcar.jpg?alt=media&token=269bc70a-329a-4fea-9e84-73ff54971f07",
             brand: "DC Comics",
             model: "grey car",
             category: "cars",
             description:
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
             id: 2,
             name: "Batgirl Doll",
             price: "20",
             image:
               "https://firebasestorage.googleapis.com/v0/b/react-crud-app-a6ded.appspot.com/o/images%2Fdool_hero.jpg?alt=media&token=f7d4ab3d-ceca-4724-b76c-3a358db9aaea",
             brand: "Barbie",
             model: "girl",
             category: "dolls",
             description:
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
             id: 3,
             name: "The Incredibles Figures",
             price: "35",
             image:
               "https://firebasestorage.googleapis.com/v0/b/react-crud-app-a6ded.appspot.com/o/images%2Ffigures.jpg?alt=media&token=dd16028d-d2d9-4eb4-9540-9149ea326c41",
             brand: "Disney",
             model: "dressed",
             category: "figures",
             description:
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
             id: 4,
             name: "Super Mario Mushroom",
             price: "9",
             image:
               "https://firebasestorage.googleapis.com/v0/b/react-crud-app-a6ded.appspot.com/o/images%2Fgame_nitendo.jpg?alt=media&token=0b162797-3b76-4ba8-a417-641d87f1dea7",
             brand: "Nitendo",
             model: "kinder egg toys",
             category: "figures",
             description:
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           },
           {
             id: 5,
             name: "Mickey and Minnie Kit",
             price: "30",
             image:
               "https://firebasestorage.googleapis.com/v0/b/react-crud-app-a6ded.appspot.com/o/images%2Fmini_mickey.jpg?alt=media&token=1e8d422d-cd4c-41b9-845c-cab9ede0d9e6",
             brand: "Disney",
             model: "outdoor",
             category: "box kit",
             description:
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
           },
           {
             id: 6,
             name: "Pikachu Puppet",
             vendor: "lego",
             price: "12",
             image:
               "https://firebasestorage.googleapis.com/v0/b/react-crud-app-a6ded.appspot.com/o/images%2Fpikachu.jpg?alt=media&token=ed2b07dd-4626-4874-8eb4-9f063966e274",
             brand: "Nitendo",
             model: "outdoor",
             category: "soft",
             description:
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           }
         ],
         error: false
       };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      action.item["id"] = state.items.length + 1;
      return {
        ...state,
        items: [...state.items, action.item],
        error: false
      };
    case actionTypes.UPDATE_ITEM:
      return {
        ...state,
        items: action.items,
        error: false
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        items: action.items,
        error: false
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
