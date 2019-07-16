import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'
import Center from '@/components/index/center'
// 会员
import List from '@/components/member/list'
import Grade from '@/components/member/grade'
import Num from '@/components/member/num'
import Reco from '@/components/member/reco'
import Buy from '@/components/member/buy'
import AddMark from '@/components/member/addmark'
import Rech from '@/components/member/rech'
import Line from '@/components/member/line'
import Busin from '@/components/member/busin'
import Deposit from '@/components/member/deposit'
import Order from '@/components/member/order'
import Mark from '@/components/member/mark'

import Banner from '@/components/manage/banner'
import Agree from '@/components/manage/agree'
import Floor from '@/components/manage/floor'
import Adv from '@/components/manage/adv'
import AdvList from '@/components/manage/advlist'
import Stat from '@/components/manage/stat'
import Shop from '@/components/manage/shop'

import Info from '@/components/inform/info'
import AddInfo from '@/components/inform/addinfo'
import InfoClas from '@/components/inform/infoclas'
import InfoShow from '@/components/inform/infoshow'

import GoodsList from '@/components/goods/goodslist'
import GoodsClas from '@/components/goods/goodsclas'

import OrderList from '@/components/order/orderlist'

import MerchList from '@/components/merch/merchlist'
import AddMerch from '@/components/merch/addmerch'
import MerchShop from '@/components/merch/merchshop'
import MerchDepo from '@/components/merch/merchdepo'
import MerchType from '@/components/merch/merchtype'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: '我的桌面',
      component: Index,
      children: [
        {
          path: '/index',
          name: '我的桌面',
          component: Center
        },
        {
          path: '/list',
          name: '会员列表',
          component: List
        },
        {
          path: '/grade',
          name: '级别配置',
          component: Grade
        },
        {
          path: '/num',
          name: '级别配置',
          component: Num
        },
        {
          path: '/reco',
          name: '推荐名额流水',
          component: Reco
        },
        {
          path: '/buy',
          name: '名额购买记录',
          component: Buy
        },
        {
          path: '/addMark',
          name: '添加市场中心会员',
          component: AddMark
        },
        {
          path: '/rech',
          name: '充值保证金记录',
          component: Rech
        },
        {
          path: '/line',
          name: '线下支付凭证',
          component: Line
        },
        {
          path: '/busin',
          name: '事业部列表',
          component: Busin
        },
        {
          path: '/deposit',
          name: '申请提现列表',
          component: Deposit
        },
        {
          path: '/order',
          name: '推荐名额订单',
          component: Order
        },
        {
          path: '/mark',
          name: '市场中心会员行业分类列表',
          component: Mark
        },
        {
          path: '/banner',
          name: 'Banner列表',
          component: Banner
        },
        {
          path: '/agree',
          name: '协议列表',
          component: Agree
        },
        {
          path: '/floor',
          name: '楼层列表',
          component: Floor
        },
        {
          path: '/adv',
          name: '广告分组',
          component: Adv
        },
        {
          path: '/advList',
          name: '广告列表',
          component: AdvList
        },
        {
          path: '/stat',
          name: '产品统计',
          component: Stat
        },
        {
          path: '/shop',
          name: '购物记录',
          component: Shop
        },
        {
          path: '/info',
          name: '资讯列表',
          component: Info
        },
        {
          path: '/Addinfo',
          name: '添加资讯',
          component: AddInfo
        },
        {
          path: '/infoClas',
          name: '资讯分类',
          component: InfoClas
        },
        {
          path: '/infoShow',
          name: '资讯展示',
          component: InfoShow
        },
        {
          path: '/goodsList',
          name: '商品列表',
          component: GoodsList
        },
        {
          path: '/goodsClas',
          name: '商品分类',
          component: GoodsClas
        },
        {
          path: '/orderList',
          name: '订单列表',
          component: OrderList
        },
        {
          path: '/merchList',
          name: '商家列表',
          component: MerchList
        },
        {
          path: '/Addmerch',
          name: '添加商家',
          component: AddMerch
        },
        {
          path: '/merchShop',
          name: '商家结算记录',
          component: MerchShop
        },
        {
          path: '/merchDepo',
          name: '商家提现',
          component: MerchDepo
        },
        {
          path: '/merchType',
          name: '商家类型',
          component: MerchType
        }
      ]
    }
  ]
})
