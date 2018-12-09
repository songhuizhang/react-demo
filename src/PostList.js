import React, { Component } from 'react';
import PostItem from './PostItem';

const data = [
    { title: '大家一起讨论React', author: 'zhangsan', date: '2017-09-01 10:00'},
    { title: '前端框架，你最喜欢哪儿一个', author: 'lisi', date: '2018-09-01 10:00'},
    { title: 'web app是主流', author: 'wangwu', date: '2019-09-01 10:00'},
]
class PostList extends Component {
    render() {
        return (
            <div>
                帖子列表：
                <ul>
                    {
                        data.map(item => {
                            return (
                                <PostItem title={item.title} author={item.author} date={item.date} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PostList;