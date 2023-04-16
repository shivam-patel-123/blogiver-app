import React from "react";
import styled from "styled-components";
import { InputField } from "../../";
import { ErrorMessage, InputFieldGroup, InputFieldLabel } from "../InputField/InputField";

const Dropdown = ({ label, error, ...otherProps }) => (
    <InputFieldGroup>
        <InputFieldLabel className="form__label" id={otherProps.id}>
            {label}
            <span className="required">{otherProps.required ? " *" : ""}</span>
        </InputFieldLabel>
        <Select className="form__field" {...otherProps}>
            <option value="">-- Select category --</option>
            <option value="entertainment">Entertainment</option>
            <option value="sport">Sport</option>
            <option value="technical">Technical</option>
            <option value="educational">Educational</option>
            <option value="news">News</option>
            <option value="nature">Nature</option>
            <option value="others">Others</option>
        </Select>
        {error ? <ErrorMessage className="field__error-msg">{error}</ErrorMessage> : null}
    </InputFieldGroup>
);

const Select = styled.select`
    width: 100%;
    padding: 1.2rem 1rem;
    font-size: 1.6rem;
    border-radius: 0.6rem;
    border: 1px solid #d1d1d1;
    outline: none;
    font-weight: 500;
    cursor: pointer;

    &::placeholder {
        color: #bfbfbf;
        font-size: 1.4rem;
    }

    &:hover {
        border: 1px solid #a1a1a1;
    }

    &:focus {
        background-color: #f9f9f9;
        border: 1px solid #a1a1a1;
    }
`;

export default Dropdown;
