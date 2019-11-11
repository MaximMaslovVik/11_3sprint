import {Api} from "./api.js";
import {UserInfo} from "./userinfo.js";
import {CardList} from "./cardlist.js";
import {BigImagePopup} from "./popup.js";
import {UserInfoPopup} from "./popup.js";
import {NewCardPopup} from "./popup.js";

const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort_03' : 'https://praktikum.tk/cohort_03';
const api = new Api ({
  serverUrl,
  headers: {
    authorization: 'f53531ab-b595-4458-be7c-a3a5dc7cf26c',
    "Content-Type": 'application/json'
  }  
});
  const userInfo = new UserInfo(document.querySelector('.user-info'), api);
  const cardList = new CardList(document.querySelector('.places-list'), api);

  const bigImagePopup = new BigImagePopup(document.querySelector('.big-image'));
  const userInfoPopup = new UserInfoPopup(
    document.querySelector('.popupCreatInfo'),
    document.querySelector('.user-info .edit__button'),
    userInfo
  );
  const newCardPopup = new NewCardPopup(document.querySelector('.popup'), document.querySelector('.user-info__button'), cardList);

  userInfo.load();
  cardList.load();


export {serverUrl, api, userInfo, cardList, bigImagePopup, userInfoPopup, newCardPopup, };