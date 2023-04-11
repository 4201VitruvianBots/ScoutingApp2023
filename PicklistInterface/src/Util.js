/**
 * Returns a mutable object wrapped in a proxy that triggers a state update whenever a property is modified.
 * @template T - The type of the object being wrapped.
 * @param {[T, (newValue: T | ((prevState: T) => T)) => void]} stateAndSetter - An array containing the current state object and a setter function that can be used to update the state.
 * @returns {T} - A proxy object that wraps the original state object.
 */
function mutableObject([state, setState]) {
    const createProxy = (target) => {
        if (typeof target !== 'object' || target === null) {
            return target;
        }

        const newObject = Array.isArray(target) ? [...target] : { ...target };
        Object.setPrototypeOf(newObject, Object.getPrototypeOf(target));

        return new Proxy(newObject, {
            set(obj, prop, value) {
                const newState = { ...obj, [prop]: value };
                const updatedState = Array.isArray(obj) ? [...newState] : newState;
                setState(updatedState);
                return true;
            },
            get(obj, prop) {
                return createProxy(obj[prop]);
            },
        });
    };

    const stateProxy = createProxy(state);
 
    return stateProxy;
}

//this is a scary forest

// const [title, setTitle] = useState();
// setTitle("List 1")

// <input onChange={foo} />
// function foo(event) {
//     setTitle(event.target.value);
// }
// event.target.value

function inputSetterText(setter) {
    return (event) => setter(event.target.value);
}

export { mutableObject, inputSetterText };
