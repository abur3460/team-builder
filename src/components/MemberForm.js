import React, { useState } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const MemberForm = ({
    addMember,
    renderMember,
    
}) => {
    const [form, setForm ] = useState({
        name:'',
        email:'',  
        role:''
    });
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        addMember(form);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Name: </Label>
                <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email: </Label>
                <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="role">Role: </Label>
                <Input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type="submit" className="btn" onClick={renderMember}>Submit
            </Button>
        </Form>
    );
};

export default MemberForm;