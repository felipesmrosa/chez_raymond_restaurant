import { Cardapio } from "./Cardapio/Index";
import { Gallery } from "./Gallery/Index";
import { Hours } from "./Hours/Index";

export function Geral() {
    return (
        <div>
            {/* <Gallery /> */}
            <div className="lado">
                <Cardapio />
                <hr />
                <Hours />
            </div>
        </div>
    );
}
