import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'

class PostForm extends React.Component {
  constructor(){
    super()
    this.state = {
      title:'',
      body:''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit =  this.onSubmit.bind(this)
  }
  componentDidMount(){

  }
  onChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    const post = {
      title:this.state.title,
      body:this.state.body
    }
    // call action here
    this.props.createPost(post)
  }
  render(){
    return (
      <div className="PostForm">
         <form onSubmit={this.onSubmit}>
             <div>
                 <label>Title</label>
                 <input type="text" name="title" placeholder="enter title"  value={this.state.title} onChange={this.onChange} />
             </div>
             <div>
                 <label>Title</label>
                 <input type="text" name="body" placeholder="enter body" value={this.state.body} onChange={this.onChange} />
             </div>
             <input type="submit" value="submit" />
         </form>
      </div>
    );
  }

}
PostForm.propTypes = {
  createPost:PropTypes.func.isRequired
}

export default connect(null,{createPost})(PostForm);
