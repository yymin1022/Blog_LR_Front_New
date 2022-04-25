import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import PostListItem from "./PostListItem";
import * as API from "../../Common/Utils/API";

const PostList = () => {
    const {postType} = useParams<{postType : string}>();
    const [postCount, setPostCount] = useState<number>(0);
    const [postList, setPostList] = useState<Array<object>>([]);

    useEffect(() => {
        API.getPostList(postType as string).then((apiResult : any) => {
            setPostCount(apiResult["PostCount"]);
            setPostList(apiResult["PostList"]);
        });
    }, []);

    return (
        <PostListContainer>
            <NormalPostListContainer postList={postList} postType={postType} />
        </PostListContainer>
    );
};

const NormalPostListContainer = (props : any) => {
    const postList = props.postList;
    const postType = props.postType;

    return (
        <>{
            postList.map((item : any) => {
                return(
                    <PostListItem
                        postDate={item.postDate}
                        postID={item.postID}
                        postIsPinned={item.postIsPinned}
                        postTag={item.postTag}
                        postTitle={item.postTitle}
                        postType={postType}
                        postURL={item.postURL} />
                )
            })
        }</>
    )
}

const PinnedPostListContainer = (props : any) => {
    
}

const PostListContainer = styled.div`
    width: 1000px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default PostList;