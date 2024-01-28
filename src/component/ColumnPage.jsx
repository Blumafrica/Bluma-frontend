import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import analysis from "../images/analysis.svg";
import account from "../images/profile.svg";
import feed from "../images/feed.svg";
import settings from "../images/setting.svg";
import team from "../images/team.svg";
import favorite from "../images/favorite.svg";
import draft from "../images/drafts.svg";
import articleImage from "../images/ArticleImage.jpg";

export default function ColumnPage() {
    const [toggle, setToggle] = useState(1);

    function handleVisibility(id) {
        setToggle(id);
    }

    return (
        <>
            <div className="flex justify-content-center">
                <div className="col-span-1">
                    <div>
                        <ul className="list-none text-left text-3xl m-3 p-2">
                            {/* ... your existing code ... */}
                        </ul>
                    </div>
                </div>

                <div className="col-span-2 bg-slate-100">
                    <div className="flex justify-end">
                        <div className="bg-purple-500 p-2 m-3 sm:w-44 xl:w-72 text-center rounded-xl">
                            <p className="sm:text-xl sm:p-2 font-mono xl:text-3xl xl:p-4 text-white">
                                Post Article
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ul className="uppercase flex justify-between p-3 text-3xl m-3">
                                <Link
                                    onClick={() => handleVisibility(1)}
                                    className={`feeds border-b-4 focus:border-purple-600 ${
                                        toggle === 1 ? "active" : ""
                                    }`}
                                >
                                    <li>Feeds</li>
                                </Link>
                                <Link
                                    onClick={() => handleVisibility(2)}
                                    className={`featuredArticleBtn border-b-4 focus:border-purple-600 ${
                                        toggle === 2 ? "active" : ""
                                    }`}
                                >
                                    <li>Featured Article</li>
                                </Link>
                                <Link
                                    onClick={() => handleVisibility(3)}
                                    className={`recentBtn border-b-4 focus:border-purple-600 ${
                                        toggle === 3 ? "active" : ""
                                    }`}
                                >
                                    <li className="border-b-4">Recent</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className={toggle === 1 ? "feeds-content" : "invi"}>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>

                    <div className={toggle === 2 ? "featured-article-content" : "invi"}>
                        <div className="col-span-2 text-2xl p-2 flex">
                            <div className="p-2">
                                <h2 className="text-3xl font-bold uppercase font-mono">
                                    Problem Of the Day
                                </h2>
                                <p>
                                    {/* ... your existing content ... */}
                                </p>
                                <img className="m-2" src={articleImage} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 3 ? "recent-content" : "invi"}>
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    );
}
