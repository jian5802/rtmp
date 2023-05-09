import {
  View,
  Text,
  Input,
  Radio,
  RadioGroup,
  Button,
} from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import {useState} from "react";

export default function Index() {
  // 画面质量
  const [mode, setMode] = useState('SD');
  // 画面方向
  const [orientation, setOrientation] = useState('vertical');


  useLoad(() => {
    console.log('Page loaded.')
  });

  return (
    <View className='rtmp'>
      <View className="pageForm">
        <View className="pageItem">
          <Text className="pageText">推流地址</Text>
          <Input className="url" placeholder="rtmp://"/>
        </View>
        <View className="pageItem">
          <Text className="pageText">画面质量</Text>
          <View className="radioBtn">
            <View
              className={mode === 'SD' ? "btnItem one selected" : "btnItem one"}
              onClick={() => {
                setMode('SD');
              }}
            >SD</View>
            <View
              className={mode === 'HD' ? "btnItem selected" : "btnItem"}
              onClick={() => {
                setMode('HD');
              }}
            >HD</View>
            <View
              className={mode === 'FHD' ? "btnItem last selected" : "btnItem last"}
              onClick={() => {
                setMode('FHD');
              }}
            >FHD</View>
          </View>

        </View>
        <View className="pageItem">
          <Text className="pageText">画面方向</Text>
          <View className="radioBtn">
            <View
              className={orientation === 'vertical' ? 'btnItem one selected' : 'btnItem one'}
              onClick={() => {
                setOrientation('vertical');
              }}
            >竖屏推流</View>
            <View
              className={orientation === 'horizontal' ? 'btnItem last selected' : 'btnItem last'}
              onClick={() => {
                setOrientation('horizontal');
              }}
            >横屏推流</View>
          </View>
        </View>
      </View>
      <Button type="default" className="startBtn">开始</Button>
    </View>
  )
}
