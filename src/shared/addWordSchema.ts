import * as Yup from 'yup';

const schema = Yup.object().shape({
    word: Yup.string()
        .min(1,"Can not be less than 1 character")
        .max(10, "Too long")
        .required("Required")
});

export default schema;