import { useCounter, useFetch } from "../hooks"
import { CatFact, LoadingCatFact } from "./"

export function MultipleCustomHooks () {

    const {counter, increment} = useCounter()
    const {data, isLoading, hasError, onRefreshFetch} = useFetch(`https://catfact.ninja/fact/${counter}`)
    
    // Si data tiene un valor (es distinta de undefined) devuelve el primer valor
    const fact = !!data && data.fact

    console.log(fact, isLoading, hasError)

    return (
        <>
        <h1>Cat Facts </h1>
        <hr />

        {
            isLoading 
            ? <LoadingCatFact />
            : <CatFact fact={fact || ''} />
        }

        <button type="button" 
                disabled={isLoading}
                onClick={() => increment()}>Refresh</button>
        </>
    )
}