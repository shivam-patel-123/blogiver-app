import { useNavigate } from "react-router-dom";
import { BlogCategory } from "../../../style/Blog";
import { BlogContent, BlogTitle } from "../BogPost/BlogPost";
import { ActionButtons, BlogBody, BlogFooter, BlogImage, BlogImageWrapper, BlogRight, DeleteButton, ListViewContainer, ListViewWrapper, ReadMoreButton } from "./BlogListView";
import path from "../../../constants/path";
import axios from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { updateBlogsList } from "../../../redux/blog/blog.reducer";
import { ReactComponent as DeleteIcon } from "../../../assets/delete.svg";

const BlogListView = ({ post }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { _id, blogTitle, blogAbstract, category, image } = post;

    const openBlogDetails = () => {
        navigate(`${path.ALL_BLOGS}/${_id}`);
    };

    return (
        <ListViewWrapper onClick={openBlogDetails}>
            <BlogImageWrapper>
                <BlogImage src={image} alt={blogTitle} />
            </BlogImageWrapper>

            <BlogRight>
                <BlogBody>
                    <BlogTitle>{blogTitle.length > 40 ? blogTitle.slice(0, 40) + "..." : blogTitle}</BlogTitle>
                    <BlogContent>{blogAbstract.length > 120 ? blogAbstract.slice(0, 120) + "..." : blogAbstract}</BlogContent>
                </BlogBody>

                <BlogFooter>
                    <BlogCategory category={category}>{category}</BlogCategory>
                    <ActionButtons>
                        <DeleteButton
                            onClick={async (e) => {
                                e.stopPropagation();
                                await axios.delete(`/blog/${_id}`);

                                dispatch(updateBlogsList({ postId: _id }));
                            }}
                        >
                            <DeleteIcon />
                        </DeleteButton>
                        <ReadMoreButton onClick={openBlogDetails}>Read More</ReadMoreButton>
                    </ActionButtons>
                </BlogFooter>
            </BlogRight>
        </ListViewWrapper>
    );
};

export default BlogListView;
