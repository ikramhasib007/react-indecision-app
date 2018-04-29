const toggler = {
    toggle: false,
    text: 'This is the toggler text. we can see this now!'
};

const onToggler = () => {
    toggler.toggle = !toggler.toggle;
    renderApp();
};


const appRoot = document.getElementById("app");
const renderApp = () => {
    const template = (
        <div>
            <h2>Visibility Toggler</h2>
            <button 
                onClick={onToggler}
                className="btn btn-default">{toggler.toggle ? 'Hide':'Show'} details</button>
            { toggler.toggle && <p>{toggler.text}</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
renderApp();