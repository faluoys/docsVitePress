<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>

<!--  <view class="navList">-->
<!--    <fui-empty v-if="this.navList.length == 0" src="/static/images/component/empty/img_news_3x.png" title="暂无数据"></fui-empty>-->
<!--    <view v-else class="navitem" v-for="(item, index) in navList" :key="index" @click="clickDetail(item)">-->
<!--      <view class="titleNav">-->
<!--        <view>-->
<!--          {{item.itemName}}-->
<!--        </view>-->
<!--        <view>-->
<!--          <text>合同规则类型：</text>-->
<!--          <text style="color: #006c45;">-->
<!--            <text v-if="item.glData && item.glData.contractRuleType == 0">金额合同</text>-->
<!--            <text v-else>数量合同</text>-->
<!--          </text>-->
<!--        </view>-->
<!--      </view>-->

<!--      <view class="botNav">-->
<!--        <view style="font-size: 30rpx;font-weight: 700;margin-bottom: 6rpx;">-->
<!--          <text>买方：</text>-->
<!--          <text v-if="item.glData && item.glData.contractBusinessType == 0" style="color: #006c45;">-->
<!--            {{item.glData.supplierName}}-->
<!--          </text>-->
<!--          <text v-else-if="item.glData && item.glData.contractBusinessType == 1" style="color: #006c45;">-->
<!--            {{item.glData.customerName}}-->
<!--          </text>-->
<!--        </view>-->
<!--        <view style="margin-bottom: 10rpx;display: flex;">-->
<!--          <view style="width: auto;font-size: 30rpx;font-weight: 700;white-space: nowrap;">发货地：</view>-->
<!--          <view style="font-size: 26rpx;flex: 1;">-->
<!--            {{item.glData && item.glData.sendName}}-->
<!--          </view>-->
<!--        </view>-->
<!--        <view style="font-size: 30rpx;font-weight: 700;margin-bottom: 6rpx;">-->
<!--          <text>卖方：</text>-->
<!--          <text v-if="item.glData && item.glData.contractBusinessType == 0" style="color: #bf5e07;">-->
<!--            {{item.glData && item.glData.customerName}}-->
<!--          </text>-->
<!--          <text v-else-if="item.glData && item.glData.contractBusinessType == 1" style="color: #bf5e07;">-->
<!--            {{item.glData.supplierName}}-->
<!--          </text>-->
<!--        </view>-->
<!--        <view style="margin-bottom: 10rpx;display: flex;">-->
<!--          <view style="width: auto;font-size: 30rpx;font-weight: 700;white-space: nowrap;">运往地：</view>-->
<!--          <view style="font-size: 26rpx;flex: 1;">-->
<!--            {{item.glData && item.glData.collectName}}-->
<!--          </view>-->
<!--        </view>-->
<!--        <view class="fui-type">-->
<!--          <view class="navTime">-->
<!--            <view class="times">-->
<!--              <view class="timeTp" style="border-color: #bf5e07;color: #bf5e07;">-->
<!--                签-->
<!--              </view>-->
<!--              <view>{{item.glData && item.glData.contractSignDate}}</view>-->
<!--            </view>-->
<!--            <view class="times">-->
<!--              <view class="timeTp" style="border-color: #006c45;color: #006c45;">-->
<!--                始-->
<!--              </view>-->
<!--              <view>{{item.glData && item.glData.contractBeginDate}}</view>-->
<!--            </view>-->
<!--            <view class="times">-->
<!--              <view class="timeTp" style="border-color: #d54941;color: #d54941;">-->
<!--                止-->
<!--              </view>-->
<!--              <view>{{item.glData && item.glData.contractEndDate}}</view>-->
<!--            </view>-->
<!--          </view>-->
<!--          <view class="navType">-->
<!--            <view>-->
<!--              <text>合同业务类型：</text>-->
<!--              <text style="color: #006c45;">-->
<!--                <text v-if="item.glData && item.glData.contractBusinessType == 0">采购</text>-->
<!--                <text v-else-if="item.glData && item.glData.contractBusinessType == 1">销售</text>-->
<!--                <text v-else-if="item.glData && item.glData.contractBusinessType == 2">代采</text>-->
<!--                <text v-else-if="item.glData && item.glData.contractBusinessType == 3">代销</text>-->
<!--                <text v-else>直销</text>-->
<!--              </text>-->
<!--            </view>-->
<!--            <view>-->
<!--              <text>含税状态：</text>-->
<!--              <text style="color: #006c45;">-->
<!--                {{item.glData && item.glData.taxStatus == 0 ? '不含税' : '含税'}}-->
<!--              </text>-->
<!--            </view>-->
<!--            <view>-->
<!--              <text>税率：</text>-->
<!--              <text style="color: #00ad5f;">{{item.glData && item.glData.taxRate}}</text>-->
<!--            </view>-->
<!--          </view>-->
<!--        </view>-->

<!--        <view class="users">-->
<!--          <view>-->
<!--            <text style="font-size: 30rpx;">联系人：</text>-->
<!--            <text v-if="item.glData && item.glData.contractBusinessType == 0">-->
<!--              {{item.glData.customerLiaisonMan || '-'}}-->
<!--            </text>-->
<!--            <text v-else-if="item.glData && item.glData.contractBusinessType == 1">-->
<!--              {{item.glData.supplierLiaisonMan || '-'}}-->
<!--            </text>-->
<!--          </view>-->
<!--          <view>-->
<!--            <text style="font-size: 30rpx;">电话：</text>-->
<!--            <text-->
<!--                style="color: #0052d9;"-->
<!--                v-if="item.glData && item.glData.contractBusinessType == 0"-->
<!--            >-->
<!--              {{item.glData.customerLiaisonManPhone || '-'}}-->
<!--            </text>-->
<!--            <text-->
<!--                style="color: #0052d9;"-->
<!--                v-else-if="item.glData && item.glData.contractBusinessType == 1"-->
<!--            >-->
<!--              {{item.glData.supplierLiaisonManPhone || '-'}}-->
<!--            </text>-->
<!--          </view>-->
<!--          <view style="font-size: 30rpx;color: #d6985f;">-->
<!--            [{{item.nodeName}}]-->
<!--          </view>-->
<!--        </view>-->

<!--        <view class="navFoot">-->
<!--          &lt;!&ndash; <view v-if="activeIndex == 4" class="nopass">未通过</view> &ndash;&gt;-->
<!--          <view v-if="activeIndex == 1" class="pass">已通过</view>-->
<!--          <view v-else class="nosh">待审核</view>-->
<!--          <view class="tongzhitime">-->
<!--            <text>通知时间：</text>-->
<!--            <text style="color: #13b36b;">{{item.todoTime}}</text>-->
<!--          </view>-->
<!--        </view>-->
<!--      </view>-->
<!--    </view>-->
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<style scoped>

</style>