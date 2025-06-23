import products from "@/data/products.json";
import { View, FlatList } from "react-native";
import Product from "../components/product";
import { ProductDTO } from "@/dto/product";

interface Props {
  item: ProductDTO;
}

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor:"#fff" }}>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{
          gap: 8,
          padding: 5
        }}
        columnWrapperStyle={{gap:8}}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: Props) => <Product data={item} />}
      />
    </View>
  );
}

export default Home;