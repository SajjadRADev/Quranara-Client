import Header from "@/components/layout/blogs/Header";
import Main from "@/components/layout/blogs/Main";

function Blogs() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default Blogs;
