const UserName = "れーとめ";
const menu = ["ホーム", "ブログ", "Scratch作品", "Githubソースコード"];
const menuLink = ["/", "/blog.html", "/project.html", "https://github.com/Reetome/reetome.github.io"]

function Project({Link}){
    let projectImage = `https://uploads.scratch.mit.edu/get_image/project/${Link}_600x450.png`;
    let projectLink = `https://scratch.mit.edu/projects/${Link}/`;
    return (
        <div className="project">
            <a title={projectLink} href={projectLink}>
                <img src={projectImage} />
            </a>
        </div>
    )
}
function Navigation({text,hrefLink}){
    return (
        <p>
            <a href={hrefLink}>{text}</a>
        </p>
    )
}

function AllProject(){
    return (
        <div>
            <p className="Title">
                <a href="https://scratch.mit.edu/studios/34265902/">Scratch作品</a>
            </p>
            <div className="projects">
                <Project Link="959338885" />
                <Project Link="957456103" />
                <Project Link="950656300" />
                <Project Link="947237334" />
                <Project Link="945565611" />
                <Project Link="944713482" />
                <Project Link="943405316" />
                <Project Link="942246822" />
                <Project Link="941320488" />
                <Project Link="938377104" />
                <Project Link="934367834" />
                <Project Link="934188393" />
                <Project Link="875977346" />
                <Project Link="934072166" />
                <Project Link="932905728" />
                <Project Link="930026609" />
                <Project Link="878220898" />
            </div>
        </div>
    )
}

class Projects extends React.Component {
    render(){
        return (
            <div>
                <p className="Title">オススメ プロジェクト</p>
                <div className="projects">
                    <Project Link="959338885" />
                    <Project Link="947237334" />
                </div>
            </div>
        )
    }
}

class Headers extends React.Component {
    render(){
        return (
            <header>
                <div>
                    <p className="logo">
                        <a href="/">
                            <img src="./images/icon.png" />
                        {UserName}
                        </a>
                    </p>
                    <nav>
                        <Navigation text={menu[0]} hrefLink={menuLink[0]} />
                        <Navigation text={menu[1]} hrefLink={menuLink[1]} />
                        <Navigation text={menu[2]} hrefLink={menuLink[2]} />
                        <p>
                            <a href={menuLink[3]} id="source">{menu[3]}</a>
                        </p>
                    </nav>
                </div>
                <p className="darkMode">
                    <a className="material-symbols-outlined">Nightlight</a>
                </p>
            </header>
        )
    }
};

class TopImage extends React.Component {
    render(){
        return (
            <div className="topImage">
                <div className="center">
                    <p className="name">{UserName}</p>
                    <div className="link">
                        <p>サブ垢：<a href="https://scratch.mit.edu/users/retome3">@retome3</a></p>
                        <p>本垢：<a href="https://scratch.mit.edu/users/q23we3e4r5t6yu">@q23we3e4r5t6yu</a></p>
                    </div>
                </div>
            </div>
        )
    }
};

class Footers extends React.Component {
    render(){
        return (
            <footer id="footer">
                <div>
                    <p className="CopyRight">© 2024 Reetome　</p>
                    <hr />
                    <div>
                        <Navigation text={menu[0]} hrefLink={menuLink[0]} />
                        <Navigation text={menu[1]} hrefLink={menuLink[1]} />
                        <Navigation text={menu[2]} hrefLink={menuLink[2]} />
                        <p>
                            <a href={menuLink[3]} id="source2">{menu[3]}</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
};

class Messages extends React.Component {
    render(){
        return (
            <div>
                <p className="Title">メッセージ</p>
                <div className="message">
                    <p className="left">現在活動休止中です。申し訳ございません。</p>
                </div>
            </div>
        )
    }
};
