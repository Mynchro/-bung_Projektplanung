import React from "react";
import EinstellungsKarte from "./EinstellungsKarte";

const Einstellungen = () => {
    return (
        <div
            style={{
                width: "500px",
                justifyContent: "space-between",
            }}
        >
            Einstellungen
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <EinstellungsKarte />
                <EinstellungsKarte />
                <EinstellungsKarte />
                <EinstellungsKarte />
            </div>
        </div>
    );
};

export default Einstellungen;
