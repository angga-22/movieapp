import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/authentication";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const RegisterForm = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitRegister = e => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password
        }
        dispatch(register(userData))
        // props.history.push("/login")
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
    }


    return (
        <>
        <h1 style={{ textAlign: 'center' }}>Create an account!</h1>
                    <p style={{ textAlign: 'center' }}>Start review your favorite Movie!</p>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={submitRegister}
                    >
                        <Form.Item
                            name="name"
                            onFieldsChange={name}
                            onValuesChange={(e) => setName(e.target.value)}
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            onFieldsChange={email}
                            onValuesChange={(e) => setEmail(e.target.value)}
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            onFieldsChange={password}
                            onValuesChange={(e) => setPassword(e.target.value)}
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>
                    </>
    );


}


export default RegisterForm;