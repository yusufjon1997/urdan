import { createAction } from '../../utilities/reducer/reducerUtils';
import { ProductsActionTypes } from './productsActionTypes';
import axios from 'axios';


export const fetchProductsAsync = () => async (dispatch) => {

    dispatch({type : ProductsActionTypes.fetch_start});

    try {
        const response = await axios.get('https://fakeapiforecommerce.herokuapp.com/products');
        dispatch({
            type : ProductsActionTypes.fetch_success,
            payload : response.data
        });

    } catch (error) {
        dispatch({
            type : ProductsActionTypes.fetch_failed,
            error : error
        })
    }

}

export const displayList = (boolean) => {
   return createAction(ProductsActionTypes.display_list , boolean)
}  

export const filterByCategory = (category) => createAction(ProductsActionTypes.filterByCategory , category );

export const setCurrentPage = (currentPage) => createAction(ProductsActionTypes.setCurrentPage, currentPage);

export const searchProduct = (searchValue) => createAction(ProductsActionTypes.searchProduct , searchValue);
