import BreadCamps from "../components/breadCamp";
import NewsCard from "./components/newsCard"

function News () {
    return(
            <div className="">
            <BreadCamps title={"News"} subtitle ={"PCAC : Latest News"}/>
               <div className="lg:m-[80px] m-4">
               <NewsCard />
               </div>
            </div>
    )
}

export default News;
