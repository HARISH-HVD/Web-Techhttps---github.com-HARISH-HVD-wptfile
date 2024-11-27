import { Provider } from "react-redux"
import { CounterView } from "./CounterView"
import { counterStore } from "./CounterStore"
import { eoStore } from "./evenOdd/EOStore"
import { EOView } from "./evenOdd/EOView"
import { FactView } from "./factorial/FactView"
import { factStore } from "./factorial/FactStore"


export function ReduxProvider()
{
    return(<>
<Provider store={factStore}>
    {/* <CounterView/> */}
    {/* <FactView/> */}
    {/* <EOView/> */}
    <FactView/>
</Provider>
    
    </>)
}