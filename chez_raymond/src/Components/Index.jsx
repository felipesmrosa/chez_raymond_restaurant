import { About } from "./About/Index";
import { Footer } from "./Footer/Index";
import { Gallery } from "./Gallery/Index";
import { Header } from "./Header/Index";
import { Hours } from "./Hours/Index";
import { FloatingWhatsapp } from "./Whatsapp/Index";

export function Geral() {
    return (
        <div>
            <Gallery />
            <About />
            <Hours />
        </div>
    );
}
