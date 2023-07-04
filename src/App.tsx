import React from "react";
import "./App.css";
import { Popover } from "antd";

function App() {
    return (
        <Popover
            showArrow={false}
            content={
                <div
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "blue",
                    }}></div>
            }>
            <div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "red",
                }}></div>
        </Popover>
    );
}

export default App;
