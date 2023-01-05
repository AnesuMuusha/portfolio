import * as yup from "yup";

export const userSchema = yup.object().shape({

    userName: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().min(1).max(100).required(),
    messsage:yup.string().min(1).max(1000).required(),
})