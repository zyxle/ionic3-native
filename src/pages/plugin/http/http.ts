import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
  providers: [HTTP]
})
export class HttpPage {
  httpInfo = '尚未请求';
  constructor(public http: HTTP) {

  }
  // POST请求
  post() {
    this.http.post('https://api.shen100.com/api/index/getIndex', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      this.httpInfo = JSON.stringify(data.data);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }
  // GET请求
  get() {
    this.http.get('https://api.shen100.com/api/index/getIndex', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      this.httpInfo = JSON.stringify(data.data);
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }
  /**
   * 其它HTTP方法
   */
  // 请求HTTP授权头
  getBasicAuthHeader() {
    
  }
  // 用户名密码认证
  useBasicAuth() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 获取主机名的所有头文件
  getHeaders() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 设置请求头
  setHeader() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 获取POST和PUT请求的数据序列化的名称
  getDataSerializer() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 设置POST和PUT请求的数据序列化的名称
  setDataSerializer() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 添加Cookie
  setCookie() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 清空Cookie
  clearCookies() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 根据url删除Cookie
  removeCookies() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 解析Cookie
  getCookieString() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
  // 获取全局请求超时，单位：秒
  getRequestTimeout() {

  }
  // 设置全局请求超时，单位：秒
  setRequestTimeout() {

  }
  // 设置SSL Cert处理模式
  setSSLCertMode() {

  }
  // 禁用重定向
  disableRedirect() {

  }
  // PUT请求
  put() {
    this.http.put('https://api.shen100.com/api/index/getIndex', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      alert(JSON.stringify(data.data));
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }
  // PATCH请求
  patch() {

  }
  // DELETE请求
  delete() {

  }
  // HEAD请求
  head() {

  }
  // 上传文件
  uploadFile() {

  }
  // 下载文件
  downloadFile() {

  }
}
