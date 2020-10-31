import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="search">
            <div className="search__box">
                <input
                    type="search"
                    name="search"
                    placeholder="Search city or pincode..."
                />
            </div>
        </div>
    );
}
