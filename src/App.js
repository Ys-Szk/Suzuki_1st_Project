import React, { useState } from 'react';
import './App.css';

function App() {
  // コンストラクタによるstate初期化を書き換え
  const [name, setName] = useState('名無しさん');
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  // 上の「;」2つを「,」にする必要あり？

  // input, textareaに値が入った場合にstateを更新する
  handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName({
          name: e.target.value
        })
        break;
      case 'comment':
        setComment({
          comment: e.target.value
        })
        break;
      default:
        break;
    }
  }
  // stateを更新する
  addComment = () => setCommentList({
    commentList: [
      commentList,
      {
        name: name,
        comment: comment
      }
    ]
  })

    return (
      <div style={{width: 500, margin: 'auto'}}>
        <h1 className="AppTitle">szk testApp 001</h1>
        <h2>welcome!</h2>
        <img src="public/images/test001.jpeg" />
        <p>
          since 2021/10〜
        </p>
        <p>
        このWEBアプリケーションは鈴木の激闘の記録です。
        </p>
        <input name='name' type='text' placeholder='name' onChange={handleInputChange}/><br />
        <textarea name='comment' style={{width: 400, height: 100}} onChange={handleInputChange} placeholder='comments'/>
        <input type='submit' value='post !' onClick={addComment}/>
        <table>
          <thead>
            <tr>
              <th>name 　　　　 ｜</th>
              <th>comments</th>
            </tr>
          </thead>
          <tbody>
          {
            commentList.map((comment, index) => (
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
  }

export default App;
