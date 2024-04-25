import BreadCamps from "../components/breadCamp";
import NewsCard from "./components/newsCard"

function News () {
    return(
            <div className="">
            <BreadCamps title={"News"} subtitle ={"PCAC : Latest News"}/>
               <NewsCard />
            </div>
    )
}

export default News;
