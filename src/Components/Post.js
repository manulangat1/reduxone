import React from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'
class Post extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    const postItems = this.props.posts.map(post => (
      <div key ={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div className="Post">
         <h1>helllo </h1>
         {postItems}
      </div>
    );
  }

}
Post.propTypes = {
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired

}
const mapStateToProps = state => ({
  posts:state.posts.items
})

export default connect(mapStateToProps,{fetchPosts})(Post);
