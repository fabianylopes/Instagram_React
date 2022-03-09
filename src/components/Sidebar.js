import FooterSidebar from "./FooterSidebar";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar(){
    return (
        <>
            <div class="sidebar">
                <Usuario/>
                <Sugestoes/>
                <FooterSidebar/>
            </div>
        </>
    )
}
