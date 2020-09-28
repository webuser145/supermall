import { request } from './request';

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}


// 对复杂的基本信息数据的整合

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.serivices = services;
    this.realPrice = itemInfo.lowNowPrice;
    this.backColor = itemInfo.discountBgColor;
  }
}

// 对商铺信息进行整合

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

// 参数信息的整合

export class GoodsParam {
  constructor(info, rule) {
    this.infos = info.set;
    this.sizes = rule.tables;
    this.image = info.images ? info.images[0] : '';
  }
}

// 用户评价数据整合

export class userEvaluate {
  constructor(rate) {
    if (rate.cRate !== 0) {
      this.avatar = rate.list[0].user.avatar ? rate.list[0].user.avatar : '没有用户评论哦';
      this.uname = rate.list[0].user.uname ? rate.list[0].user.uname : '';
      this.content = rate.list[0].content ? rate.list[0].content : '';
      this.time = rate.list[0].created ? rate.list[0].created : '';
      this.style = rate.list[0].style ? rate.list[0].style : '';
      this.images = rate.list[0].images ? rate.list[0].images : '';
      this.explain = rate.list[0].explain ? rate.list[0].explain : '【商家回复】"感谢购买"';
    }
  }
}