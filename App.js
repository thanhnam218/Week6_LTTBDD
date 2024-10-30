import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,Image,TouchableOpacity
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'ca nau lau, nau mi',
    shop:'Shop Devang',
    image: require('./ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1KG kho ga bo toi...',
    shop:'Shop LTD Food',
    image: require('./ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'xe can cau da nang',
    shop:'Shop Thế giới đồ ch.',
    image: require('./xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'do choi da dang',
    shop:'Shop Thế giới đồ ch.',
    image: require('./do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'lanh dao gian don',
    shop:'Shop Minh Long Book',
    image: require('./lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'hieu long tre con',
    shop:'Shop Minh Long Book',
    image: require('./hieu_long_con_tre.png'),
  },
];

type ItemProps = {
  title: string;
  shop: string;
  image:any;
};

const Item = ({title, shop,image}: ItemProps) => (
  <View style={styles.item}>
    <Image source={image} style={styles.imageItem} />
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shop}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatbutton}>
      <Text style={styles.textChat}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.arrowButton}>
          <Image
            source={require('./Vector.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textChat}>Chat</Text>
        <TouchableOpacity style={styles.arrowButton}>
          <Image
            source={require('./bi_cart-check.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:13, padding:20}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      <FlatList
        data={DATA}
         renderItem={({ item }) => <Item image={item.image} title={item.title} shop={item.shop}/>}
        keyExtractor={item => item.id}
      />

      <View style={styles.menu}>
        <TouchableOpacity style={styles.arrowButton}>
          <Image
            source={require('./Group10.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton}>
          <Image
            source={require('./Vector(Stroke).png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton}>
          <Image
            source={require('./Vector1(Stroke).png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  menu:{
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#1BA9FF',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#c4c4c4',
    borderRadius:8,
    height:74
  },
  title: {
    fontSize: 12,
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textChat:{
    fontSize:16,
    color:'white',
  },
  imageItem:{
    height:70,
    width:70
  },
  shop:{
    fontSize:12,
    color:'red'
  },
  chatbutton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:35,
    width:80,
    backgroundColor:'#F31111',
    borderRadius:5
  }
});

export default App;