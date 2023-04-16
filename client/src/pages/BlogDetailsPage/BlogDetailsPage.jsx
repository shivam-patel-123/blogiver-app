import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { useRef } from "react";
import { Quill } from "react-quill";
import "quill/dist/quill.snow.css";
import {
    Abstract,
    ArrowIcon,
    AuthorDiv,
    BackLinkContainer,
    BackLinkWrapper,
    BlogDetailsPageContainer,
    BlogImage,
    BlogImageWrapper,
    BlogTitle,
    Content,
    CreatedOn,
    DisabledLink,
    Header,
    InformationBar,
    Link as MainLink,
} from "./BlogDetailsPage.style";
import { ReactComponent as AvatarIcon } from "../../assets/account_circle_black_24dp.svg";
import { BlogCategory } from "../../style/Blog";

const BlogDetailsPage = () => {
    const navigate = useNavigate();
    const { blogId } = useParams();
    const quillRef = useRef(null);

    const [post, setPost] = useState({});
    const [showPreview, setShowPreview] = useState(false);
    const { blogTitle, blogAbstract, blogContent, createdOn, category, image, author } = post;

    useEffect(() => {
        (async function () {
            const { data: response } = await axios.get(`/blog/${blogId}`);
            setPost(response.blog);
            setShowPreview(true);
        })();
    }, []);

    useEffect(() => {
        if (showPreview) {
            console.log(blogContent);
            const quillEditor = new Quill(quillRef.current);
            quillEditor.setContents(JSON.parse(blogContent), "silent");
            quillEditor.disable();
        }
    }, [showPreview]);

    const date = new Date(Date.parse(createdOn));
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateNumber = date.getDate();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div style={{ position: "relative" }}>
            <BackLinkContainer>
                <BackLinkWrapper>
                    <MainLink onClick={() => navigate(-1)}>Blogs</MainLink>
                    <ArrowIcon>&gt;</ArrowIcon>
                    <DisabledLink>{blogTitle}</DisabledLink>
                </BackLinkWrapper>
            </BackLinkContainer>
            <BlogDetailsPageContainer>
                <Header>
                    <BlogCategory category={category}>{category}</BlogCategory>
                    <BlogTitle>{blogTitle}</BlogTitle>
                    <InformationBar>
                        <AuthorDiv>
                            <AvatarIcon />
                            <span>
                                {author?.firstName} {author?.lastName}
                            </span>
                        </AuthorDiv>
                        <CreatedOn>{`${dateNumber} ${months[month]}, ${year}`}</CreatedOn>
                    </InformationBar>
                </Header>

                <Abstract>{blogAbstract}</Abstract>

                <BlogImageWrapper>
                    <BlogImage src={image} alt={blogTitle} />
                </BlogImageWrapper>

                <Content ref={quillRef}></Content>
            </BlogDetailsPageContainer>
        </div>
    );
};

export default BlogDetailsPage;
