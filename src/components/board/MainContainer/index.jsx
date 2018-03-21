import React, { Component } from 'react';
import './styles.scss';

import PostList from "../PostList";

export default class MainContainer extends Component {
  render() {
    return (
      <div className="post-wrapper--middle-grey">
        <PostList />
      </div>
    );
  }
}
