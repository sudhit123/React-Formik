import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
const Formik = () => {
    const validateSchema = Yup.object().shape({
        firstName: Yup.string().required("FirstName is required"),
        lastName: Yup.string().required("LastName is required"),
        email: Yup.string().required("Email is required"),
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: ''
        },
        validationSchema: validateSchema,
        onSubmit: (values) => {
            console.log('values=====>', values)
        }
    });
    const { handleSubmit, handleChange, errors, touched, handleBlur, values, setFieldValue } = formik;
    // setFieldValue(firstName,"demoe") FOR EXAMPLE  VALUE SET
    return (
        <div>
            <div>
                <lable>FirstName</lable>
                <input type="text" id="firstName" name="firstName" onChange={handleChange} />
                {errors.firstName && touched.firstName ? (
                    <span className="text-danger">{errors.firstName}</span>
                ) : null}
            </div>
            <div>
                <lable>LastName</lable>
                <input type="text" id="lastName" name="lastName" onChange={handleChange} />
                {errors.lastName && touched.lastName ? (
                    <span className="text-danger">{errors.lastName}</span>
                ) : null}
            </div>
            <div>
                <lable>Email</lable>
                <input type="text" id="email" name="email" onChange={handleChange} />
                {errors.email && touched.email ? (
                    <span className="text-danger">{errors.email}</span>
                ) : null}
            </div>
            <div>
                <lable>Age</lable>
                <input type="text" id="age" name="age" onChange={handleChange} />
            </div>
            <button type="submit" onClick={handleSubmit}> Save</button>
        </div>
    )
}

export default Formik