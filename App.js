import React from "react"
import Header from "./Header"
import Content from "./Content"
import data from "./data"

export default function App() {
    const trips = data.map(item => {
        return (
            <Content 
                item={item}
            />
        )
    })
    return (
        <>
            <Header />
            {trips}
        </>
    )
}