import "../../../../../bower_components/bootstrap-contextmenu/bootstrap-contextmenu";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/15
//	
//	author: yonglu.xie
//	
//	description: ContextMenu Component Class
//-----------------------------------------------------------------------------------------------
export default class ContextMenu extends Component {
	
	render(){
		return (
			<div>
				<div id="context" data-toggle="context" data-target="#context-menu" 
					style={{height: '300px', width: '650px', border: '1px solid #ddd'}}>
		    </div>

	      <div id="context-menu">
	      	<ul className="dropdown-menu" role="menu">
            <li><a tabindex="-1">Action</a></li>
	           <li><a tabindex="-1">Another action</a></li>
	           <li><a tabindex="-1">Something else here</a></li>
	           <li class="divider"></li>
	           <li><a tabindex="-1">Separated link</a></li>
	      	</ul>
	      </div>
	    </div>
		);
	}
	
	componentDidMount(){
		$('.context').contextmenu({
		  target: '#context-menu',
		  before: function(e,context) {
		    // execute code before context menu if shown
		    console.log("==before==");
		    
		    // This function is optional.
          // Here we use it to stop the event if the user clicks a span
          e.preventDefault();
          if (e.target.tagName == 'SPAN') {
            e.preventDefault();
            this.closemenu();
            return false;
          }
          this.getMenu().find("li").eq(2).find('a').html("This was dynamically changed");
          return true;
		  },
		  onItem: function(context,e) {
		    // execute on menu item selection
		    console.log("==after==");
		  }
		});
		
		 $('#context-menu').on('show.bs.context', function (e) {
        console.log('before show event');
      }).on('shown.bs.context', function (e) {
        console.log('after show event');
      }).on('hide.bs.context', function (e) {
        console.log('before hide event');
      }).on('hidden.bs.context', function (e) {
        console.log('after hide event');
      });
	}
	
};


/**
 * ContextMenu component prop types
 */
ContextMenu.propTypes = {
	id: React.PropTypes.string
};

/**
 * Get ContextMenu component default props
 */
ContextMenu.defaultProps = {
	
};
