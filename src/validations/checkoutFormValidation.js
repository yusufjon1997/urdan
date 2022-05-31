import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName : Yup.string().required('required'),
    lastName : Yup.string().required('Last name is required'),
    companyName : Yup.string(),
    country : Yup.string(),
    streetName : Yup.string().required('Street is required'),
    apartment : Yup.string().required('required'),
    city : Yup.string().required('required'),
    region : Yup.string().required('required'),
    postcode : Yup.number().required('required'),
    phoneNumber : Yup.string().required('required'),
    emailAddress : Yup.string().required("required"),
    orderNotes : Yup.string()



})
