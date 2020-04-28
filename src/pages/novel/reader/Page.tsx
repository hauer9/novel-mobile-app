import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import { observer } from 'mobx-react'
import { useWindowSize } from '../../../hooks'

export interface IPageProps {
  page: string
  pageIdx: number
  fontSize: number
  handle: (e: any, index: number) => void
}

const { height, width } = useWindowSize()

export const Page: React.SFC<IPageProps> = observer(({
  page,
  pageIdx,
  fontSize,
  handle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={(e: any) => handle(e, pageIdx)}>
      <View style={styles.root}>
        <Text
          style={{
            fontSize,
            lineHeight: Math.ceil(fontSize + 15),
            fontWeight: `300`,
            fontVariant: ['tabular-nums'],
          }}
        >
          {page}
        </Text>
        <Text style={styles.pageCount}>{pageIdx + 1}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
})

const styles = StyleSheet.create({
  root: {
    width,
    height,
    paddingLeft: 20,
    paddingVertical: 40,
    backgroundColor: `#fff`,
  },
  pageCount: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    textAlign: 'right',
    fontSize: 12,
    color: '#747d8c',
  },
})