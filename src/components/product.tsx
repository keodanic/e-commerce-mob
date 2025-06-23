import {ProductDTO} from '@/dto/product';
import {useRouter} from "expo-router"
import {Image,Pressable,StyleSheet,Text} from 'react-native'

type Props={
  data:ProductDTO
}

const Product=({data}:Props)=>{
  const router= useRouter()
  const handlePress=()=>{
    router.push({
      pathname:"/details/[id]",
      params:{id:data.id}
    })
  }
  return(
    <Pressable style={style.container} onPress={handlePress}>
      <Image style={style.image} source={{uri:data.image}}/>
      <Text style={style.title}>{data.name}</Text>
      <Text style={style.price}>{data.price.toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL"
      })}</Text>
    </Pressable>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    gap:12
  },
  image:{
    height:240,
    width:140,
    objectFit:"contain"
  },
  title:{
    fontSize:16
  },
  price:{
    fontSize:18,
    fontWeight:"bold"
  }
  
})

export default Product