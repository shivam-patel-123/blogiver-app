import { useState } from "react";
import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/user/user.reducer";
import { useNavigate } from "react-router-dom";
import path from "../../../constants/path";
import { ErrorMessage, FormWrapper } from "../../../style/Form";
import { Button, InputField } from "../../";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useRef } from "react";
import { useEffect } from "react";
import Dropdown from "../../Atoms/Dropdown/Dropdown";

const CreatePostForm = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.userInfo);

    const initialState = {
        blogTitle: "",
        blogAbstract: "",
        blogContent: "",
        category: "",
        image: "",
    };

    const [richText, setRichText] = useState("");
    const [submitForm, setSubmitForm] = useState(false);

    const [formData, setFormData] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState(initialState);
    const [globalError, setGlobalError] = useState("");
    const quillRef = useRef(null);

    const { blogTitle, blogAbstract, category } = formData;

    useEffect(() => {
        if (submitForm) {
            (async function () {
                console.log(formData);
                try {
                    const data = await axios.post(
                        "/blog",
                        {
                            ...formData,
                            _id: user._id,
                            email: user.email,
                        },
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                    console.log(data);
                    navigate(path.APP);
                } catch (err) {
                    navigate(path.APP);
                }
            })();
        }
    }, [submitForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleInvalid = (e) => {
        const { name, validationMessage } = e.target;

        setErrorMessage((prevState) => ({
            ...prevState,
            [name]: validationMessage,
        }));
    };

    const handleBlur = (e) => {
        const { name, validationMessage } = e.target;

        const isValid = e.target.checkValidity();

        if (!validationMessage || !isValid) {
            setErrorMessage((prevState) => ({
                ...prevState,
                [name]: validationMessage,
            }));
        } else {
            setErrorMessage((prevState) => ({
                ...prevState,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = e.target.checkValidity();

        if (isValid) {
            const quillEditor = quillRef.current.getEditor();
            const delta = quillEditor.getContents();
            setFormData((prevState) => ({
                ...prevState,
                blogContent: JSON.stringify(delta),
            }));
            setSubmitForm(true);
        }
    };

    return (
        <CreatePostFormWrapper noValidate onSubmit={handleSubmit}>
            <InputField
                label="Title"
                type="text"
                name="blogTitle"
                id="blogTitle"
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                value={blogTitle}
                error={errorMessage.blogTitle}
            />
            <InputField
                label="Abstract"
                type="text"
                name="blogAbstract"
                placeholder="Max. 300 characters"
                id="blogAbstract"
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                value={blogAbstract}
                error={errorMessage.blogAbstract}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    gap: "12px",
                }}
            >
                <Dropdown
                    label="Category"
                    type="text"
                    name="category"
                    id="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    value={category}
                    error={errorMessage.category}
                />

                <InputField
                    label="Image"
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => {
                        console.log(e.target.files);
                        setFormData((prevState) => ({
                            ...prevState,
                            image: e.target.files[0],
                        }));
                    }}
                />
            </div>

            <RichTextEditorWrapper>
                <RichTextEditor ref={quillRef} theme="snow" value={richText} onChange={setRichText} />
            </RichTextEditorWrapper>
            <ButtonWrapper>
                <Button full type="submit">
                    Create Post
                </Button>
            </ButtonWrapper>
        </CreatePostFormWrapper>
    );
};

const CreatePostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const RichTextEditorWrapper = styled.div`
    height: 300px;
`;

const RichTextEditor = styled(ReactQuill)`
    height: 85%;
`;

const ButtonWrapper = styled.div`
    padding-top: 2rem;
`;

export default CreatePostForm;
