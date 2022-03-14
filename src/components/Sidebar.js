import FooterSidebar from "./FooterSidebar";
import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar(){
    return (
        <div>
            <div class="sidebar">
                <User imagem="assets/img/fabylopes.png" conta="fabylopes" nome="Faby"/>
                <Suggestions/>
                <FooterSidebar/>
            </div>
        </div>
    );
}
