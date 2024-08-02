import React from 'react'
import img1 from "../src/Api/errorpage.webp"
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const ErrorPage = () => {
    const navigate = useNavigate("");
    return (
        <div>
            <div className='errorpage-main-container'>
                <div className='errorpage-image'>
                    <img style={{ width: "480px" }} src={img1} alt="" />
                </div>
                <h2>Oops! The Page You Are Looking<br />
                    For Does Not Exist</h2>
                <div onClick={() => navigate("/")} className='errorpage-button'>
                    <button>
                        Back To Home &nbsp;<FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
