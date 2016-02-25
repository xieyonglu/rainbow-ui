import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";


export default class Thumbnail extends React.Component {

  render(){
    return (
      <div className="row">
          <div className={"thumbnail " + this.props.className}>
              <a href="javascript:void(0);"  onClick={this.handlerOnClick.bind(this)}>
                  <img src={this.props.src} alt={this.props.alt}/>
              </a>
              <div class="caption">
                  {this.props.children}
              </div>
            </div>
          </div>
    );
  }

  handlerOnClick(event){
    event.preventDefault();

    if(this.props.onClick != undefined){
      this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
    }
  }

};


/**
 * Thumbnail component prop types
 */
Thumbnail.propTypes = {
  id: React.PropTypes.string,
  src: React.PropTypes.string,
  //url: React.PropTypes.string,
  alt: React.PropTypes.string,
  className:  React.PropTypes.string,
  onClick: React.PropTypes.func,
};

/**
 * Get thumbnail component default props
 */
Thumbnail.defaultProps = {
  //src: "../../../../images/logo.png",

};
