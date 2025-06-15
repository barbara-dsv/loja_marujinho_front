import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Pedido } from "./pages/Pedido";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={<Pedido />}
            />
        </Route>
    )
)