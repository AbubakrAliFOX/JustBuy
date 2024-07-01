import * as Yup from "yup";

export const productSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long!")
    .required("Name is required"),
  description: Yup.string()
    .min(2, "Description is too short")
    .max(200, "Description is too Long!")
    .required("Description is required"),
  category: Yup.string()
    .min(2, "Category is too short")
    .max(30, "Category is too Long!")
    .required("Category is required"),
  subcategory: Yup.string()
    .min(2, "Subcategory is too short")
    .max(30, "Subcategory is too Long!")
    .required("Subcategory is required"),
  price: Yup.number().required().positive("Number must be positive"),
  discount_percentage: Yup.number()
    .required()
    .positive("Discount number must be positive"),
  stock: Yup.number().required().positive("Stock number must be positive"),
  brand: Yup.string()
    .max(30, "Brand is too Long!")
    .required("Brand is required"),
  sku: Yup.string()
    .min(1, "Sku is too short")
    .max(30, "Sku is too Long!")
    .required("Sku is required"),
  weight: Yup.number().required().positive("Weight number must be positive"),
  shipping_information: Yup.string()
    .min(1, "Shipping information is too short")
    .max(30, "Shipping information is too Long!")
    .required("Shipping information is required"),
  availability_status: Yup.string()
    .min(1, "Availablity Status is too short")
    .max(30, "Availablity Status is too Long!")
    .required("Availablity Status is required"),
  image_url: Yup.string().required("Image Url is required"),
  thumbnail_url: Yup.string().required("Thumbnail url is required"),
});

export const categorySchema = Yup.object({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long!")
    .required("Name is required"),
  subcategory: Yup.string()
    .min(2, "Subcategory is too short")
    .max(30, "Subcategory is too Long!")
    .required("Subcategory is required"),
});

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .length(10, "Phone number should contain 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must have at least 6 charachters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must have at least 6 charachters")
    .required("Password is required"),
});

export const sendPasswordLinkSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must have at least 6 charachters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
