import React from "react";

interface PercentageProgress {
    percentage: number;
}

const CircularProgress: React.FC<PercentageProgress> = ({ percentage }) => {
    const radius = 77.5;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg
            style={{ transform: "rotate(-90deg)", overflow: "visible" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="85 85 170 170"
        >
            <linearGradient
                id="grd_0j9935rz7zwd"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
                gradientTransform="rotate(90, .5, .5)"
            >
                <stop offset="0" stopColor="rgba(5, 205, 153, 0)" />
                <stop offset="100" stopColor="#05CD99" />
            </linearGradient>
            <circle
                cx="170"
                cy="170"
                r={radius}
                stroke="transparent"
                strokeWidth="15"
                fill="#080D25"
            ></circle>
            <circle
                cx="170"
                cy="170"
                r={radius}
                fill="none"
                strokeWidth="15"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                stroke="url(#grd_0j9935rz7zwd)"
                style={{ transition: "stroke-dashoffset 400ms" }}
            ></circle>
        </svg>
    );
};

export default CircularProgress;
