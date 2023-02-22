import { useLayoutEffect, useRef, useState } from "react"

type CatFactProps = {
    fact: string
}

export function CatFact({fact}: CatFactProps) {
    const quoteRef = useRef<HTMLParagraphElement>(null)

    const [boxHeight, setBoxHeight] = useState(0)

    // Como useEffect, pero se ejecuta después de que se dibuja el DOM
    useLayoutEffect(() => {
        // const {height} = quoteRef.current?.getBoundingClientRect() || 0
        setBoxHeight(quoteRef.current?.getBoundingClientRect().height || 0)
    })

    return (
        <blockquote><p ref={quoteRef}>{fact}</p>{boxHeight}</blockquote>
    )
}