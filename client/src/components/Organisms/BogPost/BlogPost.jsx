import { useNavigate } from "react-router-dom";
import { BlogCategory } from "../../../style/Blog.js";
import { BlogContent, BlogContentBody, BlogHeader, BlogPostBody, BlogPostImageWrapper, BlogPostItem, BlogTitle, PostImage, ReadMoreButton } from "./BlogPost.js";
import path from "../../../constants/path.js";

const BlogPost = ({ post, withImg = true }) => {
    const navigate = useNavigate();
    const { _id, blogTitle, blogAbstract, createdOn, category, image } = post;

    const date = new Date(Date.parse(createdOn));
    const month = date.getMonth();
    const year = date.getFullYear();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const openBlogDetails = () => {
        navigate(`${path.ALL_BLOGS}/${_id}`);
    };

    return (
        <BlogPostItem onClick={openBlogDetails}>
            {withImg ? (
                <BlogPostImageWrapper>
                    <PostImage src={image} alt={blogTitle} />
                </BlogPostImageWrapper>
            ) : null}
            <BlogPostBody>
                <BlogHeader>
                    <BlogCategory category={category}>{category}</BlogCategory>
                    <div>
                        {months[month]} {year}
                    </div>
                </BlogHeader>
                <BlogContentBody>
                    <BlogTitle>{blogTitle.length > 40 ? blogTitle.slice(0, 40) + "..." : blogTitle}</BlogTitle>
                    <BlogContent>{blogAbstract.length > 80 ? blogAbstract.slice(0, 80) + "..." : blogAbstract}</BlogContent>
                </BlogContentBody>
            </BlogPostBody>
            <ReadMoreButton onClick={openBlogDetails}>Read More</ReadMoreButton>
        </BlogPostItem>
    );
};

export default BlogPost;
