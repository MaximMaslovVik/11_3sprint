export class Api {
  constructor(options) {
    this.options = options;
    const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort_04' : 'https://praktikum.tk/cohort_04';
    const api =  api({
      serverUrl,
      headers: {
        authorization: 'f53531ab-b595-4458-be7c-a3a5dc7cf26c',
        "Content-Type": 'application/json'
      }    
  
        const userInfo = new UserInfo(document.querySelector('.user-info'), api);
        const cardList = new CardList(document.querySelector('.places-list'), api);
      
        const bigImagePopup = new BigImagePopup(document.querySelector('.big-image'));
        const userInfoPopup = new UserInfoPopup(
          document.querySelector('.popupCreatInfo'),
          document.querySelector('.user-info .edit__button'),
          userInfo
        );
        const newCardPopup = new NewCardPopup(document.querySelector('.popup'), document.querySelector('.user-info__button'), cardList);
      });     
  }

  getUserInfo() {
    return this.fetchInternal(`/users/me`, "GET");
  }

  getCards() {
    return this.fetchInternal("/cards", "GET");
  }

  editUserInfo(name, about) {
    const body = JSON.stringify({
      name: name,
      about: about
    });
    return this.fetchInternal("/users/me", "PATCH", body);
  }

  fetchInternal(url, method, body) {
    const promise = fetch(`${this.options.baseUrl}${url}`, {
      method: method,
      headers: this.options.headers,
      body: body
    });

    return promise
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch(error => {
        console.error(error);
        alert(error);
      });
  }

}

