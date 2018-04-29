const app = {
    title: "Indecision App",
    subtitle: "it's a subtitle!",
    options: []
  }
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    
    if(option){
      app.options.push(option);
      e.target.elements.option.value = '';
      renderApp();
    }
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  };
  
  const removeAll = () => {
    app.options = [];
    renderApp();
  };
  
  var appRoot = document.getElementById('app');
  const renderApp = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <button 
              onClick={onMakeDecision} 
              disabled={ app.options.length === 0 && 'disabled' }
              className="btn btn-success">What should I do?</button>
            <br/>
            {app.options.length > 0 ? "Here's your options": 'no options'}
            
            <ol>
            {
              app.options.map((option, i) => <li key={option+i}>{option}</li>)
            }
            </ol>
            <div>
              <form onSubmit={onFormSubmit} className="form-inline">
                <div className="form-group mr-2">
                  <input type="text" name="option" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <button onClick={removeAll} className="btn btn-default mt-4">Remove All</button>
  
        </div>
    );
    
    
    ReactDOM.render(template, appRoot);
  
  };
  
  renderApp();
  