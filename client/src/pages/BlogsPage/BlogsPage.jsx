import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { BlogPost } from "../../components";
import { BlogContainer, BlogHeaderImage, BlogHeaderImageWrapper, BlogHeaderWrapper, BlogPostsList, BlogsPageWrapper, HeaderPost } from "./BlogsPage.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsSuccess } from "../../redux/blog/blog.reducer";
import { BlogContent, BlogContentBody, BlogHeader, BlogPostBody, BlogTitle } from "../../components/Organisms/BogPost/BlogPost";
import { BlogCategory } from "../../style/Blog";
import { Title } from "../MyAccounts/MyAccounts";

const BlogsPage = () => {
    const dispatch = useDispatch();
    const blogPosts = useSelector((state) => state.blog.blogs);

    useEffect(() => {
        (async function () {
            const { data: response } = await axios.get("/blog");
            dispatch(fetchBlogsSuccess(response.blogs));
        })();
    }, []);

    return (
        <BlogContainer>
            <BlogsPageWrapper>
                <Title>All Blogs</Title>
                <BlogPostsList>
                    {blogPosts?.map((blogPost) => (
                        <BlogPost key={blogPost._id} post={blogPost} />
                    ))}
                </BlogPostsList>
            </BlogsPageWrapper>
        </BlogContainer>
    );
};

export default BlogsPage;
