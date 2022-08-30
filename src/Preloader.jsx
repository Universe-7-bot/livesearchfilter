import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Preloader = () => {
    return (
        <>
            <div className="preload-main d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <RotatingLines
                            strokeColor="#00ffff"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="90"
                            visible={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;