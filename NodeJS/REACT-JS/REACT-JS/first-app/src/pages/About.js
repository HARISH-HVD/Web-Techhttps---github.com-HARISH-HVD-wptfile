import Header from "./Header";
import { Footer } from "./Footer";
import { Profile } from "./contextHook/Profile";


export default function About() {
    return (<>
        <Header />
        <h1>About</h1>
        <Profile/>
        <Footer />
    </>)
}