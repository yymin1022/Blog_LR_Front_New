import axios from "axios";

const API_URL_BASE : string = process.env.apiURL;

const apiRequest = (apiURL : string, apiReqData : object) => {
    apiRequest(apiURL, apiReqData);
};

const sendRequest = (url : string, data : object) => {
    let resultData : object = {};

    axios.post(url, data)
    .then((response) => {
        resultData = response.data;
    })
    .catch((error) => {
        resultData = {
            RESULT_CODE: 100,
            RESULT_MSG: error
        };
    });

    return resultData;
}

export const getPostData = (postID : string, postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostData`;
    let apiReqData : object = {
        postID: postID,
        postType: postType
    };

    return apiRequest(apiURL, apiReqData);
};

export const getPostImage = (postID : string, postType : string, srcID : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostImage`;
    let apiReqData : object = {
        postID: postID,
        postType: postType,
        srcID: srcID
    };

    return apiRequest(apiURL, apiReqData)["ImageData"];
};

export const getPostList = (postType : string) => {
    let apiURL : string = `${API_URL_BASE}/getPostList`;
    let apiReqData : object = {
        postType: postType
    };

    return apiRequest(apiURL, apiReqData);
};