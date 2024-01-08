import React from "react";
import Top from "./Top";
import Contents from "./Contents";
function Question() {
    return <div>
        <header>
        <div class="head">
            <img class="logo" src="./logo1.png" alt=""/>
            <div class="links">
                <p class="link-text"><link  rel="" href=""/>Problems</p>
                <p class="link-text"><link rel="stylesheet" href=""/>Leaderboard</p>
            </div>
            <div class="profile">
                <img class="profile-pic" src="./account_circle.png" alt=""/>
                <p class="link-text">Profile</p>
            </div>
            
        </div>
    </header>
    <div class="mid-section">
        <p class="mid-head">Algorithms</p>
        <div class="mid-head-underline"></div>
        <div class="mid-content">
            <div class="mid-content-left">
                <p class="tags">Solved</p>
                <p class="tag green">Easy</p>
                <p class="tag yellow">Medium</p>
                <p class="tag red">Hard</p>
            </div>
            <div class="mid-content-right">
                <p class="mid-content-left-text">Pick One</p>
            </div>
        </div>
        <div class="filters-search">
            <div class="search-box">
            <form>
                <input type="text" id="input-field" name="name" placeholder="Search Questions"/>
            </form>
            </div>
            <div class="filters">
                <p><i></i></p>
                <p>Difficulty</p>
                <p >Status</p>
                <p>Lists</p>
                <p>Tags</p>
            </div>
        </div>
        <div class="table-head">
            <Top className = "sno headers" pClassname = "table-header" text="#" />
            <Top className = "Title headers" pClassname = "table-header title" text="Title" />
            <Top className = "tags headers" pClassname = "table-header" text="Tags" />
            <Top className = "solution headers" pClassname = "table-header" text="Solution" />
            <Top className = "acceptance headers" pClassname = "table-header" text="Acceptance" />
            <Top className = "difficulty headers" pClassname = "table-header" text="Difficulty" />
            <Top className = "frequency headers" pClassname = "table-header" text="Frequency" />
        </div>
        <div className="table-content-box">
            <Contents />
        </div>
    </div>
    </div>;
}

export default Question;