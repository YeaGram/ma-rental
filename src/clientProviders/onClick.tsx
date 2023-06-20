"use client"
import { useRef, useEffect } from "react"


export default function OnClick({children, url}:{children:React.ReactNode, url?:string}) {
    
    function handleClick(event:React.MouseEvent) {
      console.log("hello World")
    };
    
    return <span onClick={handleClick}>{children}</span>
}