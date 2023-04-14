import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("الرجاء ادخال  بريد الاكتروني صالح")
    .required("الرجاء ادخال  البريد الاكتروني "),
  password: Yup.string()
    .min(6, "كلمة السر يجب ان تكون اكثر من 6 احرف")
    .required("برجاء ادخال كلمة السر"),
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "الحد الادني لاسم هو 3 حروف")
    .max(20, "الحد الاقصي لاسم هو 20 حرف")
    .required("الرجاء ادخال الاسم"),

  email: Yup.string()
    .email("الرجاء ادخال  بريد الاكتروني صالح")
    .required("الرجاء ادخال  البريد الاكتروني "),

  password: Yup.string()
    .min(6, "كلمة السر يجب ان تكون اكثر من 6 احرف")
    .required("برجاء ادخال كلمة السر"),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "يجب ان يكون الحقل مطابق لكلمة السر")
    .required("يجب ان يكون الحقل مطابق لكلمة السر"),
});
