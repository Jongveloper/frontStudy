import React, { useCallback, useState } from 'react'
import { Alert, Pressable, Text, View } from "react-native";
import orderSlice, { Order } from "../slices/order";
import { StyleSheet } from "react-native";
import { useAppDispatch } from "../store";
import axios, { AxiosError } from "axios";
import Config from "react-native-config";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LoggedInParamList } from "../../AppInner";
import EncryptedStorage from "react-native-encrypted-storage";

function EachOrder({ item }: { item: Order }) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();
  const [detail, setDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const toggleDetail = useCallback(() => {
    setDetail(prev => !prev)
  }, []);

  const onAccept = useCallback(async () => {
    try {
      setLoading(false)
      await axios.post(
        `${Config.API_URL}/accept`,
        { orderId: item.orderId },
        { headers: { authorization: `Bearer ${accessToken}` } } ,
      );
      dispatch(orderSlice.actions.acceptOrder(item.orderId));
      setLoading(true);
      navigation.navigate('Delivery')
    } catch (error) {
      let errorResponse = (error as AxiosError).response;
      if (errorResponse?.status === 400) {
        Alert.alert('알림', errorResponse.data.message)
        dispatch(orderSlice.actions.rejectOrder(item.orderId))
      }
      setLoading(true);
    }
    dispatch(orderSlice.actions.acceptOrder(item.orderId))
  }, [accessToken, navigation, dispatch, item.orderId])
  const onReject = useCallback(() => {
    dispatch(orderSlice.actions.rejectOrder(item.orderId))
  }, [dispatch, item.orderId])
  return (
    <View key={item.orderId} style={styles.orderContainer}>
      <Pressable onPress={toggleDetail} style={styles.info}>
        <Text>
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Text>
        <Text>왕십리</Text>
        <Text>면목동</Text>
      </Pressable>
      {detail ?
        <View>
          <View>
            <Text>네이버 맵이 들어갈 장소</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Pressable onPress={onAccept} disabled={loading} style={styles.acceptButton}>
              <Text style={styles.buttonText}>수락</Text>
            </Pressable>
            <Pressable onPress={onReject} disabled={loading} style={styles.rejectButton}>
              <Text style={styles.buttonText}>거절</Text>
            </Pressable>
          </View>
        </View>

        : null}
    </View>
  )
}

const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    flex: 1,
  },
  rejectButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EachOrder;