export default class Label extends React.Component {
	
	render(){
	   switch(this.props.size)
                {
                  case '6x':
                     switch(this.props.type)
                    {
                        case 'legend':
                        return  (<div className='r-label'>
                                  <legend className={this.props.styleClass}><h1>{this.props.label}</h1></legend>
                        </div>);
                        case 'span':
                        return  (<div className='r-label'>
                                  <h1><span className={"nspan "+ this.props.styleClass}>{this.props.label}</span></h1>
                        </div>);
                        default:
                        return  (<div className='r-label'>
                              <h1><label className={this.props.styleClass}>{this.props.label}</label></h1>
                        </div>);
                    }
                    break;
                  case '5x':
                     switch(this.props.type)
                    {
                        case 'legend':
                        return  (<div className='r-label'>
                                  <legend className={this.props.styleClass}><h2>{this.props.label}</h2></legend>
                        </div>);
                        case 'span':
                        return  (<div className='r-label'>
                                  <h2><span className={"nspan "+ this.props.styleClass}>{this.props.label}</span></h2>
                        </div>);
                        default:
                        return  (<div className='r-label'>
                              <h2><label className={this.props.styleClass}>{this.props.label}</label></h2>
                        </div>);
                    }
                    break;
                  case '4x':
                    switch(this.props.type)
                    {
                        case 'legend':
                        return  (<div className='r-label'>
                                  <legend className={this.props.styleClass}><h3>{this.props.label}</h3></legend>
                        </div>);
                        case 'span':
                        return  (<div className='r-label'>
                                  <h3><span className={"nspan "+ this.props.styleClass}>{this.props.label}</span></h3>
                        </div>);
                        default:
                        return  (<div className='r-label'>
                              <h3><label className={this.props.styleClass}>{this.props.label}</label></h3>
                        </div>);
                    }
                    break;

                  case '3x':
                    switch(this.props.type)
                    {
                        case 'legend':
                        return  (<div className='r-label'>
                                  <legend className={this.props.styleClass}><h4>{this.props.label}</h4></legend>
                        </div>);
                        case 'span':
                        return  (<div className='r-label'> 
                                  <h4><span className={"nspan "+ this.props.styleClass} >{this.props.label}</span></h4>
                        </div>);
                        default:
                        return  (<div className='r-label'>
                              <h4><label className={this.props.styleClass}>{this.props.label}</label></h4>
                        </div>);
                    }
                    break;
                  case '2x':
                    switch(this.props.type)
                    {
                        case 'legend':
                        return  (<div className='r-label'>
                                  <legend className={this.props.styleClass}><h5>{this.props.label}</h5></legend>
                        </div>);
                        case 'span':
                        return  (<div className='r-label'>
                                  <h5><span className={"nspan "+ this.props.styleClass}>{this.props.label}</span></h5>
                        </div>);
                        default:
                        return  (<div className='r-label'>
                              <h5><label className={this.props.styleClass}>{this.props.label}</label></h5>
                        </div>);
                    }
                    break;
                  case '1x':
                    switch(this.props.type)
                    {
                        case 'legend':
                        return  (<div className='r-label'>
                                  <legend className={this.props.styleClass}><h6>{this.props.label}</h6></legend>
                        </div>);
                        case 'span':
                        return  (<div className='r-label'>
                                  <h6><span className={"nspan "+ this.props.styleClass}>{this.props.label}</span></h6>
                        </div>);
                        default:
                        return  (<div className='r-label'>
                              <h6><label className={this.props.styleClass}>{this.props.label}</label></h6>
                        </div>);
                    }
                    break;
                default:
                   return  (<div className='r-label'>
                              <label className={this.props.styleClass}>{this.props.label}</label>
                        </div>);
                }
		
	}
	
};


/**
 * Label component prop types
 */
Label.propTypes = {
	id: React.PropTypes.string,		
	label: React.PropTypes.string,
	size: React.PropTypes.string,
	styleClass: React.PropTypes.string,
	type: React.PropTypes.string
};

/**
 * Get Label component default props
 */
Label.defaultProps = {
	componentType: 'Label'
};