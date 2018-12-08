import React, { Component } from 'react';

class PostList extends Component {
    render() {
        return (
            <div>
                帖子列表：
                <ul>
                    <li>大家一起讨论React</li>
                    <li>前端框架，你最喜欢哪儿一个</li>
                    <li>web app是主流</li>
                </ul>
            </div>
        )
    }
}

export default PostList;