type CatFactProps = {
    fact: string
}

export function CatFact({fact}: CatFactProps) {
    return (
        <blockquote>{fact}</blockquote>
    )
}