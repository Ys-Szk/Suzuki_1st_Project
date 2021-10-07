import React, { Component } from 'react';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '名無し',
      comment: '',
      commentList: []
    };
  }

  handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        this.setState({
          name: e.target.value
        })
        break;
      case 'comment':
        this.setState({
          comment: e.target.value
        })
        break;
      default:
        break;
    }
  }

  addComment = () => this.setState({
    commentList: [
      ...this.state.commentList,
      {
        name: this.state.name,
        comment: this.state.comment
      }
    ]
  })

  render() {
    return (
      <Components handleInputChange={this.handleInputChange} addComment={this.addComment} commentList={this.state.commentList} />
    )
  }
}

const Components = (props) => (
  <div style={{width: 500, margin: 'auto'}}>
    <input name='name' type='text' placeholder='名前' onChange={props.handleInputChange}/><br />
    <textarea name='comment' style={{width: 400, height: 100}} onChange={props.handleInputChange} placeholder='何か書いてね'/>
    <input type='submit' value='追加' onClick={props.addComment}/>
    <table>
      <thead>
        <tr>
          <th>名前</th>
          <th>コメント</th>
        </tr>
      </thead>
      <tbody>
      {
        props.commentList.map((comment, index) => (
          <tr key={index}>
            <td>{comment.name}</td>
            <td>{comment.comment}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>
)

export default App;
