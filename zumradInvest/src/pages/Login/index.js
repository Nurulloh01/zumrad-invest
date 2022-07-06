import React from "react";
import { Formik } from "formik/dist/formik.esm";
import { Body, LoginBox, H, TextBox, Btn, Input, Button } from "../Login/style";
import img from "..//..//assets//images//login2.jpg";

function Login() {
    return (
        <Body style={{ backgroundImage: `url(${img})` }}>
            <LoginBox>
                <H> Login </H>
                <Formik initialValues={
                    { email: "", password: "" }}
                    validate={
                        (values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "";
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = "Invalid email address";
                            }
                            return errors;
                        }
                    }
                    onSubmit={
                        (values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }
                    } >
                    {
                        ({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (<form onSubmit={handleSubmit} >
                            <TextBox>
                                <box-icon class="icon"
                                    type="solid"
                                    name="user"
                                    color="#fff" >
                                </box-icon>
                                <Input name="email"
                                    type="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </TextBox>
                            {errors.email && touched.email && errors.email}
                            <TextBox >
                                <box-icon class="icon"
                                    type="solid"
                                    name="lock-alt"
                                    color="#fff" >
                                </box-icon>
                                <Input type="password"
                                    placeholder="Password"
                                    color="#fff"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                /> {errors.password && touched.password && errors.password}
                            </TextBox>
                            <Btn >
                                <Button type="submit"
                                    disabled={isSubmitting} >
                                    Submit
                                </Button>
                            </Btn>
                        </form>
                        )}
                </Formik>
            </LoginBox>
        </Body >
    );
}
export default Login;