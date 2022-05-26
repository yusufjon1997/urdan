import { createAction } from '../../utilities/reducer/reducerUtils';
import { CategoryActionTypes } from './productsActionTypes';
import axios from 'axios';

// export const setCategoryMap = (categoriesMap) => createAction(CategoryActionTypes.setCategoryMap , categoriesMap);  


export const fetchCategories_start = () => {
    createAction(CategoryActionTypes.fetch_start)
}

export const fetchCategories_success = (categoriesArray) => {
    createAction(CategoryActionTypes.fetch_success,categoriesArray)
}

export const fetchCategories_failed = (error) => {
    createAction(CategoryActionTypes.fetch_failed , error)
}

export const fetchCategoriesAsync = () => async (dispatch) => {

    dispatch({type : CategoryActionTypes.fetch_start});

    try {
        const response = await axios.get('http://localhost:5000/products');
        console.log(response);
        dispatch({
            type : CategoryActionTypes.fetch_success,
            payload : response.data
        });

    } catch (error) {
        dispatch({
            type : CategoryActionTypes.fetch_failed,
            error : error
        })
    }

}

export const displayList = (boolean) => {
   return createAction(CategoryActionTypes.display_list , boolean)
}  