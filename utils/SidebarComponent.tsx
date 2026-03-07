import Overview from "@/components/Home/Overview";
import Skills from "@/components/Home/Skills";
import Experience from "@/components/Home/Experience";
import Education from "@/components/Home/Education";
import Contact from "@/components/Home/Contact";
import Competitions from "@/components/Home/Competitions";


export const renderComponent = (component: string) => {
    switch (component) {
        case "Overview":
            return <Overview />
        case "Skills":
            return <Skills />
        case "Experience":
            return <Experience />
        case "Education":
            return <Education />
        case "Contact":
            return <Contact />
        case "Competition":
            return <Competitions/>
        default:
            return <Overview />
    }
}