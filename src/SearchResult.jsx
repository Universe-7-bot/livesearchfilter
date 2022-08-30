import React from "react";

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/500x300/?${props.searchItem}`;

    return (
        <>
            <div className="m-3">
                <img src={img} className="img-fluid shadow" alt="myPic" />
            </div>
        </>
    );
};

export default SearchResult;