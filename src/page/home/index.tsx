import React from 'react'
import { Button } from 'antd';
const home: React.FC = () => {
  const add = () => {

    console.log('111');

  //   app.on('ready', () => {
  //     const win = new BrowserWindow({
  //       width: 400,
  //       height: 400
  //     });
  //     win.loadURL('https://www.baidu.com');

  //     const win1 = new BrowserWindow({
  //       width: 400,
  //       height: 400
  //     });
  //     win1.loadURL('https://www.baidu.com');

  //   });


  }
  return (
    <div>
      <Button onClick={add} type="primary">新窗口</Button>
    </div>
  )
}

export default home