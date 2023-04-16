import { useEffect } from "react";
import axios from "../../utils/axios";
import { BlogListView, Button } from "../../components";
import { BlogsList, MyAccountContainer, MyAccountHeader, Title } from "./MyAccounts";
import button from "../../components/Atoms/Button/constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBlogs } from "../../redux/blog/blog.reducer";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";

const MyAccountsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myPosts = useSelector((state) => state.blog.myBlogs);
    const user = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        (async function () {
            const { data: response } = await axios.get(`/blog/user/${user._id}`);
            dispatch(fetchMyBlogs(response.blogs));
        })();
    }, []);

    return (
        <MyAccountContainer>
            <MyAccountHeader>
                <Title>My Blog Posts</Title>
                <Button
                    size={button.size.SMALL}
                    onClick={() => {
                        navigate(`${path.APP}/create`);
                    }}
                >
                    Create New Post
                </Button>
            </MyAccountHeader>
            <BlogsList>
                {myPosts?.map((blogPost) => (
                    <BlogListView key={blogPost._id} post={blogPost} />
                ))}
            </BlogsList>
        </MyAccountContainer>
    );
};

export default MyAccountsPage;
