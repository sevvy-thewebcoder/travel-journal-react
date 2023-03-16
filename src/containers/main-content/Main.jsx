import React from "react";
import { Card } from "../../components";
import data from "../../data/data";
import './Main.css'

const Main =  () => {
    const CARD = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <main className="Main__Section">
            <section className="Travel__Section">
                {CARD}
            </section>
        </main>
    )
}

export default Main