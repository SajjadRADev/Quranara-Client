import Header from "@/components/specific/home/Header";
import CTABoxes from "@/components/specific/home/CTABoxes";
import Courses from "@/components/specific/home/Courses";
import News from "@/components/specific/home/News";
import Tvs from "@/components/specific/home/Tvs";
import Blog from "@/components/specific/home/Blog";

function Home() {
    return (
        <>
            <Header />
            <main className="my-20">
                <div className="container space-y-32">
                    <CTABoxes />
                    <Courses />
                    <News />
                    <Tvs />
                    <Blog />
                </div>
            </main>
        </>
    );
}

export default Home;
