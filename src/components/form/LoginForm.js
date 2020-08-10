import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../store/actions/authentication";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import RegisterForm from "./RegisterForm";

const LoginForm = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)

    const submit = (e) => {
        e.preventDefault()
        const loginData = {
            email,
            password
        }
        dispatch(login(loginData))
        // props.history.push("/login")
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
    }
    const submitRegister = (e) => {
        e.preventDefault()
        const registerData = {
            name,
            email,
            password
        }
        dispatch(register(registerData))
    }
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Sign Up" key="1">
                    <h1 style={{ textAlign: 'center' }}>Create an account!</h1>
                    <p style={{ textAlign: 'center' }}>Start review your favorite Movie!</p>
                    <form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onSubmit={submitRegister}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                        >
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                    </form>
                </TabPane>
                <TabPane tab="Sign In" key="2">
                    <h1 style={{ textAlign: 'center' }}>Welcome Back!</h1>
                    <p style={{ textAlign: 'center' }}>Let's review your favorite Movie!</p>
                    <form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onSubmit={submit}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                Sign In
                            </Button>
                        </Form.Item>
                    </form>
                </TabPane>
            </Tabs>
        </>
    );
}


export default LoginForm;