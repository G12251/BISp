import React from "react";
import { Form, Input } from "antd"; // Import necessary components from Ant Design
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Register() {
  const onFinish = (values) => {
    console.log("Success", values);
  };
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">BookMovie - REGISTER</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            required
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            required
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            required
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" />
          </Form.Item>

          <div className="flex flex-column mt-2 gap-1">
            <Button fullWidth title="REGISTER" type="submit" />
            <Link to="/login" className="text-primary">
              {" "}
              Already have an account? Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
