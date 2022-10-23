// Radio Buttons
function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
        output.push(
            <p key={item}>
                <input type="radio" id={item} name={props.name} value={item} />
                <label htmlFor={item}>{props.items[item]}</label>
            </p>
        )
    }
    return output;

}

// Number input
function NumberInput(props) {
    // props = {id: "teleopUp", label: "Upper Cargo"};
    return (
        <p>
            <label htmlFor={props.id}>{props.label}</label>
            
            <input type="number" defaultValue="0" name={props.id} min="0" />
        </p>
        
    );
}

//


export { RadioButtons, NumberInput };
